/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Ella Wynn
   Date: 2023
*/

// Add buttons to sections 
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// Add a click listener to the challenge button
$("#button-challenge").click(function(){
    // Toggle "special" class on the challenge section
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function(){
    // Toggle "special" class on the problems section
    $("#problems").toggleClass("special");
});

$("#button-results").click(function(){
    // Toggle "special" class on the output section
    $("#results").toggleClass("special");
});