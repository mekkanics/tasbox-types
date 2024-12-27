declare type Component<T> = { readonly _phantom: unique symbol };
declare type Entity = { readonly _phantom: unique symbol };

declare namespace Entity {
	// Components
	function createComponent<T>(): Component<T>;
	function getComponent<T>(ent: Entity): Component<T> | null;
	function setComponent<T>(
		ent: Entity,
		component: Component<T>,
		value: T,
	): void;

	function findByComponents(components: Component<any>[]): Entity[];

	// Systems
	function registerSystem<T extends any[]>(
		components: { [K in keyof T]: Component<T[K]> },
		callback: (args: [Entity, ...T]) => void,
	): void;

	// Entity
	function fromAsset3d(path: string): Entity;
	function create(): Entity;
	function setParent(child: Entity, parent: Entity): void;
}