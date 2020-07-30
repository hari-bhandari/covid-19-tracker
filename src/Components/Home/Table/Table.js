import React, {useContext} from 'react';
import SearchBar from "../Utils/SearchBar";
import CovidContext from "../../../Context/COVID/covidContext";
import './table.css'
const Table = () => {
    const covidContext=useContext(CovidContext)
    const{filtered}=covidContext
    return (
        <div className="col-lg-5 col-xl-4">
            <div className="card shadow mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <SearchBar/>
                </div>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table  table-striped table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Infected</th>
                            <th scope="col">Deaths</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filtered&&filtered.map((country)=>(
                            <tr>
                            <td>{country.country}</td>
                            <td>{country.cases}</td>
                            <td>{country.deaths}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            </div>
            </div>
        </div>
    );
};

export default Table;