import {GET_COUNTRIES, GET_COUNTRIES_ERROR} from "../types";

export default (state,action)=>{
    switch (action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loaded:false

            }
        case GET_COUNTRIES_ERROR:
            return {
                ...state,
                countries: null,
                loaded: false,
                error:action.payload
            }
        default:
            return state
    }
}