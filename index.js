function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-Mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneca = document.getElementById("boneca");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensagem.textContent = "Texto criptografado com sucesso";
      paragrafo.textContent = "";
      boneca.src = "./img/encriptado.jpg";
    } else {
      boneca.src = "./assets/descriptografar.png";
      tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
      paragrafo.textContent = "Digite o texto que deseja criptografar ou descriptografar";
      swal("Ooops!", "Você deve inserir um texto", "warning");
    }
  }
  
  function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-Mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneca = document.getElementById("boneca");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto descriptografado com sucesso";
        paragrafo.textContent = "";
        boneca.src = "./img/desencriptado.jpg";
      } else {
        boneca.src = "./img/boneca.png";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite o texto que deseja criptografar ou descriptografar";
        swal("Ooops!", "Você deve inserir um texto", "warning");
      }
  }