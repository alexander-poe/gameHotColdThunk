import * as actions from '../actions';

let initialValues = {
			number: Math.floor((Math.random() * 100) + 1),
			currentGuess: null,
			guesses: [],
      fewestGuesses: Infinity,
			feedback: 'Make your first guess',
			won: false,
			hideInstructions: true
		};

export const numberReducer = (state=initialValues, action) => {

  switch(action.type) {

    case 'NEW_GAME':
      return Object.assign({}, initialValues);

    case 'GUESS_NUMBER':
  		let currentGuess = action.guess;
  		let guesses = [...state.guesses, currentGuess];

  		let feedback = '';
  		let distance = Math.abs(currentGuess - state.number);
      console.log('number', state.number)
   

      if (distance === 0) {
        feedback = 'Winner!';
      } else if (distance <= 5) {
        feedback = 'Hot';
      } else if (distance <= 10) {
        feedback = 'Warm';
      } else if (distance <= 15) {
        feedback = 'Cold';
      } else {
        feedback = 'Ice Cold'
      }

  		let won = state.won;
  		if (currentGuess === state.number) {
  			won = true;
  		}
  		return state = Object.assign({}, state,
  			{currentGuess,
  			guesses,
  			won,
  			feedback});

    case 'TOGGLE_INSTRUCTIONS':
      return Object.assign({}, state, {
        hideInstructions: action.bool
      })

    case GET_FEWEST_GUESSES:
      
      return state;    

    case  POST_FEWEST_GUESSES:
      let greatest = (guesses.length < fewestGuesses) ? guesses.length : fewestGueses;
      return Object.assign({}, state, { fewestGuesses: greatest }); 

    default:
      return state
	}

};
