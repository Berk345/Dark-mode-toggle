const inputEL = document.querySelector(".input")

const bodyEL = document.querySelector("body")

Updatebody()

inputEL.checked = JSON.parse(localStorage.getItem("mode"))

function Updatebody() {
    if (inputEL.checked) {
        bodyEL.style.background = "black"
    }else{
        bodyEL.style.background = "white"
    }
}
inputEL.addEventListener("input", ()=>{
        Updatebody()
        Updatelocalstore
})

function Updatelocalstore() {
    localStorage.setItem("mode",JSON.stringify(inputEL.checked))
}