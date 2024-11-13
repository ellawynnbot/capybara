/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ella Wynn
   Date: 12 November 2024
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function() {
    // Get the value of the input field inside the click listener
    const userName = $("#user-name").val();

    // Now let's sort it
    const userNameSorted = sortString(userName);

    // Append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});