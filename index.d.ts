declare interface Optional<T> {
  isNil: boolean
  valueOf(): T
}

declare const nil: Optional<any>

interface Object {
  isNil: boolean
}
