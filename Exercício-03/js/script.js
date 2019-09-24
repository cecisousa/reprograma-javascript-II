// const bg1 = document.getElementById("primeira-section")

// const bg2 = document.getElementById("segunda-section")

// const bg3 = document.getElementById("terceira-section")

// document.addEventListener("scroll", function(){
//     bg1.style.backgroundColor = "blue"
//     bg1.style.color = "red"
//     bg1.style.fontSize = "50px"
// })

// document.addEventListener("click", function(){
//     bg2.style.display = "none"
// })

// document.addEventListener("click", function(){
//     bg3.style.backgroundColor = "yellow"
//     bg3.style.color = "purple"
//     bg3.style.fontSize = "50px"
// })

// ou

// document.addEventListener("scroll", function(){
//     if (document.documentElement.scrollTop >= 200 && document.documentElement.scrollTop < 400) {
//         bg1.style.backgroundColor = "purple"
//     } else if (document.documentElement.scrollTop >= 400 && document.documentElement.scrollTop < 600 ) {
//         bg2.style.backgroundColor = "yellow"
//     } else if (document.documentElement.scrollTop >= 600) {
//         bg3.style.backgroundColor = "darkgray"
//     }
// })

// ou

const primeiraSection = document.getElementById("primeira-section")
const segundaSection = document.getElementById("segunda-section")
const terceiraSection = document.getElementById("terceira-section")

document.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop > 200){
        primeiraSection.classList.add("vermelha")
    } 
    
    if (document.documentElement.scrollTop > 400){
        segundaSection.classList.add("azul")
    }

    if (document.documentElement.scrollTop > 600){
        terceiraSection.classList.add("green")
    }
})
