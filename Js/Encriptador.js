/*Variables*/
const ButtomEncriptar = document.querySelector(".ButtomEncriptar");
const TxtEncriptado = document.querySelector(".Area_Encriptador");
const Alerta = document.querySelector(".AvisoTexto");
const Resultado = document.querySelector(".Desencriptado")
const Contenido = document.querySelector(".Caja_Resultado");
const ButtomCopiar = document.querySelector(".ButtomCopiar");
const ButtomDesencriptar = document.querySelector(".ButtomDesencriptar");

ButtomEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = TxtEncriptado.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        Alerta.style.background = "#0A3871";
        Alerta.style.color = "#FFFF";
        Alerta.style.fontWeight = "800";
        Alerta.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            Alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        Alerta.style.background = "#0A3871";
        Alerta.style.color = "#FFFF";
        Alerta.style.fontWeight = "800";
        Alerta.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            Alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        Alerta.style.background = "#0A3871";
        Alerta.style.color = "#FFFF";
        Alerta.style.fontWeight = "800";
        Alerta.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            Alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        Resultado.innerHTML = texto;
        ButtomCopiar.style.visibility = "inherit";
        Contenido.remove(); 
    }
});
ButtomDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = TxtEncriptado.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        Alerta.style.background = "#0A3871";
        Alerta.style.color = "#FFFF";
        Alerta.style.fontWeight = "800";
        Alerta.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            Alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        Alerta.style.background = "#0A3871";
        Alerta.style.color = "#FFFF";
        Alerta.style.fontWeight = "800";
        Alerta.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            Alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        Alerta.style.background = "#0A3871";
        Alerta.style.color = "#FFFF";
        Alerta.style.fontWeight = "800";
        Alerta.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            Alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        Resultado.innerHTML = texto;
        ButtomCopiar.style.visibility = "inherit";
        Contenido.remove(); 
    }
});
ButtomCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = Resultado;
    copiar.select();
    document.execCommand("copy"); 
});