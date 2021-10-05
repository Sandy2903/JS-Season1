// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set

(() => {
  const people = new Set([
    "Nicolas",
    "Nick",
    "Leny",
    "Alexandre",
    "Charlène",
    "Laureline",
    "Esther",
    "Simon",
    "Lucas",
  ]);

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    console.log("How many people are in the list " + people.size);
    console.log("Is there Alexandre in the list? " + people.has("Alexandre"));
  });
})();
