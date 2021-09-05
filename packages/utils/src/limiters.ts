// Throttle with ensured final and immediate invocations
// see: https://gist.github.com/beaucharman/e46b8e4d03ef30480d7f4db5a78498ca#gistcomment-3608554
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <F extends (...args: any[])=>unknown>(callback: F, wait: number): F => {
  let queuedToRun: ReturnType<Window['setTimeout']> | undefined;
  let previouslyRun: number;  
  return function invokeFn(this: ThisType<F>, ...args: Parameters<F>) {
    const now = Date.now();
    queuedToRun = clearTimeout(queuedToRun) as undefined;  
    if (!previouslyRun || (now - previouslyRun >= wait)) {
      callback.apply(this, args);
      previouslyRun = now;
    } else {
      queuedToRun = setTimeout(
        () => invokeFn.apply(this, args),
        wait - (now - previouslyRun)
      ) as unknown as ReturnType<Window['setTimeout']>;
    }
  } as F;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <F extends (...args: any[])=>unknown>(fn: F, wait = 500) => {
  let timeout: number;
  return function (this: ThisType<F>, ...args: Parameters<F>) {
    clearTimeout(timeout)
    timeout = (setTimeout as Window['setTimeout'])(() => fn.call(this, ...args), wait)
  }
};
