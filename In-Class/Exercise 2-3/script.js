// Exercise #2

// Define a Person class with properties name and age.
// Add a method greet() to this class which outputs a greeting.
// Instantiate two different Person objects and invoke their greet methods.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name}! I am ${this.age} years old!`);
    }
}

const bob = new Person ("Bob", 31);
const veronica = new Person ("Veronica", 25);

bob.greet();
veronica.greet();