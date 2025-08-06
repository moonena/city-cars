// Firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-VOMp3xIdC0eidx7RYNY4nx7-qD2oWkI",
  authDomain: "city-cars-39404.firebaseapp.com",
  projectId: "city-cars-39404",
  storageBucket: "city-cars-39404.appspot.com",
  messagingSenderId: "989936272400",
  appId: "1:989936272400:web:13410128a78c4d1b627695",
  measurementId: "G-FGGBV06PW2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// إضافة سيارة
document.getElementById("addBtn").addEventListener("click", async () => {
  const carNumber = document.getElementById("carNumber").value.trim();
  const problem = document.getElementById("problem").value.trim();
  const date = new Date().toLocaleDateString("ar-EG");

  if (carNumber && problem) {
    await addDoc(collection(db, "maintenanceCars"), {
      carNumber,
      problem,
      date
    });
    alert("✅ تم إضافة السيارة بنجاح!");
    document.getElementById("carNumber").value = "";
    document.getElementById("problem").value = "";
    showCars();
  } else {
    alert("❗من فضلك أدخل كل البيانات");
  }
});

// عرض السيارات
async function showCars() {
  const list = document.getElementById("cars-list");
  list.innerHTML = "";

  const snapshot = await getDocs(collection(db, "maintenanceCars"));
  snapshot.forEach(docSnap => {
    const car = docSnap.data();
    const carId = docSnap.id;

    const carBox = document.createElement("div");
    carBox.className = "car-box";
    carBox.innerHTML = `
      <strong>🚘 رقم السيارة:</strong> ${car.carNumber}<br>
      <strong>🔧 المشكلة:</strong> ${car.problem}<br>
      <strong>📅 التاريخ:</strong> ${car.date}<br>
      <button class="delete-btn" data-id="${carId}">✅ تم الإصلاح</button>
    `;

    list.appendChild(carBox);
  });

  // إضافة حدث زر الحذف
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      await deleteDoc(doc(db, "maintenanceCars", id));
      showCars();
    });
  });
}

showCars();
