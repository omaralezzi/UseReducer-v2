import React, { useReducer } from "react";

import { textReducer } from "../reducers/textReducer";
import { arrayReducer } from "../reducers/arrayReducer";

const UseReducerAddToArray = () => {
  const initialState = { text: "", array: [] };

  const [text, dispatcherText] = useReducer(textReducer, initialState.text);
  const [array, dispatcherArray] = useReducer(arrayReducer, initialState.array);

  const addToArray = (e) => {
    e.preventDefault();
    dispatcherArray({ type: "ADD", payload: text });
    dispatcherText({ type: "RESET" });
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) =>
            dispatcherText({ type: "GRAB", payload: e.target.value })
          }
          type="text"
          value={text}
        />
        <button onClick={addToArray}>Add to state Array</button>
      </form>

      {/* print the builded array */}
      {array.map((item, index) => (
        <p key={index}>
          index is:{index}- and item is:{item}
        </p>
      ))}
    </div>
  );
};

export default UseReducerAddToArray;
