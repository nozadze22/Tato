const eyechange = document.querySelector("#eyechange");
const passwordInput = document.querySelector("#passwordInput");
const SUBMIT = document.querySelector("#SUBMIT");
const emailMsg = document.querySelector("#emailMsg");
const emailInput = document.querySelector("#emailInput");
const errmsg = document.querySelector("#errmsg");

eyechange.addEventListener("click", () => {
  const ispasswordTypeText = passwordInput.type === "text";
  passwordInput.type = ispasswordTypeText ? "password" : "text";
  eyechange.innerHTML = ispasswordTypeText ? eyeIcons.closed : eyeIcons.open;
});

passwordInput.addEventListener("keyup", () => {
  const pass = passwordInput.value.length;

  if (pass > 0) {
    errmsg.style.display = "block";
    passwordInput.style.borderColor = "#870000";
    errmsg.innerHTML = "invalid password";
    errmsg.style.color = "#870000";
  } else {
    errmsg.style.display = "none";
  }

  if (pass >= 4 && pass < 8) {
    errmsg.innerHTML = "weak";
    passwordInput.style.borderColor = "red";
    errmsg.style.color = "red";
  } else if (pass > 7 && pass < 12) {
    errmsg.innerHTML = "medium";
    passwordInput.style.borderColor = "yellow";
    errmsg.style.color = "yellow";
  } else if (pass > 11 && pass < 15) {
    errmsg.innerHTML = "strong";
    passwordInput.style.borderColor = "green";
    errmsg.style.color = "green";
  }
});

emailInput.addEventListener("keyup", () => {
  const patten = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (emailInput.value === "") {
    emailInput.style.borderColor = "red";
  }
  if (emailInput.value.match(patten)) {
    displayAlert("congratz", "success", "valid Email");
    emailInput.style.borderColor = "green";
  } else if (!emailInput.value.match(patten)) {
    emailInput.style.borderColor = "red";
  }
});



const eyeIcons = {
  open: '<i class="fa-solid fa-eye"></i>',
  closed: '<i class="fa-solid fa-eye-slash"></i>',
};

const stateIcons = {
  default: "",
  success: '<i class="fa-solid fa-check"></i>',
  fail: '<i class="fa-solid fa-x"></i>',
};

function displayAlert(title, icon, text = "") {
  swal.fire({ title, icon, text });
}
