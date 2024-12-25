declare namespace Input {
	function addEventListener(
		event: "press" | "release",
		callback: (action: string) => void,
	): void;
	function addButtonPressListener(
		action: string,
		callback: () => void,
	): () => void;
	function removeButtonPressListener(
		action: string,
		callback: () => void,
	): void;
	function addButtonReleaseListener(
		action: string,
		callback: () => void,
	): () => void;
	function removeButtonReleaseListener(
		action: string,
		callback: () => void,
	): void;
}
