function encriptar() {
  if (campo1.value.length == 0) {
    alert("digite algum texto");
  } else {
    result.value = campo1.value
      .replace(/e/gim, "enter")
      .replace(/i/gim, "imes")
      .replace(/a/gim, "ai")
      .replace(/o/gim, "ober")
      .replace(/u/gim, "ufat");
      
      document.getElementById("campo1").value = "";
      document.querySelector(".imagem").style.display = "hidden";
    }
  }

function desencriptar() {
  result.value = campo1.value
    .replace(/enter/gim, "e")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ober/gim, "o")
    .replace(/ufat/gim, "u");
  document.getElementById("campo1").value = "";  

}

function copyToClipBoard() {
  navigator.clipboard.writeText(result.value);
  document.getElementById("result").value = "";
}
