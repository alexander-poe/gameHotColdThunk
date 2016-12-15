const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// enable CORS since we're running two servers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var jsonParser = bodyParser.json();

// you shouldn't need to serve static build since it is served by the `npm run dev` process
// but we'll keep here for reference
//app.use(express.static('build'));

let fewestGuesses = 10;
// let fewestGuesses = Infinity;
app.get('/fewest-guesses', jsonParser, function(req, res) {
	console.log('fewest guesses', fewestGuesses);
	return res.json({fewestGuesses});
});
	// console.log('RECENT:' , req.params);

app.post('/fewest-guesses', jsonParser, function(req, res) {
	console.log(req.query.fewestGuesses); 
	if (req.query.fewestGuesses > fewestGuesses) {
		fewestGuesses = req.query.fewestGuesses
	}
    // update fewestGuesses here
    // remember to compare it to the current guesess to determine which is lowest
});

const PORT = 8081;
app.listen(PORT, function () {
    console.log('Example app listening on localhost:' + PORT);
});