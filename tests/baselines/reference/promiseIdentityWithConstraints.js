//// [promiseIdentityWithConstraints.ts]
interface IPromise<T, V> {
    then<U extends T, W extends V>(callback: (x: T) => IPromise<U, W>): IPromise<U, W>;
}
interface Promise<T, V> {
    then<U extends T, W extends V>(callback: (x: T) => Promise<U, W>): Promise<U, W>;
}

// Error because constraint V doesn't match
var x: IPromise<string, number>;
var x: Promise<string, boolean>;

//// [promiseIdentityWithConstraints.js]
// Error because constraint V doesn't match
var x;
var x;
