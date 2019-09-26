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

const catalogo = document.getElementById("lista-do-catalogo")

for (let livro in livros){
    let listaDeTitulos = document.createElement("h3")
    listaDeTitulos.textContent = livros[livro]["titulo"]
    catalogo.appendChild(listaDeTitulos)
    let listaDeAutores = document.createElement("p")
    listaDeAutores.textContent = livros[livro]["quemEscreveu"]
    catalogo.appendChild(listaDeAutores)
    let listaDeLinks = document.createElement("a")
    listaDeLinks.textContent = "Quero ler agora!"
    listaDeLinks.setAttribute("href", livros[livro]["link"])
    listaDeLinks.setAttribute("target", "_blank")
    catalogo.appendChild(listaDeLinks)
}
