const arr = [1, 3, 4, 4, 5, 8, 10];

/**
	Normal function
**/
const arrMap1 = arr.map(function(item, index) {
	console.log("arrMap"+index+": "+ (item+index));	
	return item+index;
});
console.log("arrMap1: "+arrMap1);

/**
	Remove a declaração de function

**/
const arrMap2 = arr.map((item, index) => {
	console.log("arrMap"+index+": "+ (item * index));
	return item * index;
});
console.log("arrMap2: "+arrMap2);

/**
	Remove a declaração de function
	Caso tiver apenas uma sentença, pode remover as chaves e o return
**/
const arrMap3 = arr.map(item => item * 2);
console.log("arrMap3: "+arrMap3);

const teste = () => ({nome: 'Erick'})
console.log(teste());