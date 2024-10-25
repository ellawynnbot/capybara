// Author: Ella Wynn
// Date: 24 October 2024


// Define Variables
myTransport = ["Mini Cooper", "Friends", "Bus", "Uber"];

// create an object for my main ride
myMainRide = {
  make: "Mini Cooper",
  model: "Countryman S",
  color: "Black",
  year: "2013",
  age: function() {
      return 2024 - this.year;
  }
}

// output 
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");