type DeepReadonly<Type> = Type extends object
  ? Type extends (...args: readonly never[]) => unknown
    ? Type
    : { readonly [Key in keyof Type]: DeepReadonly<Type[Key]> }
  : Type;

export default DeepReadonly;
