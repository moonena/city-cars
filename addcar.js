// addCar.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// إعدادات Firebase (بياناتك الحقيقية)
const firebaseConfig = {
  apiKey: "AIzaSyA-VOMp3xIdC0eidx7RYNY4nx7-qD2oWkI",
  authDomain: "city-cars-39404.firebaseapp.com",
  projectId: "city-cars-39404",
  storageBucket: "city-cars-39404.firebasestorage.app",
  messagingSenderId: "989936272400",
  appId: "1:989936272400:web:13410128a78c4d1b627695",
  measurementId: "G-FGGBV06PW2"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const carName = document.getElementById("carName").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const price = document.getElementById("price").value;

    try {
      await addDoc(collection(db, "cars"), {
        carName,
        model,
        year,
        price
      });

      alert("🚗 تم إضافة السيارة إلى Firebase بنجاح!");
      form.reset();
    } catch (error) {
      console.error("❌ حدث خطأ أثناء الحفظ:", error);
      alert("حدث خطأ. يرجى المحاولة لاحقًا.");
    }
  });
});
