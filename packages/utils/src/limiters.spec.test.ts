import { throttle, debounce } from "./limiters";

const context = {};
const args = ['anything', 2];
let callback: jest.Mock;
let throttled: (...args: unknown[])=> void;
let debounced: (...args: unknown[])=> void;

beforeAll(() => {
  jest.useFakeTimers('modern');
  callback = jest.fn();
});
afterEach(() => {
  jest.advanceTimersByTime(1000); // flush all pending debounced/throttled fns
  jest.clearAllMocks();
});
afterAll(() => jest.useRealTimers());

describe('throttle', () => {
  beforeEach(() => throttled = throttle(callback, 1000));

  it('should run the callback immediately with correct context and arguments', () => {
    throttled.apply(context, args);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(...args);
    expect(callback.mock.instances[0]).toBe(context);
  });

  describe('when 500ms have passed', () => {
    it('should run the callback immediately with correct context and arguments', () => {
      throttled.apply(context, args);
      jest.advanceTimersByTime(500);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(...args);
      expect(callback.mock.instances[0]).toBe(context);
    });
  });

  describe('when ran twice and 1000ms have passed', () => {
    it('should run the callback twice with correct context and arguments', () => {
      throttled.apply(context, args);
      throttled.apply(context, args);
      jest.advanceTimersByTime(1000);

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenCalledWith(...args);
      expect(callback.mock.calls[1]).toMatchObject(args);
      expect(callback.mock.instances[0]).toBe(context);
      expect(callback.mock.instances[1]).toBe(context);
    });
  });

  describe('when ran four times throughout 2000ms passed', () => {
    it('should run the callback immediately with correct context and arguments', () => {
      throttled.apply(context, args);
      throttled.apply(context, args);
      jest.advanceTimersByTime(800);
      throttled.apply(context, args);
      jest.advanceTimersByTime(200);
      throttled.apply(context, args);
      jest.advanceTimersByTime(1000);

      expect(callback).toHaveBeenCalledTimes(3);
      expect(callback).toHaveBeenCalledWith(...args);
      expect(callback.mock.calls[1]).toMatchObject(args);
      expect(callback.mock.calls[2]).toMatchObject(args);
      expect(callback.mock.instances[0]).toBe(context);
      expect(callback.mock.instances[1]).toBe(context);
      expect(callback.mock.instances[2]).toBe(context);
    });
  });
});

describe('debounce', () => {
  beforeEach(() => debounced = debounce(callback, 1000));

  it('should not call callback immediately', () => {
    debounced();

    expect(callback).not.toHaveBeenCalled();
  });

  describe('when 500ms passed', () => {
    it('should not call callback yet', () => {
      debounced();
      jest.advanceTimersByTime(500);

      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('when called twice and 1000ms passed', () => {
    it('should call callback once', () => {
      debounced();
      debounced();
      jest.advanceTimersByTime(1000);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('when nothing passed as the timeout argument', () => {
    it('should default to 500ms', () => {
      debounced = debounce(callback);

      debounced();
      jest.advanceTimersByTime(500);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('when called single time, wait 500ms, called second time, wait 1500s, called third time, wait 1000ms', () => {
    it('should be called twice', () => {
      debounced();
      jest.advanceTimersByTime(500);
      debounced();
      jest.advanceTimersByTime(1500);
      debounced();
      jest.advanceTimersByTime(1000);

      expect(callback).toHaveBeenCalledTimes(2);
    });
  });
});
