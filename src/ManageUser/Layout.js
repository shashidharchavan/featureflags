// import React, { useState,useEffect } from 'react'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import FeatureHome from "./FeatureHome";
// import ViewFeature from "./ViewFeature"
// import SearchUser from './SearchUser';
// import NewFeature from './NewFeature';
// //import EditFeature from './EditFeature';
// import PageNotFound from './PageNotFound';
// import { AppConfigurationClient } from "@azure/app-configuration";
// //import { useState,  } from "react";


// export default function Layout() {
//    const configService = new AppConfigurationClient("Endpoint=https://featureflagss.azconfig.io;Id=BGVw;Secret=NIfo8qTG+cvBbb+b5kDOvMNmlQmwyiXEfMAXd6bbb9w=");
//    const [isAdminOptionsEnabled, setIsAdminOptionsEnabled] = useState(false);
//    const [addFeatureOption, setAddFeatureOption] = useState(false);
//    const [updateFeatureOption, setUpdateFeatureOption] = useState(false);
//    const [favouritesOption, setFavouritesOption] = useState(false);
//    const [myFeaturesOption, setMyFeaturesOption] = useState(false);



//    //Feature Flag for Customer Search
//    useEffect(() => {
//     async function fetchFeatureFlag() {
//       try {
//         const response = await configService.getConfigurationSetting({
//           key: ".appconfig.featureflag/isAdminOptionsEnabled"});

//           console.log("Feature flag response:",response);
//           console.log("Feature flag value:", response?.value);

//       const featureFlagValue=JSON.parse(response?.value);
//        setIsAdminOptionsEnabled(featureFlagValue?.enabled === true);
//       // setIsAdminOptionsEnabled(Boolean(response?.value));
 

//       } catch (error) {
//         console.error("Error fetching feature flag:", error);
//       }
//     }

//     fetchFeatureFlag();
//   }, []);


//   //Feature Flag for Add Feature Search
//   useEffect(() => {
//     async function fetchFeatureFlag() {
//       try {
//         const response = await configService.getConfigurationSetting({
//           key: ".appconfig.featureflag/addFeatureOption"});

//           console.log("Feature flag value:", response?.value);

//       const featureFlagValue=JSON.parse(response?.value);
//        setAddFeatureOption(featureFlagValue?.enabled === true);
 

//       } catch (error) {
//         console.error("Error fetching feature flag:", error);
//       }
//     }

//     fetchFeatureFlag();
//   }, []);

   
//   //Feature Flag for Update Feature Search

//   useEffect(() => {
//     async function fetchFeatureFlag() {
//       try {
//         const response = await configService.getConfigurationSetting({
//           key: ".appconfig.featureflag/updateFeatureOption"});

//           console.log("Feature flag value:", response?.value);

//       const featureFlagValue=JSON.parse(response?.value);
//        setUpdateFeatureOption(featureFlagValue?.enabled === true);
 

//       } catch (error) {
//         console.error("Error fetching feature flag:", error);
//       }
//     }

//     fetchFeatureFlag();
//   }, []);

//   //For Favourites Option
//   useEffect(() => {
//     async function fetchFeatureFlag() {
//       try {
//         const response = await configService.getConfigurationSetting({
//           key: ".appconfig.featureflag/favouritesOption"});

//           console.log("Feature flag response:",response);
//           console.log("Feature flag value:", response?.value);

//       const featureFlagValue=JSON.parse(response?.value);
//        setFavouritesOption(featureFlagValue?.enabled === true);
 

//       } catch (error) {
//         console.error("Error fetching feature flag:", error);
//       }
//     }

//     fetchFeatureFlag();
//   }, []);

//     //For My Features Option
//     useEffect(() => {
//         async function fetchFeatureFlag() {
//           try {
//             const response = await configService.getConfigurationSetting({
//               key: ".appconfig.featureflag/myFeaturesOption"});
    
//               console.log("Feature flag response:",response);
//               console.log("Feature flag value:", response?.value);
    
