const botao = document.getElementById("botao");
const menu = document.getElementById("menu");

botao.onclick = function() {
  menu.classList.toggle("ativo");
}


//mensagem de email 
// const coletor = document.querySelector("#coletor")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const Telefone = document.querySelector("#assunto")
const Mensagem = document.querySelector("#Mensagem")
const button = document.querySelector("#button")

function caixaDeEmail(){

  //isso serve para enviar por email
   emailjs.init("Vsa4gcS-3XEo-zcTk",);
  //coleta de dados 
  const dados = {

    usuario : nome.value,
    email : email.value,
    assunto : assunto.value,
    mensagem : Mensagem.value
  }
  console.log(dados)
    alert("Mensagem enviada!")

  nome.value = ""
  email.value = ""
  Telefone.value = ""
  Mensagem.value = ""

  //coleta do app do email
  const sevidorid = "service_qm2jg8h"
  const templateid = "template_jrxejl5"
  

  emailjs.send(sevidorid, templateid, dados)
  console.log(sevidorid, templateid, dados)
}



button.addEventListener("click" , caixaDeEmail)


