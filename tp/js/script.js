const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const texto = document.getElementById("mensaje");

const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings   = "";
    let entrar     = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length < 6){
        warnings += `- El nombre no es valido (minimo 6 caracteres)\n`;
        entrar = true;
    }

    if (!regexEmail.test(email.value)){
        warnings += `- El E-Mail no es valido\n`;
        entrar = true;
    }
    if ((texto.value.length > 280) || (texto.value.length == 0)){
        warnings += `- El texto no es valido\n`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerText = warnings
    }
    else{
        parrafo.innerHTML   = "Eviado";
        parrafo.style.color = "green";
    }
})

