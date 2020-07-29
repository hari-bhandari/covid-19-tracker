import React from 'react';

const SearchBar = () => {
    return (
            <div className="container-fluid" style={{width:'100%'}}>

                <form className="form-inline d-sm-inline-block mr-auto ml-md-12 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                    </div>
                </form>
            </div>
    );
};

export default SearchBar;