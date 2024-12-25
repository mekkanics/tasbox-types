declare namespace Engine {
	function getWindowSize(): LuaMultiReturn<[number, number]>;
	function getCurrentTime(): number;
	function quit(): never;
}
