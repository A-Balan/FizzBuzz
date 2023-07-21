// CONTROLLER FUNCTION -get inputs and displays generated values on page!
function getValues(fizzValue, buzzValue) {

    // get values from doc
    let fizzNumber = document.getElementById("fizzValue").value;
    let endNumber = document.getElementById("buzzValue").value;

    // convert to numbers
    fizzValue = Number(fizzValue);
    buzzValue = Number(buzzValue);

    // input validation
    if (isNaN(fizzValue) == true || isNaN(buzzValue) == true) {
        // make sure inputs are numbers
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

    function generateFizzBuzz(fizzValue, buzzValue) {

        // initialize array

        let array = [];

        // for loop 1-100

        for (let )

        // is it divisible by 3 & 5 -push "fizz" not the number

        // is it divisible by fizz? -push fizz, not #

        // is it divisible by fizz? -push buzz, not #

        // if not divisible- push number to array

        return array;

    }

    function displayFizzBuzz(returnArray) {

        let tableHtml = "",

        // loop array, table row for each result
        for (let index = 0; index < returnArray.length; index++) {
            let


                let tableRowHtml = `<tr><td class="${}">${}</td></tr>`;
        }

        // add rows to table
        document.getElementById("results").innerHTML = tableHtml;
    }