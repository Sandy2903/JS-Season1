// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let day = document.getElementById("dob-day").value;
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;
    let today = new Date();

    todayMonth = today.getMonth() + 1;
    difMonth = todayMonth - month;
    age = Math.abs(today.getFullYear() - year);

    if (difMonth < 0 || (difMonth == 0 && today.getDate() < day)) {
      age--;
    } else {
      age;
    }

    alert("Your age is: " + age + " years old.");
  });
})();
