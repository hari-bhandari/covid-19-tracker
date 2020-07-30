import React, {useContext, useEffect} from 'react';
import '../bootstrap.min.css'
import Navbar from "./Layout/Navbar";
import Cards from "./Home/Cases Cards/Cards";
import Map from "./Home/Maps/Map";
import Table from "./Home/Table/Table";
import "leaflet/dist/leaflet.css"
import CovidContext from "../Context/COVID/covidContext";

const HomePage = () => {
    const covidContext=useContext(CovidContext)
    const{getCountries,position,scale,loading,getOverallData}=covidContext
    const[center,setCenter]=[55.3721,3.4360]
    useEffect(()=>{
        getOverallData()
        getCountries()
    },[])
    if(loading){
        return (
            <div>Loading</div>
        )
    }
    return (
        <body id="page-top">
        <div id="wrapper">
            <Navbar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <Cards/>
                    <div className="row">
                        <Map center={position} zoom={scale}/>
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
};

export default HomePage;