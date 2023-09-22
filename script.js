// Elemen Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;

  const navbarHeight = navbar.clientHeight;

  if (scrollHeight >= navbarHeight) {
    navbar.style.background =
      "rgba(255, 255, 255, 0.7)"; /* Ganti latar belakang dengan alpha = 0.5 */
  } else {
    navbar.style.background =
      "rgba(255, 255, 255, 1)"; /* Kembalikan latar belakang ke tidak transparan */
  }
});

// Button Alert
var tombolMasuk = document.getElementById("button-masuk");
tombolMasuk.addEventListener("click", function () {
  alert("Anda Berhasil Login!");
});

var tombolDaftar = document.getElementById("button-daftar");
tombolDaftar.addEventListener("click", function () {
  alert("Pendaftaran Anda Sudah Dikirim!");
});

// Task Assignment 6 - 11

document
  .getElementsByClassName("form-konten")[0]
  .addEventListener("submit", (event) => {
    event.preventDefault();
    submit();
  });

function handleGetFormData() {
  nameInput = document.getElementById("name");
  emailInput = document.getElementById("email");
  cityInput = document.getElementById("city");
  zipCodeInput = document.getElementById("zip-code");
  statusCheckbox = document.getElementById("status");

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    city: cityInput.value,
    zipCode: zipCodeInput.value,
    status: statusCheckbox.checked,
  };

  return data;
}

function isNumber(checkNum) {
  if (isNaN(checkNum)) return 0;
  return checkNum;
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(data) {
  if (
    data.name !== "" &&
    data.city !== "" &&
    data.email !== "" &&
    isNumber(data.zipCode) &&
    checkboxIsChecked(data.status)
  ) {
    return true;
  }
  return false;
}

function submit() {
  const warn = document.getElementById("warning");
  const getData = handleGetFormData();
  if (validateFormData(getData)) {
    warn.textContent = "";
  } else {
    warn.textContent = "Periksa form anda sekali lagi";
  }
}
