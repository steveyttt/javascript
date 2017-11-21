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

function feedPerRanger (a, b) {
    alert("Each Park Ranger should load " + (a / b) * 2 + " lbs of feed today.");
}


function changePowerTotal(totalPower, genID, genStatus, genPower) {
    if (genStatus == "on") {
      totalPower += genPower;
      alert("Generator #" + genID + " is now " + genStatus + ", adding " + genPower + " MW, for a total of " + totalPower + " MW!");
    } else if (genStatus == "off") {
      totalPower -= genPower;
      alert("Generator #" + genID + " is now " + genStatus + ", removing " + genPower + " MW, for a total of " + totalPower + " MW!");
    }
    return totalPower;
  }