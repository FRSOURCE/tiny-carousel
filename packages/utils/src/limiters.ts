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
