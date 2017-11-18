// && binary "and" returns true if BOTH values are ture
// || binary "or" returns true if either value is true

console.log(true && false)
//returns false

console.log(true && true)
//returns true

console.log((11 >= 11 ) && ( -7 < -6))



var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
    var sheepToRemove = numSheep * .75
    console.log("Removing " + sheepToRemove + " sheep from the population." );
    numSheep =  numSheep - sheepToRemove;
  }

  else if ( numSheep >= 10000 ) {
    var sheepToRemove = numSheep * .5
    console.log("Removing " + sheepToRemove + " sheep from the population." );
    numSheep =  numSheep - sheepToRemove;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
