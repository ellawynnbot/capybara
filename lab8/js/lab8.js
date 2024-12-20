// Author: Ella Wynn
// Date: 4 November 2024 
// License: Public Domain 

function isEven(x){
    return (x % 2 == 0);
}

// test function 
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
// should return 
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return
console.log("Squareroot of array:", result);
