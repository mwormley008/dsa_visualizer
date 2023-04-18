import React, { useState } from 'react';
import Lnode from './lnode';
import Arrow from './arrow';


export default function LinkedList(){
  const [nodes, setNodes] = useState([])
  function handleClick(e){
      setNodes([...nodes, { id: nodes.length + 1, value: Math.round(Math.random() *10) } ]);
  };

  return ( 
      <div className="container">
        <div className="row justify-content-between">
        <button onClick={handleClick}>Add Node</button>
      { nodes.map( node => (
        <> 
          <Lnode key={node.id} value={node.value} /> 
          <Arrow />
        </>))}  
     </div>
     </div>
);
}