// versão com gato

let comida = 10

let gato = {idade: 7, 
    nome: "Mingau", 
    totalPatas: 4, 
    corDoPelo: "malhado", 
    hobbies: ["afiar as unhas", "fugir pra rua", "ronronar"],
    miar: function(){console.log("Miau!")}, 
    comer: function(){comida -= 1; console.log(comida)}
}

gato.dormir = function(){console.log("Zzz...")}

let rolosPapelDestruidos = 0

gato.aprontar = function(){rolosPapelDestruidos += 1; console.log(rolosPapelDestruidos)}

gato.totalVidas = 7

gato.perderVidas = function(){console.log(this.totalVidas -= 1)}

gato.peso = 10

gato.comer = function() {
    comida -= 1
    this.peso += 1
    console.log(comida)
    console.log(this.peso)
}

// versão com pinguim

let pinguim = {
    nome: "Marley",
    idade: 5,
    origem: "Antártida"
}

pinguim.andar = function() {
    console.log("Andou...")
}

pinguim.podeVoar = false

pinguim.voar = function() {
    if (this.podeVoar) {
        console.log("Voando!")
    } else {
        console.log("Não conseguiu voar...")
    }
}


