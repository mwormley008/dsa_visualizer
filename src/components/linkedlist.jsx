import React, { useState, useEffect } from 'react';
import Lnode from './lnode';
import Arrow from './arrow';
import { motion, AnimatePresence } from "framer-motion";

export default function LinkedList() {
  const [nodes, setNodes] = useState([
    { id: 'null', value: 'X'},
  ]);
  const [inputValue, setInputValue] = useState('');

  function addNode() {
    const newNode = { id: nodes.length, value: Math.round(Math.random() * 9), animation: { opacity: 0, y: -10 } };
  
    setNodes(prevNodes => {
      // Update the tail node animation
      if (prevNodes.length > 1) {
        prevNodes[prevNodes.length - 2] = { ...prevNodes[prevNodes.length - 2], isTail: false };
      }
      return [...prevNodes.slice(0, -1), newNode, { id: 'null', value: 'X' }];
    });
  
    // Set the animation for the new node and the previous tail node
    setTimeout(() => {
      setNodes(prevNodes => {
        const updatedNodes = [...prevNodes];
        updatedNodes[updatedNodes.length - 2] = { ...updatedNodes[updatedNodes.length - 2], isTail: true };
        updatedNodes[updatedNodes.length - 1] = { ...updatedNodes[updatedNodes.length - 1], animation: { opacity: 1, y: 0 } };
        return updatedNodes;
      });
    }, 0);
  }
  
  // Trigger the animation after the state update has been completed
  useEffect(() => {
    setNodes(nodes => {
      return nodes.map((node, index) => {
        return {
          ...node,
          animation: {
            opacity: 1,
            y: 0,
            scale: index === nodes.length - 1 ? 1 : 0.8,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }
        };
      });
    });
  }, [nodes]);
  

  function delNode(e) {
    setNodes(nodes => {
      return nodes.filter(node => node.id !== nodes.length);
    });
  }

  function clearNodes(e) {
    setNodes(nodes => {
      return nodes.filter(node => node.id === 'null');
    });
  }

  function delIdx(e) {
    const index = parseInt(inputValue);
    if (!isNaN(index) && index >= 1 && index <= nodes.length) {
      setNodes(nodes => nodes.filter(node => node.id !== index));
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
      <input type="text" value={inputValue} onChange={handleInputChange} />
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
                initial={node.animation}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 * index }}
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
                  animate={{ opacity: 1, x: 0, scale: 1 }}
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