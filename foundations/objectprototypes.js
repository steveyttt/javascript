//objectprototypes.js

var x = 4
var y = "4"
x.valueOf();
y.valueOf();

//This evaluates true even though they are string and integer
//JS tries to help by converting the string to a num
x.valueOf() == y.valueOf();

//This evaluates to false, it causes JS to use more strict compairsons
x.valueOf() === y.valueOf();

//concatenate an array into a string
var array = [1, 2, 3]
console.log(array.toString());

//You can modify toString to run a different function completely.
//i.e.
Array.prototype.toString = function () {
    console.log("The array youre converting contains the following items");
}
array.toString();