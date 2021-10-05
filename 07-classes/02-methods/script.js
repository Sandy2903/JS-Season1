//07-classes/02-methods/script.js - 7.2: methods

(() => {
  // your code here
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Hello() {
      return "Hello, ${this.firstname} ${this.lastname}!";
    }
  }
  let person = new Person("Sandra", "Mapessa");
  console.log(person.Hello());
})();
