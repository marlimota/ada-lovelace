document.getElementById("botao-enviar").addEventListener("click", validaForm)

function validaForm() {
  if (document.getElementById("nome-usuaria").value != "" && document.getElementById("email-usuaria").value != "") {
    alert("Prontinho! Você receberá as novidades por e-mail.")
  } else {
    alert("Por favor, preencha os campos nome e e-mail!")
  }
}