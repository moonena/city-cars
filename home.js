import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// بيانات مشروعك من Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// التحقق من حالة تسجيل الدخول
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "signup.html";
  }
});

// زر تسجيل الخروج
document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "signup.html";
  }).catch((error) => {
    alert("حدث خطأ أثناء تسجيل الخروج");
    console.log(error);
  });
});
