/** @noSelfInFile */

// TODO: Should be defined by lua-types/luau in the future.
type LuauVector = { readonly __internal__: unique symbol };

declare namespace vector {
	function create(x: number, y: number, z: number): LuauVector;
	function create(x: number, y: number, z: number, w: number): LuauVector;
	function magnitude(v: LuauVector): number;
	function normalize(v: LuauVector): LuauVector;
	function cross(v1: LuauVector, v2: LuauVector): LuauVector;
	function dot(v1: LuauVector, v2: LuauVector): number;
	function angle(v1: LuauVector, v2: LuauVector, axis?: LuauVector): number;
	function floor(v: LuauVector): LuauVector;
	function ceil(v: LuauVector): LuauVector;
	function abs(v: LuauVector): LuauVector;
	function sign(v: LuauVector): LuauVector;
	function clamp(v: LuauVector, min: LuauVector, max: LuauVector): LuauVector;
	function max(v1: LuauVector): LuauVector;
	function min(v1: LuauVector): LuauVector;
}
