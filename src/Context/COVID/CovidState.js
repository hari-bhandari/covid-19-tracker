import React,{useReducer} from 'react';
import covidReducer from "./covidReducer";
import covidContext from "./covidContext"
import {GET_COUNTRIES, GET_COUNTRIES_ERROR} from "../types";
const CovidState = props => {
    const initialState={
        countries:null,
        loaded:false,
        filtered:null,
        error:null
    }
    const[state,dispatch]=useReducer(covidReducer,initialState)
    const getCountries=async ()=>{
        try {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const res = await fetch("https://disease.sh/v3/covid-19/countries", requestOptions)
            const resJson=await res.json()
            dispatch({
                type:GET_COUNTRIES,
                payload:resJson
            })
        }catch (e){
            dispatch({
                type:GET_COUNTRIES_ERROR,
                payload:'SomeThing went Wrong, Please try again later'
            })
        }
    }

    return (
        <covidContext.Provider value={{
            countries:state.countries,
            loaded:state.loaded,
            filtered:state.filtered,
            error:state.error,
            getCountries
        }}>
            {props.children}
        </covidContext.Provider>
    );
};

export default CovidState