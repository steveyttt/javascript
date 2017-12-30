function countdownTimer(target,timeLeft, options = {}) {

    //adding || to the end of the let statement sets a default value
    //in this case we are setting container to be ".timer-display" if not defined in the function params
    let container = options.container || ".timer-display";
    console.log(container);

    //using a defaults object allows you to set default for any values used in the object
    let defaults = {
        container2: ".timer-display",
        name: "Steven-Tyson",
        country: "UK"
    };
    
    //settings can hold merged properties between default and provided options
    //When merging these two objects the LAST object referenced (In this case options) will always prevail
    //the {} represents a blank object
    //the variable settings is that {} object
    //We then run the assign method and merge default with options.
    //Using let ensures the default and options var's are not modified
    let settings = Object.assign({}, defaults, options);
    console.log(settings);

    //This is the same as the above but written slightly differently
    let settings2 = {};
    Object.assign(settings2, defaults, options)
    console.log(settings2);
}

countdownTimer("hello", "hello", {container2: "bonkersman", country: "Japan"} )