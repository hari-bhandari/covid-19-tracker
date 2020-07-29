import React, {useContext, useEffect} from 'react';
import '../bootstrap.min.css'
import Navbar from "./Layout/Navbar";
import Cards from "./Home/Cases Cards/Cards";
import SearchBar from "./Home/Utils/SearchBar";
import Map from "./Home/Maps/Map";
import Table from "./Home/Table/Table";
import "leaflet/dist/leaflet.css"
import CovidContext from "../Context/COVID/covidContext";

const HomePage = () => {
    const covidContext=useContext(CovidContext)
    const{getCountries}=covidContext

    useEffect(()=>{
        getCountries()
    },[])
    const center={lat:34.380746,lng:-40.4796}
    return (
        <body id="page-top">
        <div id="wrapper">
            <Navbar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <SearchBar/>
                    <Cards/>
                    <div className="row">
                        <Map center={center} zoom={10}/>
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
};

export default HomePage;