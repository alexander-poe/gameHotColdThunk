# Hot-n-Cold

Traditional Hot and Cold number guessing game.

## 	Game Instructions
This is a Hot or Cold Number Guessing Game. The game goes like this:
1. I pick a random secret number between 1 to 100 and keep it hidden.
2. You need to guess until you can find the hidden secret number.
3. You will get feedback on how close ("hot") or far ("cold") your guess is.


### Installing the game

* Clone the repository locally
* Install locally using npm install
* Run the development task: `npm run dev`
    * Starts a server running at http://localhost:8080
    * Automatically rebuilds when any of your files change
# gameHotColdThunk


abstract
  - we are adding a feature to the hot cold app
  - it will store the fewest guesses on the server
  - client side will interact with the server side when winning the game
  - it will determine if the new score is better or less then the previous score.

feature
  - could be a cool feature if your score is lower then the previous one, you submit your score with a username
  - use sql or no sql to store data or a table with username and score, maybe id. 


endpoints
  GET & POST to
  /fewest-guesses

  1. create server.js


Exercise: Track the fewest guesses
Update your Hot or Cold app to track and display the fewest number of guesses someone took to beat the game by accessing a simple API.

First you should create an API for saving and fetching the number of guesses:

	- Create a file called server.js that will contain a simple Node.js API

	- Set up Express, and make a GET and a POST endpoint to /fewest-guesses

	- When a GET request is made to /fewest-guesses it should return the fewest guesses taken to get the correct answer

	- The number of guesses can either be stored in-memory, or you can use a Mongo database

	- When a POST request is made to /fewest-guesses, it should update the guess count if the number of guesses provided is lower than the current best

	- Then update your app to fetch and send data to the API:

	- Add a fewestGuesses property to your Redux state

	- Update your app to display the fewestGuesses state in one of your components

	- Add two async actions (and their sync counterparts):

	- fetchFewestGuesses which should fetch the fewest guesses from the endpoint
	
	- saveFewestGuesses which should send a score to the fewest guesses endpoint

	- Dispatch the actions from your components so you keep track of the fewest guesses