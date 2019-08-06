import reducer from './reducer';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

export const birth = {
    type: "BIRTHDAY",
    message: "Happy birthday da mapla"
}

export const valentines = {
    type: "VALENTINESDAY",
    message: "Happy valentines day dear"
}

const store = createStore(reducer, composeWithDevTools());

export default store