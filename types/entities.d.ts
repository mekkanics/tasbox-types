declare type Component<T> = { readonly _phantom: unique symbol };
declare type Entity = { readonly _phantom: unique symbol };

declare namespace Entities {
	// Components
	function createComponent<T>(defaultVal: T): Component<T>;
	function getComponent<T>(ent: Entity): Component<T> | null;

	function updateComponent<T>(
		ent: Entity,
		component: Component<T>,
		value: T,
	): void;

	function findWithComponents(components: Component<any>[]): Entity[];

	// Systems
	function registerSystem<T extends any[]>(
		components: { [K in keyof T]: Component<T[K]> },
		callback: (args: [Entity, ...T]) => void,
	): void;

	// Misc
	function addAsset3d(ent: Entity, path: string): void;
	function getChildren(ent: Entity): Entity[];
}
