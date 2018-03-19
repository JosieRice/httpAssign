var https = require('https');

function getAndPrintHTML (options) {

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

    // prints out the result of things being added to buffer variable
    console.log("Buffered Chuck: ", buffer + "\n");

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

  /* Add your code here */






// calling the new function by passing an argument into it, making it more variable.
getAndPrintHTML(requestOptions);


