import React, { useState } from 'react';
import Lnode from './lnode';
import Arrow from './arrow';
import { motion, AnimatePresence } from "framer-motion";

export default function LinkedList(){
  const [nodes, setNodes] = useState([
    { id: 'null', value: 'X' },
  ]);
  const [inputValue, setInputValue] = useState('');

  function addNode(e){
    // Create a new node object
    const newNode = { id: nodes.length + 1, value: Math.round(Math.random() *9) };
    
    // Insert the new node as the second to last node in the array
    setNodes([...nodes.slice(0, -1), newNode, nodes[nodes.length - 1]]);
  };
  
  function delNode(e){
      setNodes(nodes => {
        return nodes.filter(node => node.id !== nodes.length)
      })
  }

  function clearNodes(e){
    setNodes(nodes => {
      return nodes.filter(node => node.id > nodes.length)
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
        <button onClick={addNode}>Add Node</button>
        <button onClick={delNode}>Delete Node</button>
        <button onClick={clearNodes}>Clear Nodes</button>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        <button onClick={delIdx}>Delete Index</button>
        <div id="display"> 
          <AnimatePresence>
            { nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 1, x: 0, scale: .5}}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div style={{ width: '75px' }}>
                <Lnode key={node.id} value={node.value} style={{ width: '75px' }} isFirst={index === 0} isTail={index === nodes.length - 2} isLast={index === nodes.length - 1} /> 
                </div>
                {index !== nodes.length - 1 && <Arrow />}
              </motion.div>
              ))}  
          </AnimatePresence>
          </div>
     </div>
);
}