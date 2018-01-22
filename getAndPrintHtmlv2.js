var https = require('https');                               

function getAndPrintHTML (options) {

	var buff = "";

	https.get(options, function (response) {

	response.setEncoding('utf8');

    response.on('data', function (data) {
    	buff += data;
  	});

    response.on('end', function() {
    	console.log(buff);
    });

  });
}

var requestOptions = {
	  host: 'sytantris.github.io',
	  path: '/http-examples/step3.html'
	};

getAndPrintHTML(requestOptions);

