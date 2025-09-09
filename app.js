let btn = document.querySelector(".add");
let inp = document.querySelector(".inp");
let ul = document.querySelector(".innerlist");

let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".sing");

let loginBox = document.getElementById("loginBox");
let signupBox = document.getElementById("signupBox");
let todoApp = document.getElementById("todoApp");
let logoutBtn = document.getElementById("logoutBtn");

// Add task
btn.addEventListener("click", function () {
  if (inp.value == "") return;

  let item = document.createElement("li");
  item.classList.add("one");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");

  let span = document.createElement("span");
  span.innerText = inp.value;

  let debtn = document.createElement("button");
  debtn.innerText = "Delete";
  debtn.classList.add("del");


  item.appendChild(checkbox);
   item.appendChild(span);
  item.appendChild(debtn);
 
  ul.appendChild(item);
  inp.value = "";
});

// Delete task
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listel = event.target.parentElement;
    listel.remove();
    alert("Item deleted successfully 🎉");
  }
});

loginBox.style.display = "flex";
signupBox.style.display = "none";
todoApp.style.display = "none";

// Show login/signup
loginBtn.addEventListener("click", function () {
  signupBox.style.display = "none";
  loginBox.style.display = "flex";
  todoApp.style.display = "none";
});

signupBtn.addEventListener("click", function () {
  loginBox.style.display = "none";
  signupBox.style.display = "flex";
  todoApp.style.display = "none";
});

// Dummy auth (not secure, just for demo)
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user && pass) {
    alert("Login successful ✅");
    loginBox.style.display = "none";
    signupBox.style.display = "none";
    todoApp.style.display = "block";
  } else {
    alert("Please enter username and password ❌");
  }
}

function signup() {
  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;

  if (user && pass) {
    alert("Signup successful 🎉 Now login!");
    signupBox.style.display = "none";
    loginBox.style.display = "flex";
  } else {
    alert("Please fill all fields ❌");
  }
}

// Logout
logoutBtn.addEventListener("click", function () {
  todoApp.style.display = "none";
  loginBox.style.display = "flex";
});

// Attach login and signup functions to buttons
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("signupBtn").addEventListener("click", signup);


ul.addEventListener("change", function (event) {
  if (event.target.classList.contains("check")) {
    let taskText = event.target.nextSibling; // span
    if (event.target.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "gray";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.color = "black";
    }
  }
});

