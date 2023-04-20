import React, { useState, useEffect } from 'react';
import Lnode from './lnode';
import Arrow from './arrow';
import { motion, AnimatePresence } from "framer-motion";

export default function LinkedList(){
  const [nodes, setNodes] = useState([
    { id: 'null', value: 'X'},
  ]);
  const [inputValue, setInputValue] = useState('');
  const [lastAddedIndex, setLastAddedIndex] = useState(-1);


  function addNode(e) {
    const newNode = { id: nodes.length + 1, value: Math.round(Math.random() * 9) };
  
    // Create a new animation object for the new node
    const newNodeAnimation = {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    };
  
    setNodes((prevNodes) => {
      // Update the animation properties of all existing nodes
      const updatedNodes = prevNodes.map((prevNode, index) => {
        return {
          ...prevNode,
          animation: {
            opacity: 1,
            y: 20 * Math.sin(index - lastAddedIndex),
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }
        };
      });
  
      // Add the new node to the end of the list and update its animation
      updatedNodes.push({
        ...newNode,
        animation: newNodeAnimation
      });
  
      // Update the last added index and return the updated list of nodes
      setLastAddedIndex(prevIndex => prevIndex + 1);
      return updatedNodes;
    });
  }
  
  // Trigger the animation after the state update has been completed
  useEffect(() => {
    setNodes((nodes) => {
      return nodes.map((node) => {
        return {
          ...node,
          animation: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }
        }
      });
    });
  }, [nodes]);
  
  function delNode(e){
      setNodes(nodes => {
        return nodes.filter(node => node.id !== nodes.length)
      })
  }

  function clearNodes(e){
    setNodes(nodes => {
      return nodes.filter(node => node.id == 'null')
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
    {nodes.map((node, index) => (
      <motion.div
        key={node.id}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ type: 'spring', duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <motion.div
          key={`node-${node.id}`}
          initial={{ opacity: 1, x: 0, scale: .5}}
          animate={{ opacity: 1, x: 0, scale: 1, ...node.animation }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ type: 'spring', duration: 0.9 }}
          style={{ width: '75px' }}
        >
          <Lnode
            key={node.id}
            value={node.value}
            style={{ height: '75px', width: '75px', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            isFirst={index === 0}
            isTail={index === nodes.length - 2}
            isLast={index === nodes.length - 1}
          />
        </motion.div>
        {index !== nodes.length - 1 && (
          <motion.div
            key={`arrow-${node.id}`}
            initial={{ opacity: 0, x: -30, scale: .5 }}
            animate={{ opacity: 1, x: 0, scale: 1, ...node.animation }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: 'spring', duration: 1, delay: .27 }}
          >
            <Arrow />
          </motion.div>
        )}
      </motion.div>
    ))}
  </AnimatePresence>
</div>

     </div>
);
}