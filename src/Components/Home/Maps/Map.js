import React, {useContext} from 'react';
import './Map.css'
import {Map as LeafletMap, TileLayer} from "react-leaflet";
import CovidContext from "../../../Context/COVID/covidContext";
import {showDataOnMap} from "../../../utils";

const Map = ({center,zoom}) => {
    const covidContext=useContext(CovidContext)
    const{countries}=covidContext

    return (
        <div className="col-lg-7 col-xl-8" style={{height:"100%"}}>
            <div className="map" style={{height:'750px'}}>
                <LeafletMap center={center} zoom={zoom}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/*loopThrough and draw circles*/}
                    {countries && showDataOnMap(countries)}
                </LeafletMap>
            </div>
        </div>
    );
};

export default Map;