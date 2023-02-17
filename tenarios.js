let nome= 'ciel';
// let===var para nao guardar em memoria
let sobrenome = 'ribeiro';
let profissao = 'tecnico em informatica';
// sem template string
console.log('meu nome é ' +  nome + ' '+ sobrenome + ' e minha profissão é : ' + profissao );
//com tenario em concatenação
console.log(`ola meu nome é ${nome}  ${sobrenome} e minha profissão é ${profissao}`);
// outro exemplo, sem ternario
let evalido=false;
function ver(evalido){
    if(evalido){
        return true;
    }else{
        return false;n
    }
}
console.log(ver(evalido
));
// com ternario em if e funçao     ?=if ,pergunta!
const resultado = evalido ? true :false;
console.log(ver(evalido));
let x= 1;
 const resultadx= x==0? 0:-1;
 console.log(resultadx);

 //outro exemplo com funçoes
 function soma(a,b){
     return a+b;
 }
 const mult = function (x,y){
     return x*y;
 }
 const div = (x,y) =>{
 //              arrow = função
    return x/y;
 } 
 const obj = () =>({ nome2:'ciel',sobrenome2:'ribeiro'});
 
 
 console.log(soma(5,5));
 console.log(mult(5,5));
 console.log(div(5,5));

