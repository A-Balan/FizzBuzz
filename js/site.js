// CONTROLLER FUNCTION -get inputs and displays generated values on page!
function getValues() {

    // get values from doc
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // convert to numbers
    fizzValue = Number(fizzValue);
    buzzValue = Number(buzzValue);

    // input validation
    if (isNaN(fizzValue) == true || isNaN(buzzValue) == true) {
        // make sure user inputs real number
        Swal.fire({
            title: "Oops!",
            text: "Type in a number, not text",
            icon: "error",
            backdrop: false
        })
    } else {
        // display numbers if all is ok
        let array = generateFizzBuzz(fizzValue, buzzValue);

        displayFizzBuzz(array);
    }
}

// LOGIC FUNCTION
function generateFizzBuzz(fizzValue, buzzValue) {

    // initialize array

    let array = [];

    // For-Loop 1-100

    for (let i = 1; i <= 100; i++) {
        // boolean modulo check & push to array
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            array.push("FizzBuzz");
        } else if (i % fizzValue == 0) {
            array.push("Fizz");
        } else if (i % buzzValue == 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}


// VIEW FUNCTION- connects to html doc
function displayFizzBuzz(array) {

    let tableHtml = "";

    // loop array, table row for each result
    for (let index = 0; index < array.length; index++) {

        let currentNumber = array[index];

        let name = "";

        let tableRowHtml = `<tr><td class="${name}">${currentNumber}</td></tr>`;

        tableHtml = tableHtml + tableRowHtml;
    }
    // add rows to table
    document.getElementById("results").innerHTML = tableHtml;


}
