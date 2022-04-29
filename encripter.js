function encriptar() {
  if (campo1.value.length == 0) {
    alert("digite algum texto");
  } else {
    result.value = campo1.value
      .replace(/[e|é|è|ê|ể|ë]/g, "enter")
      .replace(/[i|í|ì|î]/g, "imea")
      .replace(/[a|à|á|â|ã|ä|å]/g, "ai")
      .replace(/[o|ó|ò|ô|ö]/g, "ober")
      .replace(/[u|ú|ù|ü]/g, "ufat")
      .replace(/[$|@|!|*|%||¨|{|}|#]/, " ");

    document.getElementById("campo1").value = "";
  }
}

function desencriptar() {
  result.value = campo1.value 
    .replace(/enter/g, "e")
    .replace(/imea/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    .replace(/[$|@|!|*|%||¨|{|}|#]/, " ");

  result.value = "";
}

function copyToClipBoard() {
  var content = document.getElementById("result");

  content.select();
  document.execCommand("copy");
  document.getElementById("result").value = "";
}
