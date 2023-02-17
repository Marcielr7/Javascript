const cpf = 'meu CPF é 123.456.569-22';
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}');
console.log(cpf.match(regex));
// criando um padrao para os dados