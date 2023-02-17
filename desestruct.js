const pessoa = {
    nome: 'marciel',
    sobrenome :'ribeiro',
    idade:30,
    profissao: 'T.I.'
};
console.log(pessoa);
// quebrar a informação e colocar onde quiser
//let nome= pessoa.nome
//let sobrenome= pessoa.sobrenome
//let idade = pessoa.idade
//let profissao = pessoa.profissao

// fazendo de outro jeito
let {nome,sobrenome,idade,profissao} = pessoa;
console.log(nome,sobrenome,idade,profissao);

