import React, {useContext, useState} from 'react';
import './select.css'
import CovidContext from "../../../Context/COVID/covidContext";
const ChooseCountry =  () => {
    const covidContext=useContext(CovidContext)
    const{countries,changeCountry}=covidContext
    const[selectedCountry,setSelectedCountry]=useState('International')
    const onChange=(e)=>{
        setSelectedCountry(e.target.value)
        changeCountry(e.target.value)

    }
    return (
        <div className="select">
            <select name="format" id="format" onChange={onChange}>
                <option selected value={"International"}>International</option>
                {countries&&countries.map((country,index)=>(
                    <option value={country.countryInfo.iso2} key={index}>{country.country}</option>
                ))}
            </select>
        </div>
    );
};

export default ChooseCountry;