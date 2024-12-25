declare namespace Timer {
	function setInterval(duration: number, callback: () => void): number;
	function setTimeout(duration: number, callback: () => void): number;
	function clear(id: number): void;
}
