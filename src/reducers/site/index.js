import {ADD_SITE, REMOVE_SITE, TOGGLE_IS_LOADING, UPDATE_SITE_LIST} from '../actionNames'

const initialState = {
    siteList: [],
    isLoading: false
}

export const siteReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_IS_LOADING: 
            state = {...state, isLoading: !state.isLoading}
            return state

        case ADD_SITE:
            const newSiteList = [...state.siteList, action.payload]
            state = {...state, siteList: newSiteList} 
            return state

        case UPDATE_SITE_LIST:
            state = {...state, siteList: action.payload}
            return state

        case REMOVE_SITE:
            let nsl = state.siteList.filter(e => e._id !== action.payload );
            state = {...state, siteList: nsl}
            return state;

        default: return state
    }
}