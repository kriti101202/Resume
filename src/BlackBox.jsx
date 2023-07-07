import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Resume from "./Resume";
// import NotFound from "./NotFound";

function Box(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
      <Route path="Resume" element={<Resume/>}></Route>
      {/* <Route path="*" element={<NotFound/>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default Box;