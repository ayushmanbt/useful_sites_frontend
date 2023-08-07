import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ReactComponent as LoadingCircle} from "../assets/Loading.svg"


import SiteCard from '../components/SiteCard.jsx';
import FormComponent from "../components/FormComponet";

import Icon from '@mdi/react'
import {mdiPlusBox} from '@mdi/js'


import { getSitesFromOnline, deleteSiteFromDB } from "../reducers/site/actions"


function Home() {
  // const [siteList, setSiteList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const [editingID, setEditingID] = useState("");

  //importing the siteState by selector
  const siteState = useSelector(state => state.sites)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getSitesFromOnline())
  }, [dispatch])


  const RenderedList = () => {
    if(siteState.isLoading){
      return (
        <div className="loading">
          <LoadingCircle className="loading_circle"/>
        </div>
      )
    }
    else{
      return(
        siteState.siteList.map(element => {
          return (
            <SiteCard 
              key={element._id} 
              site={element} 
              editSite = {() => {setEditingID(element._id); openForm();}}
              deleteSite = {() => dispatch(deleteSiteFromDB(element._id))}
            />
          )
        })
      )
    }
  }

  const closeForm = () => {
    setIsFormDisplayed(false);
    setEditingID("");
  }

  const openForm = () => {
    setIsFormDisplayed(true);
  }

  return (
    <div>
      
      { isFormDisplayed ? (<FormComponent editingID={editingID} closeForm={closeForm}/>) : (<div/>) }
      
      <div className="container">
        <div className="center">
          <RenderedList />
        </div>
        <button 
          className="btn cta_button" 
          onClick={() => isFormDisplayed? closeForm() : openForm()}
        >
          <Icon path={mdiPlusBox} size={1} rotate={isFormDisplayed ? 45 : 0}/>
          &nbsp;
          {isFormDisplayed ? "Close the form" : "Add another Site"}
        </button>

      </div>
    </div>
  );
}

export default Home;
