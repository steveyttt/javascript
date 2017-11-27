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


//Setting up a park and rides system
var parkRides = [["bumpercars", 20], ["rollercoaster", 60], ["bouncy", 30], ["spinner", 15]]
var fastPassQueue = ["bumpercars", "rollercoaster", "bouncy", "spinner"]

// .shift method outputs the first item in an array 
// and removes it from the array
// var firstFastPass = fastPassQueue.shift();
// console.log(firstFastPass);

function buildTicket (allRides, passRides, pick) {
    if (passRides[0] == pick ) {
      var pass = passRides.shift();
      return function() { console.log("Quick! Youve got a Fast Pass to " + pass + "!");
      };
    } else {
        for (var i = 0; i<allRides.length ; i++ ){
            if (allRides[i][0] == pick)
            return function () {console.log("A Ticket is being printed for " + pick + "!\n" + "Your wait time is about " + allRides[i][1] + " minutes")}
        }

      }

}

var wantsRide = "bumpercars";
//var ticket = buildTicket(parkRides, fastPassQueue, wantsRide );

buildTicket(parkRides, fastPassQueue, wantsRide )();
