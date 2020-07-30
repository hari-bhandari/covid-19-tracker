import {CHANGE_COUNTRY, CHANGE_CURRENTLY_SELECTED, CLEAR_FILTER, FILTER_COUNTRIES, GET_COUNTRIES, GET_COUNTRIES_ERROR, GET_OVERALL, GET_OVERALL_ERROR} from "../types";

export default (state,action)=>{
    switch (action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                sortedArray:action.payload.sort((a,b)=>(a.cases>b.cases?-1:1)),
                filtered: action.payload,
                loaded:false

            }
        case GET_OVERALL_ERROR:
        case GET_COUNTRIES_ERROR:
            return {
                ...state,
                countries: null,
                loaded: false,
                overall:null,
                error:action.payload
            }
        case GET_OVERALL:
            return {
                ...state,
                overall:action.payload,
                loadedOverall:false,
                position:{lat:34.380746,lng:-40.4796},
                scale:2
            }
        case CHANGE_COUNTRY:
            return {
                ...state,
                overall:action.payload,
                position:{lat:action.payload.countryInfo.lat,lng:action.payload.countryInfo.long},
                scale: 6
            }
        case CHANGE_CURRENTLY_SELECTED:
            return {
                ...state,
                currentlySelected:action.payload
            }
        case FILTER_COUNTRIES:
            return {
                ...state,
                filtered: state.sortedArray.filter(country=>{
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return country.country.match(regex) || country.continent.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        default:
            return state
    }
}