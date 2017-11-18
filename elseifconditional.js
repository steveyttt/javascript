// if ("some condition is true") {
//     "Do this"
// } else  if (something else is true) {
//     "do something else"
// } else {
//    }
//

var operationalTrains = 6;
var totalTrains = 11;

for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= operationalTrains) {
        console.log("Train number " + trainNumber + " is running")
    }
    else if (trainNumber == 10) {
        console.log("Train number " + trainNumber + " is Express")
    }
    else {
        console.log("Train number " + trainNumber + " is NOT running")
    }
}

var shape = "pentagon";
var squareSize = "small";

if (shape == "square" ) {
  if (squareSize == "big" ) {
      console.log("Thats a big square")
  } 
  else {
    console.log("Thats NOT a big square")
  }
}
else if (shape == "circle") {
    console.log("Shape is a circle")
}
else {
    console.log("cannot determine shape")
}



var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (numSheep >= 10000 ) {
      console.log("Removing " + numSheep / 2 + " sheep from the population.")
      numSheep /= 2

  }
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}