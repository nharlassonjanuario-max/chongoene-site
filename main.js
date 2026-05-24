import { db, auth } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.inscrever = async function () {

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const curso = document.getElementById("curso").value;
  const nivel = document.getElementById("nivel").value;
  const metodo = document.getElementById("metodo").value;

  const resposta = document.getElementById("resposta");

  if (
    nome === "" ||
    telefone === "" ||
    curso === "" ||
    metodo === ""
  ) {
    resposta.innerHTML = "Preencha todos os campos.";
    resposta.style.color = "red";
    return;
  }

  try {

    await addDoc(collection(db, "inscricoes"), {

      nome: nome,
      telefone: telefone,
      curso: curso,
      nivel: nivel,
      metodo: metodo,
      data: new Date()

    });

    resposta.innerHTML = "Inscrição enviada com sucesso!";
    resposta.style.color = "lime";

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("nivel").value = "";
    document.getElementById("metodo").value = "";

  } catch (erro) {

    resposta.innerHTML = "Erro ao enviar inscrição.";
    resposta.style.color = "red";

    console.log(erro);

  }

};

window.mostrarNumero = function () {

  const metodo = document.getElementById("metodo").value;

  const texto = document.getElementById("numeroPagamento");

  if (metodo === "M-Pesa") {

    texto.innerHTML = "M-Pesa: 870569900";

  }

  else if (metodo === "e-Mola") {

    texto.innerHTML = "e-Mola: 871176035";

  }

  else if (metodo === "Banco") {

    texto.innerHTML = "Banco: Millennium BIM";

  }

  else {

    texto.innerHTML = "";

  }

};