// Exercise #4

// Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
// Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name}! I am ${this.age} years old!`);
    }

    static info () {
        console.log("This is a person class. Don't feed after midnight, do not throw water on it!");
    }
}

const bob = new Person ("Bob", 31);
const veronica = new Person ("Veronica", 25);

bob.greet();
veronica.greet();
Person.info()