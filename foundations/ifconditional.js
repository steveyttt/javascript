// if ("some condition is true") {
//     "Do this"
// } else {
//     "do something else"
// }

var value1 = 10;
var value2 = 9;

if (value1 < value2 ) {
    console.log("value 1 is less than 2")
} else {
    console.log("value 2 is less than 1")
}

var operationalTrains = 4;
var totalTrains = 7;

for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= operationalTrains) {
        console.log("Train number " + trainNumber + " is running")
    }
    else {
        console.log("Train number " + trainNumber + " is NOT running")
    }
}

//Print only even numbers in descending order
var num = 10;

while (num > 0) {
  if (num % 2 == 0) {
    console.log(num);
    num--;
  }
  else {
  num--;
  }
}
