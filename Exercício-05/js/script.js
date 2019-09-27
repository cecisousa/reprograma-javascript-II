const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

// const catalogo = document.getElementById("lista-do-catalogo")

// for (let livro in livros){
//     const meuLivro = document.createElement("li")
//     catalogo.appendChild(meuLivro)
//     meuLivro.classList.add("livro")

//     const listaDeTitulos = document.createElement("h3")
//     listaDeTitulos.textContent = livros[livro]["titulo"]
//     meuLivro.appendChild(listaDeTitulos)
//     listaDeTitulos.classList.add("livro__titulo")

//     const listaDeAutores = document.createElement("p")
//     listaDeAutores.textContent = livros[livro]["quemEscreveu"]
//     meuLivro.appendChild(listaDeAutores)
//     listaDeAutores.classList.add("livro__autoria")

//     const listaDeLinks = document.createElement("a")
//     listaDeLinks.textContent = "Quero ler!"
//     listaDeLinks.setAttribute("href", livros[livro]["link"])
//     listaDeLinks.setAttribute("target", "_blank")
//     meuLivro.appendChild(listaDeLinks)
//     listaDeLinks.classList.add("livro__link")

//     const botaoJaLi = document.createElement("button")
//     botaoJaLi.textContent = "Já li!"
//     meuLivro.appendChild(botaoJaLi)
//     botaoJaLi.classList.add("botao-lido")

//     const botaoDesfazer = document.createElement("button")
//     botaoDesfazer.textContent = "Desfazer"
//     meuLivro.appendChild(botaoDesfazer)
//     botaoDesfazer.classList.add("botao-desfazer")
// }

// const livroLido = document.querySelectorAll(".botao-lido")

// for (let i = 0; i < livroLido.length; i++){
//     livroLido[i].addEventListener("click", function(){
//         const check = document.querySelectorAll(".livro__titulo")
//         check[i].classList.add("livro__titulo--lido")
//         check[i].classList.remove("livro__titulo--nao-lido")
//         })
// }

// const livroNaoLido = document.querySelectorAll(".botao-desfazer")

// for (let i = 0; i < livroNaoLido.length; i++){
//     livroNaoLido[i].addEventListener("click", function(){
//         const uncheck = document.querySelectorAll(".livro__titulo")
//         uncheck[i].classList.add("livro__titulo--nao-lido")
//         uncheck[i].classList.remove("livro__titulo--lido")
//     })
// }

// segunda versão, com addEventListener() dentro do for...in

// const catalogo = document.getElementById("lista-do-catalogo")

// for (let livro in livros){
//     const meuLivro = document.createElement("li")
//     catalogo.appendChild(meuLivro)
//     meuLivro.classList.add("livro")

//     const listaDeTitulos = document.createElement("h3")
//     listaDeTitulos.textContent = livros[livro]["titulo"]
//     meuLivro.appendChild(listaDeTitulos)
//     listaDeTitulos.classList.add("livro__titulo")

//     const listaDeAutores = document.createElement("p")
//     listaDeAutores.textContent = livros[livro]["quemEscreveu"]
//     meuLivro.appendChild(listaDeAutores)
//     listaDeAutores.classList.add("livro__autoria")

//     const listaDeLinks = document.createElement("a")
//     listaDeLinks.textContent = "Quero ler!"
//     listaDeLinks.setAttribute("href", livros[livro]["link"])
//     listaDeLinks.setAttribute("target", "_blank")
//     meuLivro.appendChild(listaDeLinks)
//     listaDeLinks.classList.add("livro__link")

//     const botaoJaLi = document.createElement("button")
//     botaoJaLi.textContent = "Já li!"
//     meuLivro.appendChild(botaoJaLi)
//     botaoJaLi.classList.add("botao-lido")

//     const botaoDesfazer = document.createElement("button")
//     botaoDesfazer.textContent = "Desfazer"
//     meuLivro.appendChild(botaoDesfazer)
//     botaoDesfazer.classList.add("botao-desfazer")

//     botaoJaLi.addEventListener("click", function(){
//         listaDeTitulos.classList.add("livro__titulo--lido")
//     })

//     botaoDesfazer.addEventListener("click", function(){
//         listaDeTitulos.classList.remove("livro__titulo--lido")
//     })
// }

// terceira versão, sem botão desfazer

const catalogo = document.getElementById("lista-do-catalogo")

for (let livro in livros){
    const meuLivro = document.createElement("li")
    catalogo.appendChild(meuLivro)
    meuLivro.classList.add("livro")

    const listaDeTitulos = document.createElement("h3")
    listaDeTitulos.textContent = livros[livro]["titulo"]
    meuLivro.appendChild(listaDeTitulos)
    listaDeTitulos.classList.add("livro__titulo")

    const listaDeAutores = document.createElement("p")
    listaDeAutores.textContent = livros[livro]["quemEscreveu"]
    meuLivro.appendChild(listaDeAutores)
    listaDeAutores.classList.add("livro__autoria")

    const listaDeLinks = document.createElement("a")
    listaDeLinks.textContent = "Quero ler!"
    listaDeLinks.setAttribute("href", livros[livro]["link"])
    listaDeLinks.setAttribute("target", "_blank")
    meuLivro.appendChild(listaDeLinks)
    listaDeLinks.classList.add("livro__link")

    const botaoJaLi = document.createElement("button")
    botaoJaLi.textContent = "Marcar como lido"
    meuLivro.appendChild(botaoJaLi)
    botaoJaLi.classList.add("botao-lido")

    botaoJaLi.addEventListener("click", function(){
        // Criando um toggle
        if (listaDeTitulos.classList.contains("livro__titulo--lido")){
            listaDeTitulos.classList.remove("livro__titulo--lido")
            botaoJaLi.textContent = "Marcar como lido"
            botaoJaLi.classList.remove("botao-nao-lido")
        } else {
            listaDeTitulos.classList.add("livro__titulo--lido")
            botaoJaLi.textContent = "Marcar como não lido"
            botaoJaLi.classList.add("botao-nao-lido")
        }
    })
}