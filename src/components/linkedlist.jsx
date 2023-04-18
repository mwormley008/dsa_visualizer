import React, { useState } from 'react';
import Lnode from './lnode';
import Arrow from './arrow';


export default function LinkedList(){
  const [nodes, setNodes] = useState([])
  const [inputValue, setInputValue] = useState('');

  function addNode(e){
      setNodes([...nodes, { id: nodes.length + 1, value: Math.round(Math.random() *10) } ]);
  };
  
  function delNode(e){
      setNodes(nodes => {
        return nodes.filter(node => node.id !== nodes.length)
      })
  }

  function delIdx(e){
    const index = parseInt(inputValue);
    if (!isNaN(index) && index >= 1 && index <= nodes.length) {
      setNodes(nodes.filter(node => node.id !== index));
    }
    setInputValue('');
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return ( 
      <div className="container">
        <div className="row justify-content-between">
        <button onClick={addNode}>Add Node</button>
        <button onClick={delNode}>Delete Node</button>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        <button onClick={delIdx}>Delete Index</button>
      { nodes.map( node => (
        <> 
          <Lnode key={node.id} value={node.value} /> 
          <Arrow />
        </>))}  
     </div>
     </div>
);
}