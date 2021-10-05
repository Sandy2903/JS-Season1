// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

(() => {
  document.getElementById("run").addEventListener("click", function () {
    let userYear = document.getElementById("year").value;

    function numberOfFridaythe13thsIn(year) {
      var count = 0;
      for (var month = 0; month < 12; month++) {
        var d = new Date(year, month, 13);
        if (d.getDay() == 5) {
          count++;
        }
      }
      return count;
    }
    let temp = numberOfFridaythe13thsIn(userYear);

    document.getElementById("answer").innerHTML =
      "There are " + temp + " friday 13th in " + userYear;
  });
})();
