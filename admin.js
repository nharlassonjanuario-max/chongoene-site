function logout(){

window.location.href =
"login.html";

}

window.logout = logout;

const tabela =
document.getElementById("tabela");

tabela.innerHTML +=

`
<tr>

<td>Lasson Nharr</td>

<td>83366363</td>

<td>Programação Web</td>

<td>Pendente</td>

<td>

<button>Editar</button>

<button>Confirmar</button>

</td>

</tr>
`;

document.getElementById("total").innerHTML = 1;

document.getElementById("pendentes").innerHTML = 1;