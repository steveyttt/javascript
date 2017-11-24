//looping through an array

var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numberList[3] = undefined;

for (var i = 0; i < numberList.length ; i++) {
  console.log("The value in cell " + i + " is " + numberList[i] )
  }


var passengerList = [ ];

function addPassenger (name, list) {
  if (list.length == 0) {
    list.push(name);
  } else {
    for (var i = 0; i < list.length; i++) {
      if (list[i] == undefined) {
        list[i] = name;
        return list;
      } else if (i == list.length -1) {
        list.push(name);
        return list
      }
    }
  }
  console.log(passengerList)
}

passengerList = addPassenger("Steven Tyson", passengerList );


// Build out the numStrings function using a for loop that counts all of the strings in the array parameter called list.
// Inside the function, set up a count variable and initialize it to a value of 0. We can use this variable to keep track of the number of strings.
// Use a for loop to loop through the list array.
// If the typeof the current array index value is equal to "string", then increment the count variable.
// Outside the for loop, return the count variable with the total amount of strings found.
function numStrings(list) {
  var count = 0
  for (var i = 0; i < list.length; i++) {
    if (typeof(list[i]) == "string") {
      count++;
      return;
    }
  }
  return count;
  }


