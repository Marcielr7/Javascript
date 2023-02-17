let lista = [1,2,5];
let listaincluir=[3,4];
for (let i = 0; i < listaincluir.length; i++){
    for (let j = 0 ; j < lista.length; j++){
        if (lista[j] >= listaincluir[i]){
            lista.splice(j, 0 ,listaincluir[i]);
            // splice =inserir valores em sequencia
            j++;
        }
        
    }
}
console.log(lista);
// com spread
 const listresult = [1,2, ...listaincluir,5];
            // ... incluiu lista
 console.log(listresult);

 // adicionando itens na lista
 let arr = [10 ,11,15]
 let arr2 = arr;
 arr2.push(12,13,14)
 // push adiciona itens na lista ou ate lista em listas msm

 console.log(arr);
 console.log(`arr2 = ${arr2}`);
