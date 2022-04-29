//Pega o texto e joga no campo resultado
function encriptar() {
  document.getElementById("campo2").value =
    document.getElementById("campo1").value;

  document.getElementById("campo1").value = "";
}

function desencriptar(){
    
}
function copyToClipBoard() {
  var content = document.getElementById("campo2");

  content.select();
  document.execCommand("copy");
  document.getElementById("campo2").value = "";
  
}
