// script.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("تم إنشاء الحساب بنجاح!");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("فشل في إنشاء الحساب: " + error.message);
      console.error(error);
    });
});
