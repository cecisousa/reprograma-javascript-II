// const imgGatos = document.getElementsByClassName("item__imagem")

// for (let i = 0; i < imgGatos.length; i++){
//     imgGatos[i].addEventListener("click", function(){
//         imgGatos[i].classList.add("gatoNone")
//     })
// }

// para sumir a foto do gato no primeiro clique e retomar no segundo clique

// const imgGatos = document.getElementsByClassName("item__imagem")
      
const imgGatos = document.getElementsByClassName("item__imagem")

for (let i = 0; i < imgGatos.length; i++){
    imgGatos[i].addEventListener("click", function(){
        if (imgGatos[i].classList.contains("gatoNone")){
            imgGatos[i].classList.remove("gatoNone")
        } else {
            imgGatos[i].classList.add("gatoNone")
        }
    })
}

// ou

// const imgGatos = document.querySelectorAll(".item__imagem")

// imgGatos.forEach(function(gato){
//     gato.addEventListener("click", function(evento){
//         if (gato.classList.contains("gatoNone")){
//             gato.classList.remove("gatoNone")
//         } else {
//             gato.classList.add("gatoNone")
//         }
//     })
// })


// for (let i = 0; i < imgGatos.length; i++){
//     imgGatos[i].addEventListener("click", function(){
//         if (!(imgGatos[i].classList.contains("gatoNone"))){
//             imgGatos[i].classList.add("gatoNone")
//         } else {
//             imgGatos[i].classList.remove("gatoNone")
//         }
//     })
// }

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
