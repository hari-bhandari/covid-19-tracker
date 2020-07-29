import React from 'react';
import './bootstrap.min.css'
import './App.css';
import CovidState from "./Context/COVID/CovidState";
import HomePage from "./Components/HomePage";

function App() {
    return (

    <div className="App">
        <CovidState/>
        <HomePage/>
        <CovidState/>
    </div>

)
    ;
}

export default App;
