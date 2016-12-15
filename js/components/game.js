   import React from 'react';
   import { connect } from 'react-redux';
   import Interact from './interact';
   import NewGame from './newGame';
   import Instructions from './instructions'

   import * as actions from '../actions/index';

   export class Game extends React.Component {

    componentDidMount() {
      this.props.dispatch(
        actions.getFewestGuesses(this.props.fewestGuesses);
      )
    }

    updateFewestGuesses() {
      if (won) {
        console.log(this.props.dispach)
        // value = call getFewest guesses
        if (guesses.length < value) {
          // postFewest
          return guess.length
        } else {
          return value
        }
      } else {
        return fewestGuesses
      }
    }

   render() {
      const guesses = this.props.guesses.map(function(guess, i) {
         return <span key={i}>{guess} </span>;
      })

      return (
         <div className="page">
            <div className="game">
              <div className="interaction">
                <div className="feedback">
                  <p className="feedback-text">{this.props.feedback}</p>
                </div>
                <Interact />
              </div>
              <p className="previous-guesses">{guesses}</p>
              <p className="total-guesses">Guesses: {guesses.length}</p>
              <p className="fewest-guesses">Fewest Guesses: {updateFewestGuesses}</p>
             <NewGame />
            </div>
            { this.props.hideInstructions ? '' : <Instructions /> }
         </div>
       )
     }
   }
   // {this.props.won ? <update fewest quesses > : ''}
   const mapStateToProps = (state) => ({
     feedback: state.feedback,
     guesses: state.guesses,
     fewestGuesses: state.fewestGuesses,
     hideInstructions: state.hideInstructions
   })


   export default connect(mapStateToProps, null)(Game);
