import {ADD_SITE, MARK_DELETING_ID, REMOVE_SITE, TOGGLE_IS_LOADING, UPDATE_SITE_LIST} from '../actionNames'

import {API_URL} from "../../constants";

export const addSite = (newSite) => ({
    type: ADD_SITE,
    payload: newSite
})

export const removeSite = (id) => ({
    type: REMOVE_SITE,
    payload: id
})

export const toggleIsLoading = () => ({
    type: TOGGLE_IS_LOADING
})

export const updateSiteList = (siteList) => ({
    type: UPDATE_SITE_LIST,
    payload: siteList
})

export const getSitesFromOnline = () => {
    return (dispatch) => {
        dispatch(toggleIsLoading())
        fetch(`${API_URL}/sites/all`)
            .then(res => res.json())
            .then(res => {
                dispatch(toggleIsLoading());
                dispatch(updateSiteList(res.sites));
            })
    }
}

export const deleteSiteFromDB = (id) => {
    return (dispatch) => {
        const option = {
            method: 'POST',
            body: JSON.stringify({id}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`${API_URL}/sites/delete`, option)
        .then(res => res.json())
        .then(res => {
                dispatch(setIsDeletingID(null));
                dispatch(removeSite(id));
                return;
            })
    }
}

export const setIsDeletingID = (aid) => {
    // console.log(id);
    return {
        type: MARK_DELETING_ID,
        payload: aid
    }
}