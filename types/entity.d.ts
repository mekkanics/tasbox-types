declare type Component<T> = { readonly _phantom: unique symbol };
declare type Entity = { readonly _phantom: unique symbol };

type LuaTypeMetadata = {
	boolean: boolean;
	integer: number;
	unsigned: number;
	number: number;
	string: string;
	vector: LuauVector;
	quaternion: Quaternion;
	table: LuaTable;
	// biome-ignore lint/complexity/noBannedTypes: Necessary.
	function: Function;
	userdata: LuaUserdata;
	thread: LuaThread;
	buffer: LuauBuffer;
};

declare namespace Entity {
	/// Components
	const Name: Component<string>;
	const Position: Component<LuauVector>;
	const Rotation: Component<Quaternion>;
	const Scale: Component<LuauVector>;

	function createComponent<T extends keyof LuaTypeMetadata>(
		ty: T,
	): Component<LuaTypeMetadata[T]>;
	function createComponent(): Component<null>;

	function getComponent<T>(ent: Entity, component: Component<T>): T | null;
	function setComponent<T>(
		ent: Entity,
		component: Component<T>,
		value: T,
	): void;

	function hasComponent<T>(ent: Entity, component: Component<T>): boolean;
	function removeComponent(ent: Entity, component: Component<any>): void;
	function findByComponents<T extends Component<any>[]>(
		components: [...T],
	): Entity[];

	/// Entity
	function create(): Entity;
	function getParent(child: Entity): Entity | null;
	function getChildren(parent: Entity): Entity[];
	function getId(ent: Entity): number;
	function isValid(ent: Entity): boolean;
	function destroy(ent: Entity): void;
	function getGlobalPosition(ent: Entity): LuauVector | null;
	function getGlobalRotation(ent: Entity): Quaternion | null;
	function getGlobalScale(ent: Entity): LuauVector | null;

	// Helpers
	function getName(ent: Entity): string;
	function setName(ent: Entity, name: string): void;

	function getLocalPosition(ent: Entity): LuauVector;
	function setLocalPosition(ent: Entity, position: LuauVector): void;

	function getLocalRotation(ent: Entity): Quaternion;
	function setLocalRotation(ent: Entity, rotation: Quaternion): void;

	function setLocalScale(ent: Entity, scale: LuauVector): void;
	function getLocalScale(ent: Entity): LuauVector;
}
