interface Object {
    isNil: boolean;
}
declare class Nil {
    isNil: boolean;
}
declare type Optional<T> = T | Nil;
declare const nil: Nil;
