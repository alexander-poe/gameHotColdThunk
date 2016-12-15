export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	number: Math.floor((Math.random() * 100) + 1)
});

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess
});

export const TOGGLE_INSTRUCTIONS = 'TOGGLE_INSTRUCTIONS'
export const toggleInstructions = bool => ({
	type: TOGGLE_INSTRUCTIONS,
	bool
});

export const GET_FEWEST_GUESSES = 'GET_FEWEST_GUESSES';
export const getFewestGuesses = () => ({
	type: GET_FEWEST_GUESSES
});

export const POST_FEWEST_GUESSES = 'POST_FEWEST_GUESSES';
export const postFewestGuesses = fewestGuesses => ({
	type: POST_FEWEST_GUESSES,
	fewestGuesses
});

export const getFewestGuesses = () => dispatch => {
    const url = `http:localhost:8081/fewest-guesses`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(fetchDescriptionSuccess(fewestGuesses))
    )
    .catch(error =>
        dispatch(fetchDescriptionError(fewestGuesses, error))
    );
};

export const postFewestGuesses = (num) => dispatch => {
	const url = `http:localhost:8081/fewest-guesses`;
	return fetch(url, {  
	    method: 'post',  
	  	body: `fewestGuesses=${num}`  
	  })
	  .then(json)  
	  .then(function (data) {  
	    console.log('Request succeeded with JSON response', data);  
	  })  
	  .catch(function (error) {  
	    console.log('Request failed', error);  
	  });

};