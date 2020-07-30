import React,{useReducer} from 'react';
import covidReducer from "./covidReducer";
import covidContext from "./covidContext"
import {CHANGE_COUNTRY, GET_COUNTRIES, GET_COUNTRIES_ERROR, GET_OVERALL, GET_OVERALL_ERROR} from "../types";
const CovidState = props => {
    const initialState={
        countries:null,
        overall:null,
        loaded:false,
        loadedOverall:false,
        filtered:null,
        error:null,
        selectedCountry:'International'
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
    const changeCountry= async (country)=>{
        if(country==='International'){
             getOverallData()
        }
        else{
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`, requestOptions)
                const resJson=await res.json()
                dispatch({
                    type:CHANGE_COUNTRY,
                    payload:[country,resJson]
                })
            }catch (e){
                dispatch({
                    type:GET_COUNTRIES_ERROR,
                    payload:'SomeThing went Wrong, Please try again later'
                })
            }

        }

    }
    const getOverallData=async ()=>{
        try {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const res = await fetch("https://disease.sh/v3/covid-19/all", requestOptions)
            const resJson=await res.json()
            dispatch({
                type:GET_OVERALL,
                payload:resJson
            })
        }catch (e){
            dispatch({
                type:GET_OVERALL_ERROR,
                payload:'SomeThing went Wrong, Please try again later'
            })
        }
    }

    return (
        <covidContext.Provider value={{
            countries:state.countries,
            loaded:state.loaded,
            loadedOverall:state.loadedOverall,
            filtered:state.filtered,
            error:state.error,
            overall:state.overall,
            getOverallData,
            getCountries,
            changeCountry
        }}>
            {props.children}
        </covidContext.Provider>
    );
};

export default CovidState