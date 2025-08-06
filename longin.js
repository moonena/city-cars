import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { app } from './firebase.js';

const auth = getAuth(app);

document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("تم تسجيل الدخول بنجاح ✅");
      window.location.href = "home.html"; // بعد تسجيل الدخول، يروح للهوم
    })
    .catch((error) => {
      alert("خطأ في تسجيل الدخول: " + error.message);
    });
});
