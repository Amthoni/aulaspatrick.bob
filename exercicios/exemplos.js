const furiaCS = ["FalleN","chelo","skullz","yuurih","KSCERATO"];
// Exercícios de fixação
// Resolva cada questão e imprima a resposta no terminal usando "console.log()"
// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"const indice = furiaCS.indexOf("chelo"
const indice = furiaCS.indexOf("chelo")

console.log(indice)
// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
// ** Use o índice encontrado na questão 1
const subst = furiaCS.splice(1, 2,  "molodoy", "YEKINDAR")
console.log(furiaCS)
// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)
const map = furiaCS.map((carro) => carro.toUpperCase())
console.log(map)
// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos
const sort = map.sort()
console.log(sort)

// 5) Usando a função .filter, filtre apenas os nomes que começam com "y"
const filter = furiaCS.filter((carro) => carro.startsWith("y"))
console.log(filter)