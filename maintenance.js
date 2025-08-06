const form = document.getElementById("maintenanceForm");
const list = document.getElementById("maintenanceList");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("carName").value;
  const issue = document.getElementById("issue").value;
  const date = document.getElementById("date").value;

  const maintenanceCar = { name, issue, date };

  const stored = JSON.parse(localStorage.getItem("maintenanceCars")) || [];
  stored.push(maintenanceCar);
  localStorage.setItem("maintenanceCars", JSON.stringify(stored));

  alert("تمت إضافة السيارة لقائمة الصيانة!");

  form.reset();
  displayMaintenanceCars();
});

function displayMaintenanceCars() {
  list.innerHTML = "";

  const cars = JSON.parse(localStorage.getItem("maintenanceCars")) || [];

  if (cars.length === 0) {
    list.innerHTML = "<p>لا توجد سيارات في الصيانة.</p>";
  } else {
    cars.forEach((car, i) => {
      const card = document.createElement("div");
      card.className = "car-card";

      card.innerHTML = `
        <h3>السيارة ${i + 1}</h3>
        <p><strong>الاسم:</strong> ${car.name}</p>
        <p><strong>نوع العطل:</strong> ${car.issue}</p>
        <p><strong>تاريخ الإدخال:</strong> ${car.date}</p>
      `;

      list.appendChild(card);
    });
  }
}

// عرض السيارات المسجلة بالفعل عند فتح الصفحة
displayMaintenanceCars();
