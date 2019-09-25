const formulario = document.getElementById("formulario-de-comentarios")
const todosOsComentarios = document.getElementById("todos-os-comentarios")
const msgErro = document.querySelector(".erro")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    let input = document.querySelector(".input-de-texto")
    let mensagem = input.value
    if (mensagem.trim() === ""){
        // primeiro retorno possível: alert("O campo deve ser preenchido")
        msgErro.textContent = "Preencha o campo!"
        // o exemplo abaixo tem um bug, repetindo a mensagem de erro a cada clique
        // const campoErro = document.querySelector("div")
        // const msgErro = document.createElement("p")
        // msgErro.textContent = "Preencha este campo!"
        // campoErro.appendChild(msgErro)
        // input.classList.add("erro-input")
        // msgErro.classList.add("erro")
    } else {
        msgErro.textContent = ""
        let novoComentario = document.createElement("p")
        novoComentario.textContent = mensagem
        todosOsComentarios.appendChild(novoComentario)
        novoComentario.classList.add("comentario")
        formulario.reset()
        // outra forma de escrever a linha acima: input.value = ""
    }
})
