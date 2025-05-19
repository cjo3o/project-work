import React, {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import Menu from "./components/Menu.jsx";


function App() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<RootPage/>}/>
                <Route path="/user" element={<UserPage/>}/>
            </Routes>
        </>
    )
}

export default App
