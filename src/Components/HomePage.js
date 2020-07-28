import React from 'react';
import '../bootstrap.min.css'
import Navbar from "./Layout/Navbar";
import Cards from "./Home/Cases Cards/Cards";

const HomePage = () => {
    return (
        <body id="page-top">
        <div id="wrapper">
            <Navbar/>
            <Cards/>
        </div>
        </body>
    );
};

export default HomePage;