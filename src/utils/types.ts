export type OptionalNull<
    Type,
    ExcludedKeys extends keyof Type = keyof {},
    OmittedType = Omit<Type, ExcludedKeys>,
    NullableKeys extends keyof OmittedType = { [K in keyof OmittedType]: null extends OmittedType[K] ? K : never }[keyof OmittedType],
> = Partial<Pick<OmittedType, NullableKeys>> & Pick<OmittedType, Exclude<keyof OmittedType, NullableKeys>>;
