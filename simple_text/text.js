var NLUV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var nlu = new NLUV1({
  'username': '68096dc3-fef3-4a73-a90e-147214cd5329',
  'password': 'CTBA3MEo2jbm',
  'version_date': '2017-02-27'
});

var letters = {
  'text': 'Nitte Meenakshi is a great colege withe great teachers !',
  'features': {
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
    console.log(JSON.stringify(result, 0, 4));
});
