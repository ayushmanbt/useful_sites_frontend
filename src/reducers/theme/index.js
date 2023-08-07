import { SET_SITE_THEME } from "../actionNames";

const initialState = {
    theme: "light"
}

export const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SITE_THEME:
            state.theme = action.payload
            return state
        default:
            return state
    }
}