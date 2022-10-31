import React from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import {BrowserRouter, Link, Routes ,Route} from "react-router-dom";


function App(){
    return (
    <>
        <BrowserRouter>
            <Link to="/register">Registration</Link>
            <Link to="/login">Login</Link>
            <Routes>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path ="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;