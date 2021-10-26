import React, { useReducer } from 'react';

import { reducerCount } from '../reducers/reducerCount';

const UseReducerCounter2 = () => {
  const initialState = 0;

  const [count, dispatcherCount] = useReducer(reducerCount, initialState);

  return (
    <div>
      <button
        onClick={() => dispatcherCount({ type: 'INCREMENT', payload: 1 })}>
        Increment
      </button>
      <button
        onClick={() => dispatcherCount({ type: 'DECREMENT', payload: 5 })}>
        Decrement
      </button>
      <button
        onClick={() =>
          dispatcherCount({ type: 'RESET', payload: initialState })
        }>
        Reset
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default UseReducerCounter2;
