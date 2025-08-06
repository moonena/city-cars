// firebase إعداد
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// إعدادات المشروع بتاعك
const firebaseConfig = {
  apiKey: "مفتاحك",
  authDomain: "مشروعك.firebaseapp.com",
  projectId: "اسم_المشروع",
  storageBucket: "اسم_المشروع.appspot.com",
  messagingSenderId: "رقم",
  appId: "كود التطبيق"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// حدث على الفورم
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // يمنع الريفريش

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("تم التسجيل بنجاح، مرحبًا بك في ستي كارز 🚗!");
      window.location.href = "home.html"; // تحويل المستخدم
    })
    .catch((error) => {
      alert("خطأ: " + error.message);
    });
});
