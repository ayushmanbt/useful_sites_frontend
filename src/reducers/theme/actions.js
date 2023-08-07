import { SET_SITE_THEME } from "../actionNames"

export const setTheme = (theme) => ({
    type: SET_SITE_THEME,
    payload: theme
})