import React from 'react';
import './bootstrap.min.css'
import './App.css';
import CovidState from "./Context/COVID/CovidState";
import HomePage from "./Components/HomePage";

function App() {
    return (
        <CovidState>
            <div className="App">
                <HomePage/>
            </div>
        </CovidState>
    )
        ;
}

export default App;
