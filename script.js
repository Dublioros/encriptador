//Secure Cookies
document.cookie = "promo_shown=1; Max-Age=2600000; Secure";

//Texto a LowerCase
function min(e) {
    e.value = e.value.toLowerCase();
}

// Solo Letras y Espacio
document.getElementById("texto-codigo").addEventListener("keypress",verificar);
function verificar(e) {
    if(e.key.match(/[a-z\s]/i)===null) {
        // Si la tecla pulsada no es la correcta se elimina
        e.preventDefault();
    }
}

// BTN ENCRIPTAR
function encriptar() {
    const texto = document.getElementById("texto-codigo").value.toLowerCase();
    const textoCodificado = texto.replace(/e/gi, "enter")
                                .replace(/i/gi, "imes")
                                .replace(/a/gi, "ai")
                                .replace(/o/gi, "ober")
                                .replace(/u/gi, "ufar");
  
    if (texto.length > 0) {
      document.getElementById("mostrar-texto").textContent = "Encriptado Exitoso";
      document.getElementById("area-mensaje").textContent = textoCodificado;
    } else {
      swal("Alerta", "Debes ingresar un texto", "warning");
    }
  }
  

//BTN DESENCRIPTAR
function desencriptar() {
    const texto = document.getElementById("area-mensaje").value.toLowerCase();
    const textoCodificado = texto.replace(/enter/gi, "e")
                                 .replace(/imes/gi, "i")
                                 .replace(/ai/gi, "a")
                                 .replace(/ober/gi, "o")
                                 .replace(/ufar/gi, "u");
  
    if (texto.length > 0) {
      document.getElementById("mostrar-texto").textContent = "Desencriptado Exitoso";
      document.getElementById("area-mensaje").textContent = textoCodificado;
    } else {
      swal("Alerta", "Debes ingresar un texto", "warning");
    }
  }
  

//BTN COPIAR
async function copiar() {
    const textoCodificado = document.getElementById("area-mensaje").value;
  
    if (textoCodificado.length > 0) {
      await navigator.clipboard.writeText(textoCodificado);
      document.getElementById("mostrar-texto").textContent = "Texto Copiado con Éxito";
    } else {
      swal("Alerta", "No hay texto para copiar", "warning");
    }
  }
  