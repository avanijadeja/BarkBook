// javascript file for login and signup page

//for login form
const loginFormHandler = async (event) => {
  console.log("inside login form handler");
  event.preventDefault();
  // take values from login form using queryselector
  const email = document.querySelector("#logemail").value.trim();
  const password = document.querySelector("#logpass").value.trim();
  // check if email and password
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    //if response is ok then redirect to groomer page.else error message will display.
    if (response.ok) {
      document.location.replace("/groomer");
    } else {
      alert("That didn't work! Please correct username or password.");
    }
  }
};

//for signup form
const signupFormHandler = async (event) => {
  console.log("inside signup form handler");
  event.preventDefault();
  // take values from signup form using queryselector
  const username = document.querySelector("#signUpName").value.trim();
  const email = document.querySelector("#signUpEmail").value.trim();
  const password = document.querySelector("#signUpPassword").value.trim();
  //check username,email,password
  if (username && email && password) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    //if response is ok then redirect to groomer page.else error message will display.
    if (response.ok) {
      document.location.replace("/groomer");
    } else {
      alert("Failed to sign up.");
    }
  }
};

//eventListner for login form.
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
//eventListner for signup form.
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
