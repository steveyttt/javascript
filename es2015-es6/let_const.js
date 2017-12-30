//with var's they are HOISTED so they are moved to the top of the function
//This means a var is accessible from the whole function
//let is accessible only from the block is resides in

//const allows us to create a read only constant
//constants cannot be reassigned - so assign them values that should not be changed
//They are block scoped so not hoisted!
//constants MUST have a value when created

function loadProfiles (userNames) {
    const MAX_USERS = 3;
    if (userNames.length > MAX_USERS){
        let loadingMessage = "This may take a while...";
        console.log(loadingMessage);
        //console.log(flashMessage);
    }
    else {
        let flashMessage = "Load Profiles";
        //You can reassign a let if necessary after creation
        flashMessage = "Reassigned Load Profiles"
        console.log(flashMessage);
    }
    //console.log(flashMessage); // This causes an error - let stays within the block it is assigned and connot be accessed outside the else block
}

loadProfiles(["Rita", "Jim", "Frank", "Jason"]);