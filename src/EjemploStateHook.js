import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function EjemploStateHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

export default EjemploStateHook;