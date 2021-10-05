// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

(() => {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    // Index name
    let birdsName = [];
    let last = birds.at(-1).name;
    for (i = 0; i < 100; i = i + 1) {
      birdsName.push(birds[i].name);
      if (birds[i].name === last) {
        break;
      }
    }
    // is female?
    let femaleBird = [];
    for (i = 0; i < 100; i = i + 1) {
      if (birds[i].fem === true) {
        femaleBird.push(birds[i].name);
      }
      if (birds[i].name === last) {
        break;
      }
    }
    console.log(femaleBird);
    // adjective
    let adj = [];
    adjectives.forEach(function (value) {
      adj.push(value);
    });

    // Random
    let min = Math.ceil(0);
    let max = Math.floor(birdsName.length - 1);
    let indexBird = Math.floor(Math.random() * (max - min + 1)) + min;
    let maxAdj = Math.floor(adjectives.size - 1);
    let indexAdj = Math.floor(Math.random() * (maxAdj - min + 1)) + min;

    if (femaleBird.includes(birdsName[indexBird])) {
      document.getElementById("target").innerHTML =
        "La " + birdsName[indexBird] + " " + adj[indexAdj] + "e";
    } else {
      document.getElementById("target").innerHTML =
        "Le " + birdsName[indexBird] + " " + adj[indexAdj];
    }
  });
})();
