let log = document.getElementById("log_form");
let reg = document.getElementById("sign_form");
let hom = document.getElementById("home");

function showRegister() {
  reg.style.display = "block";
  log.style.display = "none";
  hom.style.display = "none";
}

function showLogin() {
  reg.style.display = "none";
  log.style.display = "block";
  hom.style.display = "none";
}

function showHome(username) {
  reg.style.display = "none";
  log.style.display = "none";
  hom.style.display = "block";
  document.getElementById("userDisplay").innerText = (username);
}

function register() {
  let username = document.getElementById("reg_name").value.trim();
  let password = document.getElementById("reg_password").value;
  let email = document.getElementById("reg_email").value.trim();
  let age = document.getElementById("reg_age").value;

  if (!username || !password || !email || !age) {
    alert("Please fill all required data");
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(username) || !/[a-zA-Z]/.test(username)) {
    alert("Username must contain letters only");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("Username already exists");
    return;
  }

  localStorage.setItem(username, JSON.stringify({ password, email, age }));

  alert("Registered successfully! Please log in now.");
  showLogin();
}

function login() {
  let username = document.getElementById("log_name").value.trim();
  let password = document.getElementById("log_password").value;

  let stored = localStorage.getItem(username);

  if (!stored) {
    alert("User not found.");
    return;
  }

  let userData = JSON.parse(stored);
  if (userData.password !== password) {
    alert("Wrong password.");
    return;
  }

  alert("Login successful. Welcome " + (username) + " !");
  showHome(username);
}

function logout() {
  showLogin();
}
