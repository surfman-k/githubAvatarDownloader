var https = require('https');                               

function getAndPrintHTML () {

	var buff = [];

	var requestOptions = {
	  host: 'sytantris.github.io',
	  path: '/http-examples/step2.html'
	};

	https.get(requestOptions, function (response) {

    response.on('data', function (data) {
    	buff.push(data);
  	});

    response.on('end', function() {
    	console.log(buff);
    });

  });
}

getAndPrintHTML();

