
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var date = new Date();
    date = date.getHours();
    if(date < 18){
        document.getElementById("target").innerHTML = "Hello"}
    else { document.getElementById("target").innerHTML = "Good evening"}
    })();
