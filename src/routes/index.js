import React from "react";
import { Routes,Route,Navigate  } from "react-router-dom";
import Forgot from "../screens/forgot";
import App from "../App";
import Page404 from "../screens/page404";






const AppRoutes=()=>{



return(
    <Routes> 
        <Route exact path="/App" element={<App/>}/>
        <Route exact path="/"  element={<Navigate to={"App"}/>}/>
        <Route exact path="/forget" element={<Forgot/>}/>
        <Route exact path="*" element={<Page404/>}/>
    </Routes>
)




}
export default AppRoutes;