var https = require('https');

function getHTML (options, callback) {

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
    callback(data);
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

  // callback(data);


}

function printHTML (html) {
  console.log("You are Printing: " + html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


// calling the new function by passing two arguments into it, the requested object
// and a function to print the results, making it yet more modular
getHTML(requestOptions, printHTML);


