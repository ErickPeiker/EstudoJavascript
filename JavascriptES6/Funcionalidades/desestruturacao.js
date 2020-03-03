const usuario = {
	nome : 'Erick',
	idade : 26,
	endereco: {
		cidade : 'Blumenau',
		estado : 'SC'
	}
};

const {nome, idade, endereco: { cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);