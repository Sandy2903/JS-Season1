
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
let age = window.prompt("What is your age?");
let gender = window.prompt("What is your gender?");
let town = window.prompt("Where do you live?");

let question = window.prompt("So you are " + age + "You are a " + gender + "And you live in " + town + "That's correct?" );

if (confirm.toLowerCase(question == "yes")) {
    // Code à éxécuter si le l'utilisateur clique sur "OK"
   alert("Great!");
    } 
    else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler"
    alert("Restart!");
    }

})();