//           const featureFlagValue=JSON.parse(response?.value);
//            setMyFeaturesOption(featureFlagValue?.enabled === true);
     
    
//           } catch (error) {
//             console.error("Error fetching feature flag:", error);
//           }
//         }
    
//         fetchFeatureFlag();
//       }, []);


//   let [role, setRole] = useState(1);
//   let [username, setUsername] = useState("Admin");
//   let [baseUrl, setBaseUrl] = useState("")
//   let [baseUrl1, setBaseUrl1] = useState("")
//   return (
//     <BrowserRouter>
//       <>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <div class="container-fluid">
//             <a class="navbar-brand" href="/">Feature Marketplace</a>
           
           
//             <div class="collapse navbar-collapse" id="navbarNavDropdown">
//             {/* <form class="form-inline my-2 my-lg-0">
//               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//               <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form> */}
//             <div className='col-md-4 offset-1'>
//             <div className='input-group'>
            
//                 <button type='button' className='btn btn-info'>Search
//                 </button>
           
//                 <input type='text' className='form-control'></input>
//             </div>
//             </div>
//               <ul class="navbar-nav offset-1">
//                 <li class="nav-item">


//                 {isAdminOptionsEnabled ?(
//                   <Link class="nav-link active"
//                     aria-current="page" to="searchuser">Custom Search</Link>
//                     ):(
//                         <p></p>
//                      )}
//                 </li>

        
//                 <li class="nav-item">
//                 {addFeatureOption ?(

//                   <Link class="nav-link active"
//                     aria-current="page" to="newfeature">Add Feature</Link>
//                     ):(
//                         <p></p>
//                      )}
//                 </li>


//                 <li class="nav-item">
//                 {updateFeatureOption ?(

//                   <Link class="nav-link active"
//                     aria-current="page" to="featurehome">Upload Feature</Link>
//                     ):(
//                         <p></p>
//                      )}
//                 </li>
                
//                 <li class="nav-item">
//                 {favouritesOption ?(

//                   <Link class="nav-link active"
//                     aria-current="page" to="featurehome">Favourites</Link>
//                     ):(
//                         <p></p>
//                      )}
//                 </li>


//                 <li class="nav-item">
//                 {myFeaturesOption ?(

//                   <Link class="nav-link active"
//                     aria-current="page" to="featurehome">My Features</Link>
//                      ):(
//                         <p></p>
//                      )}
//                 </li>
//               </ul>
             
//             </div>
//           </div>
//         </nav>
       
//       </>
 
//       <Routes>
//         <Route path='/' element={<FeatureHome></FeatureHome>} ></Route>
//         <Route path='/searchuser' element={<SearchUser ></SearchUser>} ></Route>
//         <Route path='newfeature' element={<NewFeature ></NewFeature>} ></Route>
//         <Route path='viewfeature' element={<ViewFeature></ViewFeature>} ></Route>
 
//       </Routes>
 
//     </BrowserRouter>
//   )
// }

