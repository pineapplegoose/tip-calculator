// A simple tip calculator that calculates the tip and bill amount per person, based on the bill amount and the tip percentage.
var buttonValue = 0;
var dollar = "$ ";

// Select all the buttons with the class name "button"
const buttons = document.querySelectorAll(".tipbutton");
var custom = document.getElementById("tipcustom");

custom.addEventListener("input", function() {
    buttonValue = custom.value;
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
    }
    console.log(`The value is: ${buttonValue}`);
    Calculate();

});
// Loop through each button
for (let i = 0; i < buttons.length; i++) {

  // Add a click event listener to each button
    buttons[i].addEventListener("click", function() {

        buttonValue = this.value;

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        
    // Add the "active" class to the clicked button
        this.classList.add("active");
        
        console.log(`The value of the clicked button is: ${buttonValue}`);
    // Get the value of the clicked button
        Calculate();
        // Do something with the value
        
        
    });
}


// A function to reset all the values to default
function Res(){
    document.getElementById("billinput").value = "";
    document.getElementById("tipamount").innerHTML = dollar+"0.00";
    document.getElementById("billamount").innerHTML = dollar+"0.00";
    document.getElementById("billperson").value = "";
    document.getElementById("reset").style.backgroundColor = "hsla(172, 67%, 45%, 0.301)";
    document.getElementById("reset").style.cursor = "default";
    const buttons = document.querySelectorAll(".tipbutton");
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
    }
    buttonValue = 0;

    const errorText = document.getElementById("errormessage");
    errorText.style.display = "none";


}
// A function to calculate the tip and bill amount
function Calculate(){

    document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)";
    document.getElementById("reset").style.cursor = "pointer";
    var bill = document.getElementById("billinput").value;
    var person = document.getElementById("billperson").value;
    
    
    // Sets the value of the button to the variable buttonvalue
    var tips = (bill * buttonValue) / 100;
    var tipamount= tips / person;
    var billamount = (parseFloat(bill) + parseFloat(tipamount)) / person;

    // Sets the value of the tip and bill amount to default if values are not entered correctly and display the values if entered correctly

    if (billamount == NaN || billamount == Infinity || bill==0|| billamount == 0) {
        document.getElementById("billamount").innerHTML = dollar+"0.00";
    }
    else{
        document.getElementById("billamount").innerHTML = dollar+billamount.toFixed(2)
    }

    if (tipamount == NaN || tipamount == Infinity || person==0) {
        document.getElementById("tipamount").innerHTML = dollar+"0.00";
        document.getElementById("billamount").innerHTML = dollar+"0.00";
    }
    else{
    document.getElementById("tipamount").innerHTML = dollar+tipamount.toFixed(2);
    }
    if (person==0 && bill==0&& buttonValue==0) {
        document.getElementById("reset").style.backgroundColor = "hsla(172, 67%, 45%, 0.301)";
        document.getElementById("reset").style.cursor = "default";
    }
}
    const inputField = document.getElementById("billinput");

    inputField.addEventListener("input", function() {
    // Get the current input value
    const inputValue = this.value.trim();

    // Validate the input using a regular expression
    const regex = /^$|^[0-9]+(\.[0-9]{1,2})?$/;
    const isValid = regex.test(inputValue);

    // Show an error message if the input is invalid
    const errorText = document.getElementById("errormessage");
    if (!isValid) {
        errorText.style.display = "block";
        inputField.classList.add("active");
    } else {
        errorText.style.display = "none";
        inputField.classList.remove("active");
    }
    });

    const inputField2 = document.getElementById("billperson");

    inputField2.addEventListener("input", function() {
    // Get the current input value
    const inputValue = this.value.trim();

    // Validate the input using a regular expression
    const regex = /^$|^[0-9]+(\.[0-9]{1,2})?$/;
    const isValid = regex.test(inputValue);

    // Show an error message if the input is invalid
    const errorText = document.getElementById("errormessage2");
    if (!isValid) {
        errorText.style.display = "block";
        inputField2.classList.add("active");

    } else {
        errorText.style.display = "none";
        inputField2.classList.remove("active");
    }
    });
