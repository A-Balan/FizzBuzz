// CONTROLLER FUNCTION -get inputs, validate them, pass the values to other functions 
function getValues() {

    // get fizz,buzz and max values from doc
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let max = document.getElementById("max").value;


    // convert to numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    max = parseInt(max);

    // input validation
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(max) && max <= 1000 && max > 0) {
        // make sure user inputs real number
         // generate array>
         let array = generateFizzBuzz(fizzValue, buzzValue, max);
         // display array >>
         displayFizzBuzz(array);

    } else {
        Swal.fire({
            title: "Oops!",
            text: "Type in a number, not text, and make sure you're values are between 1-1000",
            icon: "error",
            backdrop: false
        })
    }
}

// LOGIC FUNCTION create array according to fizzbuzz rules.
function generateFizzBuzz(fizzValue, buzzValue, max) {

    // initialize array
    // FOR each number from 1 - max
    // check if # div by values & put right value into array
    // return means you're giving it back to whatever function called this function

    let array = [];

    // For-Loop 1-100

    for (let i = 1; i <= max; i++) {
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


// VIEW FUNCTION- take in array of values and display them on page.
function displayFizzBuzz(array) {

    let FBhtml = "";

    // loop array, table row for each result
    for (let index = 0; index < array.length; index++) {

        let currentNumber = array[index];

        FBhtml = FBhtml + `<div class="col ${currentNumber}">` + currentNumber + `</div>`;
    }
    // here we put the div-row html to JS
    let resultsRow = document.getElementById("results");

    // results go here
    resultsRow.innerHTML = FBhtml;


}
