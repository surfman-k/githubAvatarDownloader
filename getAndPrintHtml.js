var https = require('https');                               

function getAndPrintHTML () {

	var buff = "";

	var requestOptions = {
	  host: 'sytantris.github.io',
	  path: '/http-examples/step2.html'
	};

	https.get(requestOptions, function (response) {

	response.setEncoding('utf8');

    response.on('data', function (data) {
    	buff += data;
  	});

    response.on('end', function() {
    	console.log(buff);
    });

  });
}

getAndPrintHTML();

