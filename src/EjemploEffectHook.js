import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function EjemploEffectHook() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },[count]);

  return (
    <div>
      <h3 style={{marginBottom : "1rem"}}>Presta atencion al titulo de la pagina.</h3>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

export default EjemploEffectHook;