import React from 'react';
import InputForm from './InputForm';
import ListItems from './ListItems';
import store  from './Reducers';

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

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


class App extends React.Component {

  componentDidMount () {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const { todos, goals } = store.getState();

    return (
      <>
        {/* <InputForm title="Todos" actions={todos} store={store}/> */}
        {/* <ListItems items={items} /> */}
        <InputForm title="Goals" actions={goals} store={store}/>
      </>
    );
  }
}

export default App;