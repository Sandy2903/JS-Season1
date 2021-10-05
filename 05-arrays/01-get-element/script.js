// 05-arrays/01-get-element/script.js - 5.1: item in array

(() => {
  let fruits = [
    "apple",
    "pear",
    "raspberry",
    "tomatos",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peache",
    "grap",
    "cherry",
  ];

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    for (i = 0; i <= 3; i++) {
      document.write(fruits[3]);
    }

    alert("There is the fourth fruit = " + fruits[3]);
  });
})();
