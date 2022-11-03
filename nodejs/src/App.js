import React from "react";
import Register from "./pages/register";
import Login from "./pages/login";

import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Professional from "./pages/Professional";
import {BrowserRouter, Link, Routes ,Route} from "react-router-dom";
import DataProvider from "./nodeContext"
import Admin from './admin/admin'

function App(){
    return (
    <>
    <DataProvider>
        {/* <Login></Login> */}
        {/* <Admin></Admin> */}
        <BrowserRouter>
            {/* <Link to="/register">Registration</Link>
            <Link to="/login">Login</Link> */}
            <Routes>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/personal" element={<Personal/>}></Route>
                <Route path="/Professional" element={<Professional/>}></Route>
                <Route path ="/admin" element={<Admin/>}></Route>
                
            </Routes>
        </BrowserRouter>
        </DataProvider>
    </>
    );
}

export default App;