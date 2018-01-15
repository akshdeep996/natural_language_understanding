require('dotenv').config({path: '../.env'})

var NLUV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NLUV1({

	'username': process.env.username_nlu,
	'password': process.env.password_nlu,
	'version_date': '2017-02-27'

});


var text_p = {
  'features': {
    'semantic_roles': {}
  },
  'text': 'India was called golden bird in history.'
};


nlu.analyze(text_p, function(error, result) {
  if (error)
    console.log('OOPS their was an error which is :', error);
  else
    console.log(JSON.stringify(result, 0, 2));
});
