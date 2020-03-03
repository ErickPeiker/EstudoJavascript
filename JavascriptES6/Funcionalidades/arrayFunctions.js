const arr = [1, 3, 4, 4, 5, 8, 10];

/**
	Percorre todos os itens e faz o que quiser com cada valor
	arrMap: 1,4,6,7,9,13,16
**/
const arrMap = arr.map(function(item, index) {
	return item+index;
});

console.log("arrMap: "+arrMap);

/**
	Faz agregações devolvendo os valores sempre para um total
	arrReduce: 35
**/
const arrReduce = arr.reduce(function(total, next) {
	return total + next;
})

console.log("arrReduce: "+arrReduce);

/**
	Efetua um filtro e quando é retornado verdadeiro o valor permanece no array, caso contrário ele é filtrado
	arrFilter: 4,4
**/
const arrFilter = arr.filter(function(item) {
	return item == 4;
})

console.log("arrFilter: "+arrFilter);

/**
	Similar ao filter por um número específico, porém se não encontrar o retorno é undefined e caso encontrar retorna apenas uma ocorrência
	arrFind: 4
**/
const arrFind = arr.find(function(item) {
	return item == 4;
})

console.log("arrFind: "+arrFind);