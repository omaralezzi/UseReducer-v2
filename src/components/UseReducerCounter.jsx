import React, { useReducer } from 'react';

const reducerCount = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return (state = 0);
    default:
      return state;
  }
};

const UseReducerCounter = () => {
  const initialState = 0;

  const [count, dispatcherCount] = useReducer(reducerCount, initialState);

  return (
    <div>
      <button onClick={() => dispatcherCount('INCREMENT')}>Increment</button>
      <button onClick={() => dispatcherCount('DECREMENT')}>Decrement</button>
      <button onClick={() => dispatcherCount('RESET')}>Reset</button>
      <h2>{count}</h2>
    </div>
  );
};

export default UseReducerCounter;
