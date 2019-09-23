const imgGatos = document.getElementsByClassName("item__imagem")

for (let i = 0; i < imgGatos.length; i++){
    imgGatos[i].addEventListener("click", function(){
        imgGatos[i].classList.add("gatoNone")
    })
}

// ou

// const muitosGatos = document.querySelectorAll(".item__imagem")

// muitosGatos.forEach(function(gato){
//     gato.addEventListener("click", function(evento){
//         evento.target.classList.add("gatoNone")
//         // gato.classList.add("gatoNone") ---> outra forma de chamar a linha acima
//     })
// })

// ou

// const muitosGatos = document.querySelectorAll(".item__imagem")

// for (let i = 0; i < muitosGatos.length; i++){
//     muitosGatos[i].addEventListener("click", function(){
//         muitosGatos[i].classList.add("gatoNone")
//     })
// }
