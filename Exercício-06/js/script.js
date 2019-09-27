const formulario = document.querySelector(".transacao__form")
const tabela = document.querySelector(".extrato__table")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const novaLinha = document.createElement("tr")
    tabela.appendChild(novaLinha)

    let input1 = document.getElementById("transacaoInputNome")
    let text1 = input1.value
    let novaColuna1 = document.createElement("td")
    novaLinha.appendChild(novaColuna1)
    novaColuna1.textContent = text1

    let input2 = document.getElementById("transacaoInputValor")
    let text2 = input2.value
    let novaColuna2 = document.createElement("td")
    novaLinha.appendChild(novaColuna2)
    novaColuna2.textContent = text2

    let input3 = document.getElementById("transacaoInputData")
    let text3 = input3.value
    let novaColuna3 = document.createElement("td")
    novaLinha.appendChild(novaColuna3)
    novaColuna3.textContent = text3
})










