// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set

(() => {
  const fruits = new Set([
    "apple",
    "pear",
    "strawberry",
    "tomato",
    "orange",
    "mandarin",
    "durian",
    "peach",
    "grape",
    "cherry",
  ]);

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let newFruits = [];
    for (let elem of fruits) {
      if (elem != "apple" && elem != "cherry") {
        newFruits.push(elem);
      }
    }
    newFruits.push("kiwi");
    newFruits.push("banana");
    console.log(newFruits);
  });
})();
