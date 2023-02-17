class Matematica{
    soma(A,B){
        return A+B;
    }
    subtracao(A,B){
        return A-B;
    }
    divisao(A,B){
        return A/B;
    }
    multiplicacao(A,B){
        return A*B;
    }}
    var valor = new Matematica();
    var resultado = valor.soma(4,7);
    console.log(resultado);