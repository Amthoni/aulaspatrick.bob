let livros = [
    {
        titulo: "As Sombras da Lua",
        autor: "Juliana Pereira",
        editora: "Estrela Editorial",
        ano: 2024,
        sinopse: "Em um mundo onde a lua esconde segredos antigos, uma jovem busca descobrir sua verdadeira origem.",
        paginas: 330,
        genero: ["fantasia", "mistério"],
        preco: 69.90
    },
    {
        titulo: "O Último Suspiro",
        autor: "Carlos Oliveira",
        editora: "Rumo Certo",
        ano: 2022,
        sinopse: "Após um acidente misterioso, um homem se vê preso em uma dimensão paralela e precisa lutar por sua sobrevivência.",
        paginas: 280,
        genero: ["ficção científica", "ação"],
        preco: 49.90
    },
    {
        titulo: "O Jardim das Lamentações",
        autor: "Mariana Ribeiro",
        editora: "Viver Literário",
        ano: 2021,
        sinopse: "Em uma pequena vila, um jardim parece ser a chave para entender um mistério que assombra os moradores há gerações.",
        paginas: 310,
        genero: ["drama", "mistério"],
        preco: 55.00
    },
    {
        titulo: "O Mago e a Espada",
        autor: "Ricardo Silva",
        editora: "Mundos Mágicos",
        ano: 2023,
        sinopse: "Em um reino distante, um jovem aprendiz de mago descobre um poder que pode salvar ou destruir o mundo.",
        paginas: 400,
        genero: ["fantasia", "aventura"],
        preco: 85.00
    },
    {
        titulo: "Além da Última Página",
        autor: "Fernanda Santos",
        editora: "Páginas Infinita",
        ano: 2020,
        sinopse: "Uma história dentro de uma história, onde uma escritora se vê envolvida em um enigma literário que desafia sua realidade.",
        paginas: 250,
        genero: ["mistério", "ficção psicológica"],
        preco: 39.90
    }
];
 
function mostrarlivro(){
    livros.forEach((livro) => {
        console.log(livro.titulo + "-" + 
                    livro.autor + "ano" + 
                     livro.ano + "paginas:" + 
                     livro.paginas + "preço: R$" +
                     livro.preco)
    })
}

function adicionarlivro(titulo, autor, editora, ano, sinopse, paginas, genero, preco){
    livros.push({
        titulo: titulo,
        autor: autor,
        editora: editora,
        ano: ano,
        sinopse: sinopse,
        paginas: paginas,
        genero: genero,
        preco: preco,
})
console.log("livros adicionados com sucesso!")
}

adicionarlivro("o pequeno príncipe", "leonardo davinci", "tilibra", 2025,
"um pequeno príncipe que era pequeno", 1, ["terror", "webtoon", "comédia"], 500.99);

 function criaArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require("fs");
    fs.writeFileSync("livros.json",livrosTexto)
}

criaArquivo();

mostrarlivro(); 

