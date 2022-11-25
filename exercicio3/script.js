/* # Exercício 3

Agora, vamos manipular os arrays, 
adicionando ou removendo informações. 
Para isso, crie **três** novos arrays, 
chamados `nomeDoArrayOriginalCopia`, 
e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. 
Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. 
Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` 
para exibir o original e a cópia */

const arrayorigCopia = ["item1", "item2" , "item3"];
const arrayorigCopia2 = [1, 2, 3];
const arrayorigCopia3 = [true, 2022, false];
arrayorigCopia.unshift("itemadd")
console.log(arrayorigCopia); //(4) ['itemadd', 'item1', 'item2', 'item3']
arrayorigCopia2.pop(3);
console.log(arrayorigCopia2) // (2) [1, 2]
arrayorigCopia3.splice(1,1)
console.log(arrayorigCopia3) // (2) [true, false]



