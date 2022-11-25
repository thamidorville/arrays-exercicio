/* # Exercício 2

Com os arrays criados, agora vamos observar os arrays. 
Faça o que se pede abaixo, 
utilizando `console.log()`:
- Imprima a quantidade de itens de cada array 
(utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, 
o segundo item do segundo array, 
e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array
 e depois no terceiro array e imprima o resultado 
 destas verificações no console.log(). A primeira impressão 
deve retornar um booleano true e 
a segunda deve retornar um booleano false.*/

const arrayA = [2022, 1990, 31];
const arrayB = ["ano atual", "ano de nascimento", "minha idade"];
const arrayC = [6, "idade do meu pet", true]

console.log (arrayA.length); // 3
console.log (arrayB.length); // 3
console.log (arrayC.length); // 3

const item1 = arrayA[0]; 
console.log (item1); // 2022
const item2 = arrayB[1];
console.log(item2); // ano de nascimento
const item3 = arrayC[2];
console.log(item3) // true

console.log(arrayA.includes (1990));// true
console.log(arrayC.includes ("idade do meu pet"));//true
console.log(arrayC.includes (2022));//false




