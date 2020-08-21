import React, {useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addSite, removeSite } from '../reducers/site/actions'

import {API_URL} from "../constants";

import Icon from "@mdi/react";
import {mdiWindowClose} from "@mdi/js"

function FormComponet({closeForm, editingID}) {

    const dispatch = useDispatch()

    const siteList = useSelector(state => state.sites.siteList)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [siteName, setSiteName] = useState("")
    const [siteURL, setSiteURL] = useState("")
    const [siteDesc, setSiteDesc] = useState("")
    const [errors, setErrors] = useState([])


    useEffect(() => {
        // console.log(siteList)
        if(editingID !== ""){
            siteList.forEach(element => {
                if(element._id === editingID){
                    setSiteName(element.site_name);
                    setSiteDesc(element.site_desc);
                    setSiteURL(element.site_url);
                }
            });
        }
    }, [editingID, siteList])

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    const deleteError = (e) => {
        setErrors(oldErrors => oldErrors.filter(error => error !== e));
    }

    const addNewSite = (e) => {
        e.preventDefault();
        if(!validURL(siteURL)){
            setErrors(oldErrors => [...oldErrors, "Invalid URL!"])
            return;
        }
        const obj = {
            site_name: siteName,
            site_url: siteURL,
            site_desc: siteDesc
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        setIsSubmitting(true);

        let er = false;

        if(editingID !== ""){
            const updated = {
                id: editingID,
                updates: obj
            }

            const options = {
                method: 'POST',
                body: JSON.stringify(updated),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch(`${API_URL}/sites/update`, options)
                .then(res => {
                    if(res.status === 500)
                        er = true
                    return res.json()
                })
                .then(res => {
                    setIsSubmitting(false);
                    
                    if(er){
                        throw res.message
                    }
                    dispatch(removeSite(editingID))
                    dispatch(addSite(res.site));
                    setSiteName("");
                    setSiteURL("");
                    setSiteName("");
                    closeForm();
                })
                .catch(err => {
                    setIsSubmitting(false);
                    setErrors(e => [err])
                })
        }
        else{
            fetch(`${API_URL}/sites/add`, options)
                .then(res => {
                    if(res.status === 500)
                        er = true
                    return res.json()
                })
                .then(res => {
                    setIsSubmitting(false);
                    
                    if(er){
                        throw res.message
                    }
                    
                    dispatch(addSite(res.site));
                    setSiteName("");
                    setSiteURL("");
                    setSiteName("");
                    closeForm();
                })
                .catch(err => {
                    setIsSubmitting(false);
                    setErrors(e => [err])
                })
        }

    
    }

    return (
        <>
        <div 
            className="card_holder" 
            onClick={() => closeForm()} 
        >
            <div className="container" onClick={(e) => e.stopPropagation()}>
                <div className="card_top">
                    <h1>Add a new site</h1>
                    <button className="btn del" onClick={() => closeForm()}>
                        <Icon 
                            path={mdiWindowClose}
                            size={1.3}
                        />
                    </button>
                </div>
                <ul className="errors">
                    {
                        errors.map(e => {
                            return(
                            <li key={e}>
                                {e}
                                <button onClick={() => deleteError(e)}>&#x2716;</button>
                            </li>
                            )
                        })
                    }
                </ul>
            
            {
                !isSubmitting ? 
                <form className="container" onSubmit={(e) => addNewSite(e)}>
                <div className="form_group">
                    <label htmlFor="site_name">Site Name</label>
                    <input type="text" name="site_name" id="site_name" placeholder="e.g. Google" onChange={(e) => setSiteName(e.target.value)} value={siteName} autoFocus/>
                </div>
                <div className="form_group">
                    <label htmlFor="site_url">Site URL</label>
                    <input type="text" name="site_url" id="site_url" placeholder="e.g. https://google.com" onChange={(e) => setSiteURL(e.target.value)} value={siteURL}/>
                </div>
                <div className="form_group">
                    <label htmlFor="site_desc">Site Description</label>
                    <textarea placeholder="Google is an awesome site" name="site_desc" id="site_desc" onChange={(e) => setSiteDesc(e.target.value)} value={siteDesc}/>
                </div>
                <div className="form_group">
                    <input type="submit" value={editingID === "" ? "Add Site" : "Update Site"}/>
                </div>
            </form>

            :
            
            <div className="container" style={{
                textAlign: "center"
            }}>
                <h3>Submitting</h3>
            </div>
            }
            </div>
        </div>
        </>
    )
}


export default FormComponet
