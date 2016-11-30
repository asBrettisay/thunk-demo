import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import starWars from './starWars/reducer.js'

export default createStore(
  combineReducers({
    starWars
  }), applyMiddleware(thunk))