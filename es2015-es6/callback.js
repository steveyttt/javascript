//Start with a blank variable
var allUserData = [];
var generalLastName = "Clinton";

//normal named function
function logStuff (userData) {
    if (typeof userData === "string") {
        console.log("userData")
    }
    else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

//function using a callback
//push data to allUserData
//Once done callback another function (logstuff)
//use getInputs parameters and send them to logStuff function
//callback functions can accept global properties
//callback functions can accept the calling functions properties
function getInput (options, callback) {
    allUserData.push (options);
    if (typeof callback === "function") {
      callback (options);
    }
}

getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);


//Using this inside a callback function
//better example here: https://www.w3schools.com/js/js_function_apply.asp
var clientData = {
  id: 094545,
  fullName: "Not Set",
  setUserName: function (firstName, lastName) {
      this.fullName = firstName + " " + lastName;
  }
}

function getUserInput(firstName, lastName, callback, callbackObj) {
    callback.apply(callbackObj, [firstName, lastName])
}

getUserInput("Borack", "Obama", clientData.setUserName, clientData);

console.log(clientData.fullName);
//console.log(window.fullName);


