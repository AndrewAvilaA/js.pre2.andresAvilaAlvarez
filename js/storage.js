const ul = document.querySelector("ul")

const listarCarteles = () => {
    debugger
    ul.innerHTML = ``
    if (localStorage.getItem("cartelesValuados")){
        let cart = JSON.parse(localStorage.getItem("cartelesValuados"))
            for (elemento of cart){
                ul.innerHTML += `<li>${elemento.nombre} ${elemento.precio} $</li>`
            }
    }
}

const botonListarCarteles = document.querySelector("#botonListarCarteles")

botonListarCarteles.addEventListener ("click", listarCarteles)

const botonClearStorage = document.querySelector("#botonClearStorage")

botonClearStorage.addEventListener ("click", ()=>{
    debugger
    ul.innerHTML = ``
    cartelesValuados = []
    localStorage.clear()
})