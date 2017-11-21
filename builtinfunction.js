//pop up on user pages
alert("Alert, Alert, Alert! This is an alert");

//pop up provides an OK and cancel button. cancel = false and OK = true
confirm("Dude, are you sure you wanna ride?")

//Provides a text box that someone can type into
prompt("you gonna answer this prompt")

//Store username as a variable
var userName = prompt("Please enter username")

//You can ask a user to confirm the variable too
confirm("Are you sure you username is " + userName + "?")

//check what a variable is with a typeof operator
typeof true // boolean
typeof "Thats not a valid entry!" // string
typeof 42 // number
typeof undefined
typeof null

//loop to get someones name
//ask them to confirm it is correct (which makes the variable true)
var gotName = false; 
while (gotName == false) {
    var userName = prompt("Yo Passenger!!! Whats your username?");

    if ( confirm("Are you sure your username is " + userName + "?" )) {
        alert("`Sup " + userName + "!");
        gotName = true;
    }

}

var ageIsCorrect = false;
while (ageIsCorrect == false) {
    var userAge = prompt("What's your age, user?");

    if ( confirm("You entered " + userAge + ". Is this correct?")) {
        ageIsCorrect = true
        alert("Great! Your age is logged as " + userAge + ".")
    }
}
