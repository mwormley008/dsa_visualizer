import React from 'react';
import Lnode from './components/lnode';
import Navbar from './components/Navbar';
import Arrow from './components/arrow';
import LinkedList from './components/linkedlist';

function App() {

    return (
        <div className="App">
            <Navbar />
            <LinkedList /> 
            <LinkedList /> 
        </div>
    );
}

export default App;