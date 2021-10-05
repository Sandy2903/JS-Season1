// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)

(() => {
  // your code here
  var password = document.getElementById("pass-one");
  var confirmPassword = document.getElementById("pass-two");
  document.getElementById("run").addEventListener("click", () => {
    if (password === confirmPassword) {
      password.style.borderColor = "green";
      confirmPassword.style.borderColor = "green";
    } else {
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
    }
  });
})();
