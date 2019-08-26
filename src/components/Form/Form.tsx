import React, {useState, useReducer} from 'react';

const myReducer = (state: any, action: any) => {
  switch(action.type) {
    case 'changeName':
      return {...state, name: action.name}
    case 'changeColor':
      return {...state, color: action.color}
    case 'changeQuest':
      return {...state, quest: action.quest}
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(myReducer, {})

  return (
    <div>
      <form>
        <input
          placeholder="What is your name?"
          value={state.name}
          onChange={e => dispatch({
            type: 'changeName',
            name: e.target.value
          })}
        />

        <input
          placeholder="What is your favorite color?"
          value={state.color}
          onChange={e => dispatch({
            type: 'changeColor',
            color: e.target.value
          })}
        />

        <input
          placeholder="What is your quest?"
          value={state.quest}
          onChange={e => dispatch({
            type: 'changeQuest',
            quest: e.target.value
          })}
        />

        <p>Name: {state.name}</p>
        <p>Color: {state.color}</p>
        <p>Quest: {state.quest}</p>
      </form>

    </div>
  );
};

export default Form;
