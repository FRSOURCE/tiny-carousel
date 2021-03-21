import { throttle } from "./limiters";

const context = {};
const args = ['anything', 2];
let callback: jest.Mock;
let throttled: (...args: unknown[])=> void;

beforeAll(() => {
  jest.useFakeTimers('modern');
  callback = jest.fn();
});
beforeEach(() => throttled = throttle(callback, 1000));
afterEach(() => jest.clearAllMocks());
afterAll(() => jest.useRealTimers());

describe('throttle', () => {
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
