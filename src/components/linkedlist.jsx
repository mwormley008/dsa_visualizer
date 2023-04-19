import React, { useState } from 'react';
import Lnode from './lnode';
import Arrow from './arrow';
import { motion, AnimatePresence } from "framer-motion";

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
        <button onClick={addNode}>Add Node</button>
        <button onClick={delNode}>Delete Node</button>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        <button onClick={delIdx}>Delete Index</button>
        <div id="display"> 
          <AnimatePresence>
            { nodes.map( node => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ width: '75px' }}>
                <Lnode key={node.id} value={node.value} style={{ width: '75px' }}/> 
                </div>
                <Arrow />
              </motion.div>
              ))}  
          </AnimatePresence>
          </div>
     </div>
);
}