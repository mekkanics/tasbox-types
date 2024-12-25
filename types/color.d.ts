type Color = [number, number, number, number];

/**
 * @customName Colour
 */
declare namespace Color {
	function create(r: number, g: number, b: number, a: number): Color;
	function fromRGB8(r: number, g: number, b: number): Color;
	function fromRGBA8(r: number, g: number, b: number, a: number): Color;
	function fromHex(hex: string): Color;

	function toRGBA8(col: Color): [number, number, number, number];
	function toHex(col: Color, withAlpha?: boolean): string;
}
