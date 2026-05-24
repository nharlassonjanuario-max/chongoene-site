import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword
}

from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

function login(){

const email =
document.getElementById("email").value;

const senha =
document.getElementById("senha").value;

signInWithEmailAndPassword(auth,email,senha)

.then(()=>{

window.location.href =
"admin.html";

})

.catch(()=>{

document.getElementById("erro").innerHTML =
"Email ou senha incorretos";

});

}

window.login = login;