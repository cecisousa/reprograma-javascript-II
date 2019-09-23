const alunas = ["Raquel Pereira", "Talita Barbosa", "Lia Lobo", "Daiana Moraes", "Angelica Garcia", "Simara Conceição", "Simone Santos", "Monique Almeida", "Priscilla Alves"];

const minhaLista = document.getElementById("lista-alunas")

for (let i = 0; i < alunas.length; i++){
    let itemLista = document.createElement("li")
    itemLista.textContent = alunas[i]
    minhaLista.appendChild(itemLista)
}

// ou

// const lista = document.getElementById("lista-alunas")

// alunas.forEach(function(aluna){
//     let item = document.createElement("li")
//     item.textContent = aluna
//     lista.appendChild(item)
// })