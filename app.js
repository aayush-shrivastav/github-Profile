import React from "react";
import ReactDOM from "react-dom/client";
import Hearder from "./src/components/header";
import GitProfile from "./src/components/body";

 function App(){
   return(
    <>
    <Hearder />
    <GitProfile />
    </>
   )
 }

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
