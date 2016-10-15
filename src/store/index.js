import {createStore} from 'redux';
import reducers from './reducers';
import * as actionTypes from './actions';

export default createStore(reducers);

export const actions = actionTypes;
