//variables
var trainWhistles = 3
console.log(trainWhistles)

//rules
//no spaces in a variable name
//no numbers at front of a variable
//you can use _ BUT DONT
//you can use $ BUT DONT
//camelCaseIsOk

//You can reassign a value to an existing var without referencing var again
trainWhistles = 10
console.log(trainWhistles)

//You can add variables to variables
trainWhistles = trainWhistles + 3
console.log(trainWhistles)

//This tell trainwhistles to add 3 to it's variable value 
console.log(trainWhistles += 3)
//you can use many number operatoes
console.log(trainWhistles *= 4)

//You can put var's in strings as needed
console.log("Here are the numbers for train whistles " + trainWhistles)

//You can also put expression inside strings    
console.log("Here are the numbers for train whistles " + trainWhistles * 2)

//remove and add one value from trainWhistles
trainWhistles--
trainWhistles++

//multiplies trainwhistles by 4
trainWhistles *= 4

//divides trainwhistles by 2
trainWhistles /= 2

var bigTrain = trainWhistles * 3
console.log("Here are the numbers for train whistles " + bigTrain)

var welcome = "welcome to the jungle"
var welcome2 = "welcome to the jungle 2"
console.log(welcome.length)
console.log(welcome2.length > welcome.length)
//You can grab one character from a string
console.log(welcome.charAt(8))

