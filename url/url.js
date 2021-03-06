require('dotenv').config({path: '../.env'})

var NLUV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NLUV1({

	'username': process.env.username_nlu,
	'password': process.env.password_nlu,
	'version_date': '2017-02-27'

});

var url_page = {

	'url': 'www.goal.com',
	'features': {	  
	  'categories': {},
	  'concepts': {
      		'limit': 2
    		}
  	}
		
}; 

nlu.analyze(url_page, function(error, result) {
  if (error)
    console.log('OOPS their was an error which is :', error);
  else
    console.log(JSON.stringify(result, 0, 2));
});
