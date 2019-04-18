
// Make the class change to enabled to style the "flight" section's CSS
function flightHandlerFunction() {
    const flightElement = document.getElementById("flight");
    flightElement.classList.remove("disabled");
    flightElement.classList.add("enabled");
};

function mindReadingHandlerFunction() {
    const mindReadElement = document.querySelector("#mindreading");
    mindReadElement.classList.remove("disabled");
    mindReadElement.classList.add("enabled");
};

function xrayHandlerFunction() {
    const xrayElement = document.querySelector("#xray");
    xrayElement.classList.remove("disabled");
    xrayElement.classList.add("enabled");
};

///////////
// Rewriting above functions to be one function that will handle activation depending on which is clicked.
///////////
function enableIndividualPowers () {
    let pickedThisOne = document.addEventListener("click", (e) => {
        console.log(e.target.id.split("-"));
        let selectedButton = e.target.id.split("-")[1];
        console.log(selectedButton);
        const chosenButton = document.querySelector(`#${selectedButton}`);
        chosenButton.classList.remove("disabled");
        chosenButton.classList.add("enabled");
    })
    

    // selec.classList.remove("disabled");
    // pickedThisOne.classList.add("enabled");


};


// Make ALL powers activated and deactivated when buttons are pushed
function enableAllPowers() {
    const allSections = document.querySelectorAll(".power");
    // Check console and make sure it's returning the correct queries
    console.log(allSections.length);
    // run through all returned sections using forEach loop to turn each on
    allSections.forEach((item) => {
        // check and make sure it's targeting the right items
        console.log(item);
        item.classList.remove("disabled");
        item.classList.add("enabled");
    });
};

function disableAllPowers() {
    const allSections = document.querySelectorAll(".power");
    // Check console and make sure it's returning the correct queries
    console.log(allSections.length);
    // run through all returned sections using forEach loop to turn each on
    allSections.forEach((item) => {
        // check and make sure it's targeting the right items
        console.log(item);
        item.classList.remove("enabled");
        item.classList.add("disabled");
    });
};


// Functions to activate the individual handlers functions on "click"
/* 
document.querySelector("#activate-flight").addEventListener("click", (e) => {
    flightHandlerFunction();
});

document.querySelector("#activate-mindreading").addEventListener("click", (e) => {
    mindReadingHandlerFunction();
});

document.querySelector("#activate-xray").addEventListener("click", (e) => {
    xrayHandlerFunction();
});
*/

// Functions to affect all buttons functions on "click"
document.querySelector("#activate-all").addEventListener("click", (e) => {
    enableAllPowers();
});

document.querySelector("#deactivate-all").addEventListener("click", (e) => {
    disableAllPowers();
});

// rewritten Function to pick button activation based on which button is clicked
enableIndividualPowers();