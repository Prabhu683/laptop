var loginForm = document.querySelector('.login-form');
var registerForm = document.querySelector('.register-form');
var loginBtn = document.querySelector('.message a');
var registerBtn = document.querySelector('.register-form button');

loginBtn.addEventListener('click', function(e){
  e.preventDefault();
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

registerBtn.addEventListener('click', function(e){
  e.preventDefault();
})