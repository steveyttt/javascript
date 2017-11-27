//text formatting:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting 

// wrapping something in double quotes makes it a string
"hello there"

//You can use + as a concatentation tool to merge strings together
// works with numbers and experssions too
"hello there "+"My Tyson"
"The meaning of life is " + 42
"This equation will run" + 9 / 4
"This equation will not run " + "9 / 4"

// /t gives you a tab in the console output
console.log("Flight #:\t921\t\tSeat:\t21C")

//You need to escape special characters so the terminal uses them properly
//In this case use \ before the double quotes to escape them
console.log("Login Password:\t\t\"C45GHTH\"")

//you need to back slash back slashes
console.log("Origin\\Destination")

// \n gives you a new line in your string
console.log("Origin\nDestination")

//strings can have comparison operators too
"Hello There" == "Hello There"

//Java script is case sensitive
"Howdy" != "howdy"

//You can use properties to get more information
//The length property gives you the string length
"I am a potato".length