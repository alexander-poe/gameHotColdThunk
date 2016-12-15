import { createStore, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(reducers.numberReducer, applyMiddleware(thunk));
// export default createStore(reducers.numberReducer, applyMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
