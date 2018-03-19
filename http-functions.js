var https = require('https');


module.exports = function getHTML (options, callback) {

  var https = require('https');

  // the first parameter of https.get must match the parameter of the function above
  https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {

    // sets a variable of an empty string to add data chunks to
    var buffer = "";

    // adds a chunk of data to the buffer variable, piece by piece
    buffer += data;

    // prints based on the callback function passed as an argument, so more modular
    callback(buffer);
  });

  // prints a polite error message if there is a problem.
  response.on('error', function () {
    console.log("There has been a problem, Sir.");
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

  });

}

// function printHTML (html) {
//   console.log("You are Printing: " + html);
// }


