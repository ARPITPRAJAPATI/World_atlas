import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom"; 
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Error from "./pages/Error";
const App = () => {
    return(
        <>
        <Header/>
        <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/country' element={<Country />}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
        </>
    )
}
export default App 