With Exercise 8, there were points I felt like I understood better than others. I am going to try typing these notes for my betterment and so when someone looks over it they can provide feedback on my thoughts. These are the steps I took to completely the assignment:

(1) First off, since I understood the [class] property semi-well, I went ahead and established the code for it. 
    (1.5) I was able to establish the [const jeremy = new Student] to the constructor and recieve a positive feedback through [greet] that the console was reading the code. 
(2) With the class working, I create three properties for grades. This is where I started to struggle, especially with creating an average for the grades. I thought about running something along these lines:
    get  {
      return (`${grade_1} + ${grade_2} + ${grade_3}`) / 3 
    }
    (2.5) This is turn would provide me with a rough idea of what to do, but I struggled with the [function], [get], or etc I should use to compute the average. That's when I turned to the notes and found [math.PI]. With this I found out a way to compute the averages, but it used a [function], which does not work in a [constructor]. 
(3) In the end, I couldn't really figure out much even after looking up stuff online about averages in JS. I found something like this:

class Avg {
    constructor() {}

    static average(array) {
        var total = 0;
        var count = 0;

        jQuery.each(array, function(index, value) {
            total += value;
            count++;
        });

        return total / count;
    }
}

var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(Avg.average(arry));

But I wasn't sure if I could connect two classes. Plus the assignment asked for only one class. Therefore, I was going to work on it more tonight. 