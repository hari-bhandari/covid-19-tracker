import React from "react";
import {Circle,Popup} from "react-leaflet";
import numeral from 'numeral'
const casesTypeColours={
    cases:{
        hex:"#e2a40a",
        multiplier:800
    },
    recovered:{
        hex:"#19fc00",
        multiplier:800
    },
    deaths:{
        hex:"#CC1034",
        multiplier:800
    }

}
export const showDataOnMap=(data,casesType="cases")=>

    data.map(country=>(

        <Circle center={[country.countryInfo.lat,country.countryInfo.long]} fillOpacity={0.4}
                        color={casesTypeColours[casesType].hex} fillColor={casesTypeColours[casesType].hex}
                        radius={Math.sqrt(country[casesType])*casesTypeColours[casesType].multiplier}

        >
            <Popup>
                <div className={"info-container"}>
                    <div  className="info-flag" style={{backgroundImage:`url(${country.countryInfo.flag}`}} />
                    <div className={"info-name"}>{country.country}</div>
                    <div className="info-confirmed"> Cases:{numeral(country.cases).format("0,0")}</div>
                    <div className="info-confirmed">Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info-confirmed">Deaths:{numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>

        </Circle>

    ))
