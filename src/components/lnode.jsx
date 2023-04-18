import React from 'react';


export default function Lnode( {value} ) {
    return (
        <div className="mx-1 col-md">
            <div className="rounded-circle slnode row data card-body border border-3 col-md">
                        <h3 className="text-center">{value}</h3>
            </div>
        </div>
    )
}
