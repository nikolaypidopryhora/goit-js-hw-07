const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  console.log({ email: email.trim(), password: password.trim() });
  loginForm.reset();
});
