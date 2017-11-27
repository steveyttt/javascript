//using the map method on the array
//Similar to a loop function
//Loops through every value in an array
//Then runs a fucntion against it
//can be built on one line for simple visibility
var numbers = [1, 3, 5, 6, 7, ];
var results = numbers.map(function (i) {return i * 2;});

console.log(results)

//This is a traditional loop in JS
//The MAP method takes this format and effectievly moves it to one line
var results = [];
for (var i = 0; i < numbers.length ; i++) {
    //results[i] = coolfunction(numbers[i])
}

