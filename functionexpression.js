//this function is called into memory immediately.
function sumOfCubes2 (a, b) {
    // Do something
   return // return the output - can be used to exit a function
 }

 //This is a functionla expression. It is stored as a variable.
 //Only called once needed.
 //The semi colon at the end os quite important here (Not needed when calling a usual function)
 var sum = function sumOfCubes2 (a, b) {
    // Do something
    return a*a*a + b*b*b;
 };

 //you call it with
 //So use the VARIABLE name and not the function name
console.log(sum(4, 5));

 //anonymous function, you dont need to name it once it is in the variable
var anonymoussum = function (a, b) {
    // Do something
    return a*a*a + b*b*b;
 };
console.log(anonymoussum(4, 5));

//logs out the function
console.log(anonymoussum);

//You can nest functions within functions
var greeting = function () {
    newCustomer = false
    if (newCustomer == true) {
    console.log("Welcome to the national park");
    } else {
        console.log("welcome back to the site");
    }
    
};

function closeTerminal (message) {
    message();
}

closeTerminal(greeting);