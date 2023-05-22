// javascript file for login

const loginFormHandler = async (event) => {
  console.log("inside login form handler");
    event.preventDefault();
  
    const email = document.querySelector('#logemail').value.trim();
    const password = document.querySelector('#logpass').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/groomer');
      } else {
        alert("That didn't work! Please correct username or password.");
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    console.log("inside signup form handler");
    event.preventDefault();
  
    const username = document.querySelector('#signUpName').value.trim();
    const email = document.querySelector('#signUpEmail').value.trim();
    const password = document.querySelector('#signUpPassword').value.trim();
  
    // console.log(signUpName);
    // console.log(signUpEmail);
    // console.log(signUpPassword);
    if (username && email && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/groomer');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  