import React from 'react';


export default function Lnode() {
    return (
        <div className=" mx-1 col-md">
            <div className="slnode row data card-body border border-3 col-md">
                        <h3 className="text-center">{Math.round(Math.random()* 10)}</h3>
            </div>
        </div>
    )
}
