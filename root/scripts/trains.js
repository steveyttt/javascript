//add a semicolon to say "were done with this line / expression so move onto the next"
console.log("train #" + 1 + "is running");
console.log("train #" + 2 + "is running");
console.log("train #" + 3 + "is running");

function countE () {
    var phrase = prompt("Which phrase would you like to examine");
    if (typeof(phrase) != "string" ){
        alert("That is not a valid entry");
        return false;
    } else {
        var eCount = 0;
        for (var index = 0; index < phrase.length ; index++) {
          if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E') 
              eCount++

        }
        alert("There are " + eCount + " E's in \"" + phrase + "\".");
        return true;
    }

}

countE()