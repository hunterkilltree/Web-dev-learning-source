import { configureStore, combineReducers, applyMiddleware, createStore} from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const RECEIVE_DATA = 'RECEIVE_DATA'

function todos (state = [], action) {
	switch(action.type) {
		case ADD_TODO :
			return state.concat([action.todo])
		case REMOVE_TODO :
			return state.filter((todo) => todo.id !== action.id)
		case TOGGLE_TODO :
			return state.map((todo) => todo.id !== action.id ? todo :
				Object.assign({}, todo, {complete: !todo.complete})
			)
		default :
			return state
	}
}

function goals (state = [], action) {
	switch(action.type) {
		case ADD_GOAL :
			return state.concat([action.goal])
		case REMOVE_GOAL :
			return state.filter((goal) => goal.id !== action.id)
		case RECEIVE_DATA:
			return action.goals
		default :
			return state
	}
}

function loading(state = true, action) {
	switch(action.type) {
		case RECEIVE_DATA:
			return false;
		default:
			return state;
	}
}

const checker = (store) => (next) => (action) => {
	if (
		action.type === ADD_TODO &&
		action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
	) {
		return alert("Nope. That's a bad idea.")
	}

	if (
		action.type === ADD_GOAL &&
		action.goal.name.toLowerCase().indexOf('bitcoin') !== -1
	) {
		return alert("Nope. That's a bad idea.")
	}

	return next(action)
}

const logger = (store) => (next) => (action) => {
	console.group(action.type)
	console.log('The action: ', action)
	const result = next(action)
	console.log('The new state: ', store.getState())
	console.groupEnd()
	return result
}

const thunk = (store) => (next) => (action) => {
	if (typeof action === 'function') {
	  return action(store.dispatch)
	}

	return next(action)
}

const store = createStore(combineReducers({
	todos,
	goals,
	loading,
}), applyMiddleware(ReduxThunk, checker, logger));

export default store;
