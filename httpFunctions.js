module.exports = function getHTML (options, callback) {
var https = require('https'); 	
   var buff = "";

	https.get(options, function (response) {

		response.setEncoding('utf8');

    	response.on('data', function (data) {
    		buff += data;
  		});

    	response.on('end', function() {
    		callback(buff);
    	});

 	});
};