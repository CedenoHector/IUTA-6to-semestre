const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning=""
    let entrar=false
    let regexemail= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    parrafo.innerHTML=""

    if(nombre.value.length <6){
        warning +="El nombre de usuario debe contener 6 o mas caracteres <br>"
        entrar=true
    }
    
    if(!regexemail.test (email.value)){
        warning +="El email no es valido <br>"
        entrar=true
    }

    if(pass.value.length <5){
        warning +="La contraseña debe contener 5 o mas caracteres <br>"
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML ="Enviado"
    }
})