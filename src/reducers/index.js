import { combineReducers } from 'redux'
import { siteReducer } from './site'


export const reducer = combineReducers(
    {
        sites: siteReducer
    }
)