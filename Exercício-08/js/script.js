const objeto = {
    nome: "Cecilia",
    idade: "29 anos",
    profissao: "Desenvolvedora",
    graduacao: "Jornalista",
    site: "https://github.com/cecisousa",
    "gatinho-preferido": "http://portalmelhoresamigos.com.br/wp-content/uploads/2016/11/gato-filhote.png"
}

const perfil = document.getElementById("sou-a-mae")
const containerImg = document.querySelector(".conteudo")

const nomeDoPerfil = document.createElement("h3")
nomeDoPerfil.textContent = objeto.nome
perfil.appendChild(nomeDoPerfil)

const idadeDoPerfil = document.createElement("span")
idadeDoPerfil.textContent = objeto.idade
perfil.appendChild(idadeDoPerfil)

const profissaoDoPerfil = document.createElement("p")
profissaoDoPerfil.textContent = objeto.profissao
perfil.appendChild(profissaoDoPerfil)

const graduacaoDoPerfil = document.createElement("p")
graduacaoDoPerfil.textContent = objeto.graduacao
perfil.appendChild(graduacaoDoPerfil)

const siteDoPerfil = document.createElement("a")
siteDoPerfil.textContent = "Meu site"
perfil.appendChild(siteDoPerfil)
siteDoPerfil.setAttribute("href", objeto.site)
siteDoPerfil.setAttribute("target", "_blank")

const imgDoPerfil = document.createElement("img")
containerImg.appendChild(imgDoPerfil)
imgDoPerfil.setAttribute("src", objeto["gatinho-preferido"])
imgDoPerfil.setAttribute("alt", "Gatinho fofinho!")

// ou

// const perfil = document.getElementById("sou-a-mae")

// for (let propriedade in objeto) {
//     let conteudo = document.createElement("p")
//     perfil.appendChild(conteudo)
//     conteudo.textContent = objeto[propriedade]
// }
