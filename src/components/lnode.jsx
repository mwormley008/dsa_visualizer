import React from 'react';
import Arrow from './arrow';

export default function Lnode( {value, isFirst, isTail, isLast, style} ) {
    return (
        <div className="mx-3 col-lg" id="arrownode">
        <div className={`rounded-circle slnode row data card-body border border-3 col-md ${isFirst ? 'crown' : ''} ${isTail ? 'tail' : ''} ${isLast ? 'last' : ''}`} style={style}>
            {isFirst && <div className="crown-icon">👑</div>}
            {isTail && <div className="tail-icon">🦊</div>}
            {isLast && <div className="isLast-icon">❌</div>}
            <h3 className="text-center">{value}</h3>
        </div>
    </div>
    )
}

