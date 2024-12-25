type Quaternion = [LuauVector, number];
declare namespace Quaternion {
	const IDENTITY: Quaternion;

	function create(imaginary: LuauVector, scalar: number): Quaternion;
	function fromEuler(eulerAngle: LuauVector): Quaternion;
	function fromAxisAngle(axis: LuauVector, angle: number): Quaternion;
	function conjugate(quat: Quaternion): Quaternion;
	function inverse(quat: Quaternion): Quaternion;
	function rotate(quat: Quaternion, vec: LuauVector): LuauVector;
	function mul(a: Quaternion, b: Quaternion): Quaternion;
}
