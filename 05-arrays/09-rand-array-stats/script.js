// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let listNumbers = [10, 45, 63, 52, 9, 78, 21, 36, 17, 99];
    let id = "";
    // document.getElementById(id).innerHTML=listNumb[0];
    for (let i = 1; i < 11; i = i + 1) {
      i = i.toString();
      id = "n-" + i;
      i = Number(i);
      document.getElementById(id).innerHTML = listNumbers[i - 1];
    }
    // smallest number:
    let min = Math.min(...listNumbers);
    document.getElementById("min").innerHTML = min;
    // biggest number:
    let max = Math.max(...listNumbers);
    document.getElementById("max").innerHTML = max;

    // sum of all numbers:
    let sum = 0;
    for (let elem of listNumbers) {
      sum = sum + elem;
    }
    document.getElementById("sum").innerHTML = sum;
    // average of all numbers:
    let average = 0;
    for (let elem of listNumbers) {
      average = average + elem;
    }

    average = average / listNumb.length;
    document.getElementById("average").innerHTML = average;
  });
})();
