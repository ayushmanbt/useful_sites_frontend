import './styles/App.css';

// import Home from './pages/Home.js';
// import About from './pages/About.js';
// import SecretPage from './pages/SecretPage.js';
import TopBar from './components/TopBar.js';
import Footer from './components/Footer.js';
// import { useSelector } from 'react-redux';

import { createContext, useState } from 'react';

import { API_URL } from './constants.js';
import { Outlet } from 'react-router-dom';


// const router = createBrowserRouter([{
//   path: "/",
//   element: <Home />,
//   errorElement: <div>404</div>
// },
// {
//   path: "/about",
//   element: <About />
// },
// {
//   path: "/secret",
//   element: <SecretPage />
// }   
// ])


export const ThemeContext = createContext({
  theme: "light",
  setTheme: (_: string) => {}
});

export interface Site {
  _id: string,
  site_url: string,
  site_name: string,
  site_desc: string
}

interface SiteContext {
  sites: Site[],  
  isLoading: boolean,
  isBeingDeletedID: string | null,
  GetSites: () => void,
  AddSite: (arg0: Site) => void,
  UpdateSiteList: (arg0: Site[]) => void,
  DeleteSite: (arg0: string) => void,
  RemoveSiteLocal: (arg0: string) => void
}

export const SiteContext = createContext<SiteContext>({
  sites: [],
  isLoading: false,
  isBeingDeletedID: null,
  GetSites: () => {},
  AddSite: (_: Site) => {},
  UpdateSiteList: (_: Site[]) => {},
  DeleteSite: (_: string) => {},
  RemoveSiteLocal: (_: string) => {}
});



function App() {

  const [theme, setTheme] = useState("light");

  const [sites, setSites] = useState<Site[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBeingDeletedID, setIsBeingDeletedID] = useState<string | null>(null);


  const GetSites = () => {
    setIsLoading(true);
    fetch(`${API_URL}/sites/all`)
            .then(res => res.json())
            .then(res => {
                setIsLoading(false);
                setSites(res.sites);
            })
  }

  const AddSite = (newSite: Site) => {
    setSites((s) => [...s,newSite])
  }

  const UpdateSiteList = (sites: Site[]) => {
    setSites(sites);
  }

  const DeleteSite = (id: string) => {
    setIsBeingDeletedID(id);
    const options = {
      method: 'POST',
      body: JSON.stringify({id}),
      headers: {
          'Content-Type': 'application/json'
      }
    }
    fetch(`${API_URL}/sites/delete`, options)
      .then(res => res.json())
      .then(_ => {
        setIsBeingDeletedID(null);
        setSites((s) => s.filter((site) => site._id !== id));
      })
  }

  const RemoveSiteLocal = (id: string) => {
    setSites((s) => s.filter((site) => site._id !== id));
  }



  return (
    <SiteContext.Provider value={
      {
        sites,
        isLoading,
        isBeingDeletedID,
        GetSites,
        AddSite,
        UpdateSiteList,
        DeleteSite,
        RemoveSiteLocal
      }
    }>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={`pageLayout ${theme}`}>
          <TopBar />
          <div className="pageContent">
            <Outlet />
              {/* <RouterProvider router={router} /> */}
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </SiteContext.Provider>

  );
}


export default App;
