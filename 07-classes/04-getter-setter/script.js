// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

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
