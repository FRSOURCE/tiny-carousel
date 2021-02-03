import { off, on, dispatch } from "./events";

const event = 'before:go-to';
const options: AddEventListenerOptions = { passive: true };
let element: HTMLElement;
let handler: jest.Mock;

beforeAll(() => handler = jest.fn());
beforeEach(() => element = document.createElement('div'));
afterEach(() => jest.clearAllMocks());

describe('on', () => {
  let addEventListenerSpy: jest.SpyInstance;
  beforeEach(() => addEventListenerSpy = jest.spyOn(element, 'addEventListener'));

  it('should setup an event listener', () => {
    on(element, event, handler, options);

    expect(addEventListenerSpy).toHaveBeenCalledWith(event, handler, options);
  });

  it('should run handler on incoming event', () => {
    on(element, event, handler, options);
    element.dispatchEvent(new CustomEvent(event));

    expect(handler).toHaveBeenCalled();
  });
});

describe('off', () => {
  let removeEventListenerSpy: jest.SpyInstance;
  beforeEach(() => removeEventListenerSpy = jest.spyOn(element, 'removeEventListener'));

  it('should setup an event listener', () => {
    off(element, event, handler);

    expect(removeEventListenerSpy).toHaveBeenCalledWith(event, handler);
  });

  it('should not run handler on incoming event', () => {
    on(element, event, handler, options);
    off(element, event, handler);
    element.dispatchEvent(new CustomEvent(event));

    expect(handler).not.toHaveBeenCalled();
  });
});

describe('dispatch', () => {
  const payload = {to: {index: 1}};
  let dispatchEventSpy: jest.SpyInstance;
  beforeEach(() => dispatchEventSpy = jest.spyOn(element, 'dispatchEvent'));

  it('should dispatch a CustomEvent with proper event name, payload & event options', () => {
    dispatch(element, event, payload, { bubbles: true });
    expect(dispatchEventSpy).toHaveBeenCalledWith(expect.any(CustomEvent));
    expect(dispatchEventSpy).toHaveBeenCalledWith(expect.objectContaining({
      type: event,
      detail: payload,
      bubbles: true,
    }));
  });
  
  it('should trigger an event handler with CustomEvent with proper event name & payload as a payload', () => {
    on(element, event, handler);
    dispatch(element, event, payload);
    
    expect(dispatchEventSpy).toHaveBeenCalledWith(expect.any(CustomEvent));
    expect(handler).toHaveBeenCalledWith(expect.objectContaining({ detail: payload }));
  });
});
