import React, {useContext} from 'react';
import CasesCard from "./CasesCard";
import ChooseCountry from "../Select Component/ChooseCountry";
import CovidContext from "../../../Context/COVID/covidContext";

const Cards = () => {
    const covidContext=useContext(CovidContext)
    const{overall,loadedOverall}=covidContext
    return (
        <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Covid-19 Tracker</h3><a className="d-sm-inline-block" role="button" href="#"><ChooseCountry /></a></div>
            {overall&&<div className="row">
                <CasesCard name={"Total Corona Virus cases"} value={overall.cases} addedToday={overall.todayCases} type={"warning"} icon="fas fa-temperature-high fa-2x text-warning" selected="cases"/>
                <CasesCard name={"Total Recovered"} value={overall.recovered} addedToday={overall.todayRecovered}  type={"success"} icon="fas fa-check-circle fa-2x text-success" selected="recovered"/>
                <CasesCard name={"Total Deaths"} value={overall.deaths} addedToday={overall.todayDeaths} type={"danger"} icon="fas fa-skull fa-2x text-danger" selected="deaths"/>
            </div>}
        </div>
    );
};

export default Cards;