let livros = require("./livros.json")
 
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

//criaArquivo();

mostrarlivro(); 

