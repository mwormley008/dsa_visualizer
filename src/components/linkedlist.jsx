import React, { useState } from 'react';
import Lnode from './lnode';
import Arrow from './arrow';

export default function LinkedList() {

  const [count, setCount] = useState(0)

  let nodes = []
  for(let i = 0; i<count; i++) {
    nodes.push(
      <> 
      <Lnode /><Arrow /> 
      </>
    )
  }

  function handleClick (e) {
    setCount(count+1)
  }

  return (
    <div className="container">
      <div className="row justify-content-between">
        <button onClick={handleClick}>Add Node</button>
        {nodes}
      </div>
    </div>
  )
}
