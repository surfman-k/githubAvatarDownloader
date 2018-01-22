var getHTML = require('./httpFunctions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printUppercase (html) {
	var replacer = html.replace(/er/g, '0r').replace(/you/g, 'j00').replace(/ck/g, 'x').replace(/a/g, '4').replace(/e/g, '3').replace(/o/g, '0').replace(/l/g, '1').replace(/s/g, '5').replace(/t/g, '7');
	console.log(replacer);
}

getHTML(requestOptions, printUppercase);