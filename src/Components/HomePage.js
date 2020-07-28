import React from 'react';
import '../bootstrap.min.css'
import Navbar from "./Layout/Navbar";
import Cards from "./Home/Cases Cards/Cards";
import SearchBar from "./Home/Utils/SearchBar";

const HomePage = () => {
    return (
        <body id="page-top">
        <div id="wrapper">
            <Navbar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
            <SearchBar/>
            <Cards/>
                </div>
            </div>
        </div>
        </body>
    );
};

export default HomePage;