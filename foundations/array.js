//arrays can store string, values, variables and other arrays.
//Nested arrays are here
var passengers = ["Steve", "Bob", "Frank"]
var array1 = ["Steve", "Bob", 2, "Frank"]
var array2 = ["me", 2, array1]
var array3 = [array1, array2];

console.log(array3)
console.log(array3[1])
console.log(array3[1][0])

console.log(passengers[1]);

passengers[2] = "Frank22";

console.log(passengers[2]);

console.log(passengers.length);

//The pop method will remove the last item from an array and return it's value
console.log(passengers.pop());

//The shift method will remove the first item from an array and return it's value
console.log(passengers.shift());

console.log(passengers)

//The push method will push a new value into the array
passengers.push("Flamingo");

console.log(passengers)
