import React from 'react';
// import { Link } from 'react-router-dom';
// ok so this link was for the the links in the navbar that I'd like to add back in later 

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid border-bottom border-3">
                <h1>DSA Visualizer</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    </div>
                </div>
            </div>
        </nav>
    )
}
