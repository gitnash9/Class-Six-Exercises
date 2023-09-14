// Exercise #5

// Within your Person class, add getters and setters for the age property.
// Ensure with the setter that age can't be set to a negative value.
// Instantiate a Person object, try setting a negative age, and observe the results.

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

    get ageofPerson () {
        return this.age
    }

    set updatedAge (updatedAge) {
        if (updatedAge >= 0) {
            this.age = updatedAge;
            console.log(`Age succesfully updated to ${this}`);
        } else {
            console.log("Age cannot be negative!");
        }
    }
}

const bob = new Person ("Bob", 31);
const veronica = new Person ("Veronica", 25);

bob.greet();
veronica.greet();
Person.info()

bob.updateAge = 35;
bob.updateAge = -59;
console.log("Logging Bob's Age: ", bob.ageofPerson )