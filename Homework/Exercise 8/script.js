// Exercise 8

/* Create a class Student with properties name and grades. Implement methods to add grades and compute the average. How does the this keyword behave differently in arrow functions compared to regular functions? */

class Student {
  constructor(name, grade_1, grade_2, grade_3) {
    this.name = name;
    this.grade_1 = grade_1;
    this.grade_2 = grade_2;
    this.grade_3 = grade_3;
  }

  static average(array) {
      var total = this.grade_1 + this.grade_2 + this.grade_3;
      var count = 3;

      jQuery.each(array, function(index, value) {
          total += value;
          count++;
      });

      return total / count;
  }

  greet() {
    console.log(`Hello ${this.name}, your test average is ${average}`)
  }

}

const jeremy = new Student("Jeremy", 97, 81, 90)

jeremy.greet()

