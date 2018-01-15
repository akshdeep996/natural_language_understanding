require('dotenv').config({path: '../.env'})

var NLUV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NLUV1({

	'username': process.env.username_nlu,
	'password': process.env.password_nlu,
	'version_date': '2017-02-27'

});

var text = {
  'html': '<html><head><title>Fruits</title></head><body><h1>Apples and Oranges</h1><p>I love football! I don\'t like hockey.</p></body></html>',
  'features': {
    'emotion': {
      'targets': [
        'football',
        'hockey'
      ]
    }
  }
};

nlu.analyze(text, function(error, result) {
  if (error)
    console.log('OOPS their was an error which is :', error);
  else
    console.log(JSON.stringify(result, 0, 2));
});
