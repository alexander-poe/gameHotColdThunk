require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import * as actions from './actions';
import thunk from 'redux-thunk'
import store from './store';
import Game from './components/game';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store} >
            <Game />
        </Provider>,
        document.getElementById('app')
    )
);

	// store.dispatch(actions.newGame());
	// store.dispatch(actions.guessNumber(20));
	// store.dispatch(actions.checkCloseness());
	// store.dispatch(actions.checkCorrect());
	// console.log(store.getState());
