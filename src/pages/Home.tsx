import {useState, useEffect, useContext} from 'react'

import SiteCard from '../components/SiteCard.jsx';
import FormComponent from "../components/FormComponet";

import Icon from '@mdi/react'
import {mdiPlusBox} from '@mdi/js'
import { SiteContext } from '../App.js';


function Home() {
  // const [siteList, setSiteList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);


  const [editingID, setEditingID] = useState("");

  //importing the siteState by selector
  const {sites, isLoading, GetSites} = useContext(SiteContext);

  useEffect(() => {
    GetSites();
  }, [])


  const RenderedList = () => {
    if(isLoading){
      return (
        <div className="loading">
          Loading...
        </div>
      )
    }
    else{
      return(
        sites.map(element => {
          return (
            <SiteCard 
              key={element._id} 
              site={element} 
              editSite = {() => {setEditingID(element._id); openForm();}}
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
