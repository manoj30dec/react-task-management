import { useReducer, useState } from 'react';

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decreement':
      return { count: state.count - 1 };
    case 'double':
      return { count: state.count * 2 };
    case 'customdata':
      return { count: action.customData };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};
export default function UseReducerExample() {
  const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducerFn, { count: 0 });

  return (
    <div>
      <h1>Use State counter= {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} className="mx-2">
        Increment
      </button>

      <hr />
      <h1>Hello Reducer counter {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })} className="mx-2">
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decreement' })} className="mx-2">
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'double' })} className="mx-2">
        Double
      </button>
      <button
        onClick={() => dispatch({ type: 'customdata', customData: 100 })}
        className="mx-2"
      >
        Custom Data Send 100
      </button>
      <button onClick={() => dispatch({ type: 'reset' })} className="mx-2">
        Reset
      </button>
    </div>
  );
}
