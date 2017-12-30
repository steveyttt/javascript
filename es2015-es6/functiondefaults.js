//Create a function which accepts a string and an object
//We can specifythe object by the curly braces below arounf popular, expires & active class
//We can tell the fuction that if popular, expires and activeClass are not referenced then we can create an empty object
//This is indicated by the = {} sign for an object
//If it's an array you can do = []
//The options inside the curly braces popular, expires & activeClass are called Named Parameters

function setPageThread(name, {popular, expires, activeClass} = {} ){
    console.log("Name: ", name);
    console.log("Popular: ", popular);
    console.log("Expires: ", expires);
    console.log("Active: ", activeClass);
}

setPageThread("New Version out Soon!", {
    popular: true,
    expires: 10000,
    activeClass: "is-page-thread"
});

//variatic function
//can accept ny number of functions
//not just for javascript
//rest parameters are how you do this
//the three dots ... make this a rest parameter
//which basically means accept any number of parameters
//Rest parameters are used in function DEFINITIONS
function displayTags(targetElement, ...tags){
    let target = targetElement
    console.log(target)

    for (let i in tags) {
        let tag = tags[i];
        console.log(tag);
    }
}

displayTags("sports", "faces", "horses");

//The spread operator allows us to SPLIT AN ARRAY into indivual elements
//Spread arguments are used with ... BEFORE the value in function execution
//Spread arguments are used in function executions
var testarray = ['1', '2', '3', '4']
var secondtestarray = ['5', '6', '7', '8']

function arraybreak(...numbers){

    for (let i in numbers) {
        let number = numbers[i];
        console.log(number);
    }
}

arraybreak(...testarray, ...secondtestarray);

//Arrow functions
//Lexical binding
//Arrow functions bind to the scope of where ther are DEFINED and not where they are used
(param1, param2, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }