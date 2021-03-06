import React, {useReducer} from 'react';
import covidReducer from "./covidReducer";
import covidContext from "./covidContext"
import {CHANGE_COUNTRY, CHANGE_CURRENTLY_SELECTED, CLEAR_FILTER, FILTER_COUNTRIES, GET_COUNTRIES, GET_COUNTRIES_ERROR, GET_OVERALL, GET_OVERALL_ERROR} from "../types";

const CovidState = props => {
    const initialState = {
        countries: null,
        overall: null,
        loaded: false,
        loadedOverall: false,
        filtered: null,
        error: null,
        position:{lat:34.380746,lng:-40.4796},
        scale:2,
        currentlySelected:'cases',
        sortedCountries:null
    }

    const [state, dispatch] = useReducer(covidReducer, initialState)
    const getCountries = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const res = await fetch("https://disease.sh/v3/covid-19/countries", requestOptions)
            const resJson = await res.json()
            dispatch({
                type: GET_COUNTRIES,
                payload: resJson
            })
        } catch (e) {
            dispatch({
                type: GET_COUNTRIES_ERROR,
                payload: 'SomeThing went Wrong, Please try again later'
            })
        }
    }
    const filterCountries=(value)=>{
        dispatch({
            type:FILTER_COUNTRIES,
            payload:value
        })
    }
    const clearFilter=()=>{
        dispatch({
            type:CLEAR_FILTER
        })
    }
    const setCurrentlySelected=(selected)=>{
        dispatch({
            type:CHANGE_CURRENTLY_SELECTED,
            payload:selected
        })
    }
    const changeCountry = async (country) => {
        if (country === 'International') {
            getOverallData()
        } else {
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`, requestOptions)
                const resJson = await res.json()
                dispatch({
                    type: CHANGE_COUNTRY,
                    payload: resJson
                })
            } catch (e) {
                dispatch({
                    type: GET_COUNTRIES_ERROR,
                    payload: 'SomeThing went Wrong, Please try again later'
                })
            }

        }

    }
    const getOverallData = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const res = await fetch("https://disease.sh/v3/covid-19/all", requestOptions)
            const resJson = await res.json()
            dispatch({
                type: GET_OVERALL,
                payload: resJson
            })
        } catch (e) {
            dispatch({
                type: GET_OVERALL_ERROR,
                payload: 'SomeThing went Wrong, Please try again later'
            })
        }
    }

    return (
        <covidContext.Provider value={{
            countries: state.countries,
            loaded: state.loaded,
            loadedOverall: state.loadedOverall,
            filtered: state.filtered,
            error: state.error,
            overall: state.overall,
            position:state.position,
            scale:state.scale,
            currentlySelected:state.currentlySelected,
            sortedArray:state.sortedArray,
            getOverallData,
            getCountries,
            changeCountry,
            setCurrentlySelected,
            filterCountries,
            clearFilter
        }}>
            {props.children}
        </covidContext.Provider>
    );
};

export default CovidState