type Sandbox = { readonly __internal__: unique symbol };

declare namespace Luau {
	function createSandbox(): Sandbox;
	function setSandboxGlobals(sandbox: Sandbox, globals: object): void;
	function getScriptPath(level?: number): string | null;
	function getScriptDirectory(level?: number): string | null;
	function run(sandbox: Sandbox, scriptPath: string, scriptSource: string): any;

	function runFile(sandbox: Sandbox, path: string): void;
	function createRequire(sandbox: Sandbox): (path: string) => any;
}
