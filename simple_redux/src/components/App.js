import React from 'react';
import InputForm from './InputForm';
import ListItems from './ListItems';
import store  from './Reducers';
import API from 'goals-todos-api';

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const RECEIVE_DATA = 'RECEIVE_DATA'

function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

function receiveDataAction(todos, goals) {
	return {
		type: RECEIVE_DATA,
		todos,
		goals,
	}
}


class App extends React.Component {

  componentDidMount () {
    //initial data
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals(),
    ]).then(([todos, goals]) => {
      store.dispatch(receiveDataAction(todos, goals))
    });
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const { todos, goals } = store.getState();

    return (
      <>
        {/* <InputForm title="Todos" actions={todos} store={store}/> */}
        <InputForm title="Goals" actions={goals} store={store}/>
      </>
    );
  }
}

export default App;