import {useContext, useState} from 'react'
import Icon from '@mdi/react'
import {mdiDelete, mdiDeleteEmpty, mdiPencil, mdiLinkVariant} from '@mdi/js'

import { Site, SiteContext } from '../App';


function SiteCard(
    {site, editSite}
    :{
        site: Site,
        editSite: () => void        
    }
){
    let {_id, site_url, site_name, site_desc} = site;

    const [deleteIcon, setDeleteIcon] = useState(mdiDelete);
    const {isBeingDeletedID, DeleteSite} = useContext(SiteContext);

    // console.log(editSite);
    return (
        <div className={`site_card ${_id === isBeingDeletedID && "deleting_site"}`}>
            <h2 className='mb-3'>{site_name}</h2>  
            <p>{site_desc}</p>
            <div className="cta_container">
                <a className="btn" href={site_url} target="_blank" rel="noopener noreferrer">
                    <Icon path={mdiLinkVariant} size={1}/>
                    Visit Site
                </a>
                <button className="btn edit" onClick={() => editSite()}>
                    <Icon path={mdiPencil} size={1}/>
                    Edit Site
                </button>
                <button 
                    className="btn del" 
                    onMouseEnter={() => setDeleteIcon(mdiDeleteEmpty)} 
                    onMouseLeave={() => setDeleteIcon(mdiDelete)} 
                    onClick={() => DeleteSite(_id)}
                >
                    <Icon path={deleteIcon} size={1} horizontal/>
                    Delete Site
                </button>
            </div>
        </div>
    )
}

export default SiteCard;
