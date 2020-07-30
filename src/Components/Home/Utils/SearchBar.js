import React, {useContext, useRef,useEffect} from 'react';
import CovidContext from "../../../Context/COVID/covidContext";

const SearchBar = () => {
    const text=useRef('')
    const covidContext=useContext(CovidContext)
    const{filtered,filterCountries,clearFilter}=covidContext
    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterCountries(e.target.value);
        } else {
            clearFilter();
        }
    };
    return (
            <div className="container-fluid" style={{width:'100%'}}>

                <form className="form-inline d-sm-inline-block mr-auto ml-md-12 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" ref={text} onChange={onChange} placeholder="Search for ..."/>
                    </div>
                </form>
            </div>
    );
};

export default SearchBar;