// TODO: Should be defined by lua-types/luau in the future.
type LuauVector = { readonly __internal__: unique symbol };

declare namespace vector {
    function create(x: number, y: number, z: number): LuauVector;
}