function add(a, b) {
    return a + b;
}


// Get the first value from the user
var firstValue = prompt("Enter the first value")
// Get the second value from the user
var secondValue = prompt("Enter the second value")

///Check if both of the given values are numeric

var parsedFNum = parseInt(firstValue);
var parsedSNum = parseInt(secondValue);

if (!isNaN(parsedFNum) || !isNaN(parsedSNum)) {
    console.log(
        add(parsedFNum, parsedSNum)
    )
} else {
    alert("Sorry your input doesn't seem to be a number")
}
//If its numeric return the sum
