//For Loops allow you to run through the loop when you know how many times you'd like it to run through the problem
//This is best used again for loops that you know how when they should stop.

// for ( "starts with this expression, only ever runs once" ; "Loop if expression is true" ; "Do this after the loop" ) {
//     console.log("I am a potato")
// }

var trainsOperational = 8;
var totalTrains = 12;

for ( var trainNumber = 1 ; trainNumber <= trainsOperational ; trainNumber++ ) {
    console.log("Train # " + trainNumber + " is running");
}

for ( var stoppedTrain = trainsOperational + 1 ; stoppedTrain <= totalTrains ; stoppedTrain++ ) {
    console.log("Train # " + stoppedTrain + " is NOT running");
}



var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
    totalMW = totalMW + 62
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!" )
    currentGen++
}

for (var nextGen = currentGen ; nextGen <= totalGen  ; nextGen++  ) {
    totalMW = totalMW + 124
    console.log("Generator #" + nextGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!" )
}