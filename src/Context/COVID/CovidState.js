import React,{useReducer} from 'react';
import covidReducer from "./covidReducer";
import covidContext from "./covidContext"
const CovidState = props => {
    const initialState={
        countries:null,
        loaded:false,
        filtered:null
    }
    const[state,dispatch]=useReducer(covidReducer,initialState)

    return (
        <covidContext.Provider value={{
            // countries:state.countries,
            // loaded:state.loaded,
            // filtered:state.filtered
        }}>
            {props.children}
        </covidContext.Provider>
    );
};

export default CovidState