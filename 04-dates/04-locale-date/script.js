// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
  let now = new Date();
  today = now.toUTCString() + now.toTimeString();
  document.getElementById("target").innerHTML = today;
})();
