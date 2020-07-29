import {CHANGE_COUNTRY, GET_COUNTRIES, GET_COUNTRIES_ERROR, GET_OVERALL, GET_OVERALL_ERROR} from "../types";

export default (state,action)=>{
    switch (action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filtered:action.payload,
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
                loadedOverall:false
            }
        case CHANGE_COUNTRY:
            return {
                ...state,
                overall:state.countries[action.payload]

            }
        default:
            return state
    }
}