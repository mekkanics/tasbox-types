// TODO: Should be defined by lua-types/luau in the future.
type LuauBuffer = { readonly __internal__: unique symbol };

declare namespace buffer {
	function create(size: number): LuauBuffer;

	function fromstring(str: string): LuauBuffer;
	function tostring(buffer: LuauBuffer): string;

	function len(buffer: LuauBuffer): number;

	function readi8(buffer: LuauBuffer, offset: number): number;
	function readu8(buffer: LuauBuffer, offset: number): number;
	function readi16(buffer: LuauBuffer, offset: number): number;
	function readu16(buffer: LuauBuffer, offset: number): number;
	function readi32(buffer: LuauBuffer, offset: number): number;
	function readu32(buffer: LuauBuffer, offset: number): number;
	function readf32(buffer: LuauBuffer, offset: number): number;
	function readf64(buffer: LuauBuffer, offset: number): number;
	function readstring(
		buffer: LuauBuffer,
		offset: number,
		count?: number,
	): string;

	function writei8(buffer: LuauBuffer, offset: number, value: number): void;
	function writeu8(buffer: LuauBuffer, offset: number, value: number): void;
	function writei16(buffer: LuauBuffer, offset: number, value: number): void;
	function writeu16(buffer: LuauBuffer, offset: number, value: number): void;
	function writei32(buffer: LuauBuffer, offset: number, value: number): void;
	function writeu32(buffer: LuauBuffer, offset: number, value: number): void;
	function writef32(buffer: LuauBuffer, offset: number, value: number): void;
	function writef64(buffer: LuauBuffer, offset: number, value: number): void;
	function writestring(
		buffer: LuauBuffer,
		offset: number,
		value: string,
		count?: number,
	): void;

	function copy(
		target: buffer,
		targetOffset: number,
		source: buffer,
		sourceOffset?: number,
		count?: number,
	): void;
	function fill(b: buffer, offset: number, value: number, count?: number): void;
}
