const usuario = {
	nome : 'Erick',
	idade : 26,
	empresa: 'OWL'
};

/**
	O rest operator serve para ficar com o restante da desestruturação de objetos
**/
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

/**
	Também utilizados em array
**/
const arr = [1,2,3,4,5];
const [a, b, ... c] = arr;
console.log(a);
console.log(b);
console.log(c);

/**
	O operador também pode ser utilizado na criação de funções
**/
function soma (... params) {
	return params.reduce((total, next) => total + next);
}
console.log("Soma 1: " +soma(5,4));
console.log("Soma 2: " +soma(5,4,3,2));

function functionResto(a, b, ...params) {
	return params;
}
console.log("Resto 1: " + functionResto(5));
console.log("Resto 2: " + functionResto(5, 4, 3, 2));

/**
	O operador spread faz a junção de arrays
**/

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log("Array 3: "+ arr3);



const usuario1 = {
	nome : 'Erick',
	idade : 26,
	empresa: 'OWL'
};
const usuario2 = {...usuario1, idade:27};
console.log(usuario1);
console.log(usuario2);