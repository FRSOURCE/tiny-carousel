export type DeepPartial<T> = T extends Function ? T : (T extends object ? { [P in keyof T]?: DeepPartial<T[P]>; } : T);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OmitFirstItem<F> = F extends [_: any, ...args: infer P] ? P : never;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OmitFirstArg<F extends (...args: any) => any> = (..._: OmitFirstItem<Parameters<F>>)=> ReturnType<F>
