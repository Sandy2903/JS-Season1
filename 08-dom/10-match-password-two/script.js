// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)

(() => {
  // your code here
  var password = document.getElementById("pass-one");
  var confirmPassword = document.getElementById("pass-two");
  document.getElementById("run").addEventListener("click", () => {
    if (password === confirmPassword) {
      password.style.borderColor = "green";
      confirmPassword.style.borderColor = "green";
    } else {
      password.classList.add("error");
      confirmPassword.classList.add("error");
    }
  });
})();
