// availableCars.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// إعدادات Firebase (بياناتك)
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

// عناصر الصفحة
const carList = document.getElementById("carList");
const modelFilter = document.getElementById("modelFilter");
const yearFilter = document.getElementById("yearFilter");

let allCars = [];

// جلب السيارات من Firestore
async function fetchCars() {
  const querySnapshot = await getDocs(collection(db, "cars"));
  allCars = [];
  querySnapshot.forEach(doc => {
    allCars.push(doc.data());
  });

  populateFilters();
  displayCars(allCars);
}

// عرض السيارات
function displayCars(cars) {
  carList.innerHTML = '';

  if (cars.length === 0) {
    carList.innerHTML = '<p>لا توجد سيارات مطابقة للفلتر.</p>';
    return;
  }

  cars.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.innerHTML = `
      <h3>${car.carName} - ${car.model}</h3>
      <p>السنة: ${car.year}</p>
      <p>السعر: ${car.price} جنيه</p>
    `;
    carList.appendChild(div);
  });
}

// تعبئة الفلاتر
function populateFilters() {
  const models = [...new Set(allCars.map(car => car.model))];
  const years = [...new Set(allCars.map(car => car.year))];

  models.forEach(model => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelFilter.appendChild(option);
  });

  years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });
}

// تطبيق الفلاتر
function applyFilters() {
  const selectedModel = modelFilter.value;
  const selectedYear = yearFilter.value;

  const filtered = allCars.filter(car =>
    (selectedModel === "" || car.model === selectedModel) &&
    (selectedYear === "" || car.year === selectedYear)
  );

  displayCars(filtered);
}

// أحداث الفلاتر
modelFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);

// تحميل السيارات
fetchCars();
