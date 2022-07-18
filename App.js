import * as React from 'react';
import './style.css';
export default function App() {
  const [count, setount] = React.useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Increment & Decrement & Save!</h3>
      <hr />
      <div class="container">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem('a', count); //localStorage take 2 arguments, 1st is anything, 2nd is the state
          }}
          class="btn btn-dark"
          style={{ display: 'flex' }}
        >
          Save
        </button>
        <h3>
          {' '}
          <b>{count}</b>
        </h3>
        <button
          type="button"
          class="btn btn-info"
          onClick={() => setount(count + 1)}
          style={{ margin: '15px' }}
        >
          Increment
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => setount(count - 1)}
          style={{ margin: '15px' }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// Task
// 1. Two buttons with increment and Decrement the count.
// 2. Another button onClick save the state cout to localStorage.
