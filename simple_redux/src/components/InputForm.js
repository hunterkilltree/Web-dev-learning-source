import { TextField, Button } from '@mui/material';
import ListItems from './ListItems';
import React, { useEffect, useState, useRef } from "react";

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

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

function generateId () {
	return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
}

export default function InputForm({title, actions, store}) {
	const textRef = useRef();

	function addItem (event) {
		event.preventDefault();
		const name = textRef.current.value;
		textRef.current.value ='';

		store.dispatch(addGoalAction({
			id: generateId(),
			name,
		}));
	}

	function removeItem (goal) {
		store.dispatch(removeGoalAction(goal.id));
	}

  return (
		<div>
      <TextField label={title} variant="standard" inputRef={textRef}/>
      <Button variant="contained" onClick={addItem}>Add</Button>
			<ListItems items={actions} remove={removeItem}/>
		</div>
  ); 
}