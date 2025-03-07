// console.log(window);
// console.log(this);
// console.log(this === window);
// window.firstName = "Aarav";
// this.lastName = "Tiwari";
// console.log(window);

// const person = {
//   name: "John",
//   age: 30,
//   greetRegular: function () {
//     return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
//   },
//   greetArrow: () => {
//     return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
//   },
// };

// console.log(person.greetRegular()); // Output: Hello, my name is John & I'm 30 years old.
// console.log(person.greetArrow()); // Output: Hello, my name is undefined & I'm undefined years old.

// function createPerson(firstName, age, pl) {
//   return {
//     firstName: firstName,
//     age: age,
//     pl: pl,
//     intro: function () {
//       console.log(
//         `Hello my name is ${this.firstName} & i love ${this.pl}. My age is ${this.age}.`
//       );
//     },
//   };
// }

// const John = createPerson("John", 30, "JavaScript");
// const Aarav = createPerson("Aarav", 20, "Python");
// Aarav.intro();

// /
//     year,
//     prop: function () {
//       console.log(`This is a ${this.brand} ${this.model} from ${this.year}`);
//     },
//   };
// }

// const car = vechicle("Toyota", "Camry", 2020);
// const motorcycle = vechicle("Honda", "CBR500R", 2019);

// car.prop();
// motorcycle.prop();

// function CreatePerson(firstName, lastName, pl) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.pl = pl;
// }

// const Aarav = new CreatePerson("Aarav", "Tiwari", "Python");
// console.log(Aarav);

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.info = function () {
//     console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
//   };
// }

// const Aarav = new Person("Aarav", 20, "Male");
// Aarav.info();

// console.log(Aarav.name);
// console.log(Aarav.age);
// console.log(Aarav.gender);

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.start = function () {
//     return `Starting the ${this.make} ${this.model} ...`;
//   };
//   this.stop = function () {
//     return `Stopping the ${this.make} ${this.model} ...`;
//   };
// }

// const car1 = new Car("Toyota", "Camry", 2020, "Silver");
// const car2 = new Car("Honda", "CR-V", 2019, "Blue");
// console.log(car1.start());
// console.log(car2.stop());

// const num1 = new Number(10);
// const str1 = new String("Aarav Tiwari");
// console.log(num1);
// console.log(typeof num1);
// console.log(str1);
// console.log(typeof str1);

// let person = {
//   greet: function () {
//     console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const Aarav = Object.create(person);
// Aarav.firstName = "Aarav";
// Aarav.lastName = "Tiwari";
// Aarav.greet();

// let jhon = Object.create(person, {
//   firstName: { value: "John" },
//   lastName: { value: "Doe" },
// });

// console.log(jhon);
// jhon.greet();

// let obj = {};

// console.log(obj.__proto__);
// console.log(obj.constructor.prototype);
// console.log(Object.getPrototypeOf(obj));
// console.log('hi my name is aarav');

function carIsOnOrOff(carIsOn) {
    if (carIsOn === true) {
        return `vroom ... vroom`
    }if (carIsOn === false) {
        return `car is off`
    }else {
        return `invalid input`
    }
}

let carIsOnOrOffInput = document.querySelector('.carIsOnOrOff');
let submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    let inputValue = carIsOnOrOffInput.value.toLowerCase().trim(); // Normalize input
let booleanValue = inputValue === "true" ? true : inputValue === "false" ? false : "invalid";
console.log(carIsOnOrOff(booleanValue));
let p = document.querySelector('p');
p.textContent = carIsOnOrOff(booleanValue);

})

