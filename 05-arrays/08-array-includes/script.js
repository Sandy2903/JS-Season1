// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {
  const fruits = [
    "apple",
    "perry",
    "strawberry",
    "tomato",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peach",
    "grapes",
    "cherry",
  ];

  // your code here
  document.getElementById("run").addEventListener("click", () => {
    const found = fruits.find((element) => element > "apple");

    alert("yes");
  });
})();
