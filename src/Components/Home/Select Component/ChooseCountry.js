import React, {useContext, useEffect, useState} from 'react';
import './select.css'
import CovidContext from "../../../Context/COVID/covidContext";
const ChooseCountry =  () => {
    const covidContext=useContext(CovidContext)
    const{countries,changeCountry,overall}=covidContext
    const[selectedCountry,setSelectedCountry]=useState('International')
    useEffect(()=>{
        if(localStorage.getItem('selectedCountry')){
            if(countries){
                setSelectedCountry(localStorage.getItem("selectedCountry"))
                changeCountry(localStorage.getItem("selectedCountry"))
            }
        }

    },[countries])
    const onChange=(e)=>{
        localStorage.setItem("selectedCountry",e.target.value)
        setSelectedCountry(e.target.value)
        changeCountry(e.target.value)
    }
    return (
        <div className="select">
            <select name="format" id="format" onChange={onChange}>

                { selectedCountry==='International'?'':(overall&&<option selected value={selectedCountry}>{overall.country}</option>)}

                <option selected value={"International"}>International</option>
                {countries&&countries.map((country,index)=>(
                    <option value={country.countryInfo.iso2} key={index}>{country.country}</option>
                ))}
            </select>
        </div>
    );
};

export default ChooseCountry;