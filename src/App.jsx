import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom"; 
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
const App = () => {
    return(
        <>
        
        <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/country' element={<Country />}/>
        </Routes>
        </>
    )
}
export default App 