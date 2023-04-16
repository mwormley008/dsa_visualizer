import React from 'react';
import Lnode from './lnode';
import Arrow from './arrow';

export default function LinkedList() {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <Lnode />
        <Arrow />
        <Lnode />
      </div>
    </div>
  )
}
