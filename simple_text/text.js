require('dotenv').config()

var NLUV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var nlu = new NLUV1({
  'username': process.env.username_nlu,
  'password': process.env.password_nlu,
  'version_date': '2017-02-27'
});

var letters = {
  'text': 'Nitte Meenakshi is a great colege with great teachers !',
  'features': {
    'categories':{
    'art and entertainment':true,
    'limit':1

   },
    'entities': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    },
    'keywords': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    }
   
  }
}

nlu.analyze(letters, function(error, result) {
  if (error)
    console.log('OOPS thir was an error which is :', error);
  else
    console.log(JSON.stringify(result, 0, 3));
});
