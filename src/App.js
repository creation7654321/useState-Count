import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  function subtract(){
    setCount(count - 1 )
  }
  function add(){
    setCount(count + 1)
  }
  return (
    <div className="counter">
    <button className="counter--minus" onClick={subtract}>–</button>
    <div className="counter--count">
        <h1>{count}</h1>
    </div>
    <button className="counter--plus" onClick={add}>+</button>
</div>
  );
}

export default App;
