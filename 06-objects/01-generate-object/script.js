// 06-objects/01-generate-object/script.js - 6.1: genererate an object

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let user = {
      lastname: "MAPESSA",
      firstname: "Sandra",
      age: "38 years old",
      city: "Court-Saint-Etienne",
      country: "Belgium",
    };

    let myArray = Object.values(user);
    console.log(
      "Hello Sandra Mapessa " +
        " " +
        "You are 38 year old, " +
        " " +
        " and you live in Court-Saint-Etienne in Belgium "
    );
  });
})();
