export default function soma (...params) {
	return params.reduce((total, next) => total + next);
}