import React, { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FeatureHome from "./FeatureHome";
import ViewFeature from "./ViewFeature"
import SearchUser from './SearchUser';
import NewFeature from './NewFeature';
//import EditFeature from './EditFeature';
import PageNotFound from './PageNotFound';
import { AppConfigurationClient } from "@azure/app-configuration";

const configService = new AppConfigurationClient("Endpoint=https://featureflagss.azconfig.io;Id=BGVw;Secret=NIfo8qTG+cvBbb+b5kDOvMNmlQmwyiXEfMAXd6bbb9w=");


export default function Layout() {
   
   const [featureFlags, setFeatureFlags]=useState({
    isAdminOptionsEnabled:false,
    addFeatureOption:false,
    updateFeatureOption:false,
    favouritesOption:false,
    myFeaturesOption:false,
   });
   

    const fetchFeatureFlags = async () => {
      try {
        const isAdminOptionsEnabledResponse = await configService.getConfigurationSetting({
          key: '.appconfig.featureflag/isAdminOptionsEnabled',
        });
       
        const addFeatureOptionResponse = await configService.getConfigurationSetting({
          key: '.appconfig.featureflag/addFeatureOption',
        });
        const updateFeatureOptionResponse = await configService.getConfigurationSetting({
          key: '.appconfig.featureflag/updateFeatureOption',
        });
        const favouritesOptionResponse = await configService.getConfigurationSetting({
          key: '.appconfig.featureflag/favouritesOption',
        });
        const myFeaturesOptionResponse = await configService.getConfigurationSetting({
          key: '.appconfig.featureflag/myFeaturesOption',
        });

        setFeatureFlags({
          isAdminOptionsEnabled: JSON.parse(isAdminOptionsEnabledResponse?.value)?.enabled === true,
          addFeatureOption: JSON.parse(addFeatureOptionResponse?.value)?.enabled === true,
          updateFeatureOption: JSON.parse(updateFeatureOptionResponse?.value)?.enabled === true,
          favouritesOption: JSON.parse(favouritesOptionResponse?.value)?.enabled === true,
          myFeaturesOption: JSON.parse(myFeaturesOptionResponse?.value)?.enabled === true,
        });
      } catch (error) {
        console.error('Error fetching feature flags:', error);
      }
    };
    useEffect(() => {

    fetchFeatureFlags();
    
     // Polling every 5 seconds (adjust as needed)
     const pollingInterval = setInterval(fetchFeatureFlags, 1000);

     return () => clearInterval(pollingInterval);

  }, []);

//   useEffect(() => {
//     const featureFlagListener = configService.addFeatureFlagChangeListener({
//       keyFilter: ['.appconfig.featureflag/*'],
//     });

//     const handleFeatureFlagChange = async (event) => {
//       const { key } = event;
//       console.log(`Feature flag ${key} changed`);
//       await fetchFeatureFlags();
//     };

//     featureFlagListener.onFeatureFlagChanged(handleFeatureFlagChange);

//     return () => {
//       featureFlagListener.stop();
//     };
//   }, []);

  return (
    <BrowserRouter>
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Feature Marketplace</a>
           
           
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <div className='col-md-4 offset-1'>
            <div className='input-group'>
            
                <button type='button' className='btn btn-info'>Search
                </button>
           
                <input type='text' className='form-control'></input>
            </div>
            </div>
              <ul class="navbar-nav offset-1">
                <li class="nav-item">


                {featureFlags.isAdminOptionsEnabled ?(
                  <Link class="nav-link active"
                    aria-current="page" to="searchuser">Custom Search</Link>
                    ):(
                        <p></p>
                     )}
                </li>

        
                <li class="nav-item">
                {featureFlags.addFeatureOption ?(

                  <Link class="nav-link active"
                    aria-current="page" to="newfeature">Add Feature</Link>
                    ):(
                        <p></p>
                     )}
                </li>


                <li class="nav-item">
                {featureFlags.updateFeatureOption ?(

                  <Link class="nav-link active"
                    aria-current="page" to="featurehome">Upload Feature</Link>
                    ):(
                        <p></p>
                     )}
                </li>
                
                <li class="nav-item">
                {featureFlags.favouritesOption ?(

                  <Link class="nav-link active"
                    aria-current="page" to="featurehome">Favourites</Link>
                    ):(
                        <p></p>
                     )}
                </li>


                <li class="nav-item">
                {featureFlags.myFeaturesOption ?(

                  <Link class="nav-link active"
                    aria-current="page" to="featurehome">My Features</Link>
                     ):(
                        <p></p>
                     )}
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
       
      </>
 
      <Routes>
        <Route path='/' element={<FeatureHome></FeatureHome>} ></Route>
        <Route path='/searchuser' element={<SearchUser ></SearchUser>} ></Route>
        <Route path='newfeature' element={<NewFeature ></NewFeature>} ></Route>
        <Route path='viewfeature' element={<ViewFeature></ViewFeature>} ></Route>
 
      </Routes>
 
    </BrowserRouter>
  )
}