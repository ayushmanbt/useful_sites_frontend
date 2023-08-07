import { combineReducers } from 'redux'
import { siteReducer } from './site'
import { themeReducer } from './theme'

export const reducer = combineReducers(
    {
        sites: siteReducer,
        theme: themeReducer
    }
)