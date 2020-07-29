import React from 'react';
import './Map.css'
import {Map as LeafletMap, TileLayer} from "react-leaflet";

const Map = ({center,zoom}) => {
    return (
        <div className="col-lg-7 col-xl-8" style={{height:"100%"}}>
            <div className="map" style={{height:'750px'}}>
                <LeafletMap center={center} zoom={zoom}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LeafletMap>
            </div>
        </div>
    );
};

export default Map;