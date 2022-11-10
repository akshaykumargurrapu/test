import React from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import Personal from "./pages/Personal";
import Professional from "./pages/Professional";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./nodeContext"
import Admin from './admin/admin'
import Nav from "./Nav";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
    const paths=["/","/register","/Home","/personal","/Professional"];
    return (
        <DataProvider>
            <BrowserRouter>
                {(paths.includes(window.location.pathname) && window.location.pathname !== '/' && (<Nav />)) 
                    || ( localStorage.getItem('qwert') && (<Nav />) )}
                <Routes>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/" element={(localStorage.getItem('qwert')===null)?(<Login />):(JSON.parse(localStorage.getItem('qwert')).name==="admin")?(<Admin />):(<Home />)}></Route>
                    <Route path="/Home" element={(localStorage.getItem('qwert')===null)?(<Error/>):(JSON.parse(localStorage.getItem('qwert')).name!=="admin")?(<Home />):(<Error/>)}></Route>
                    <Route path="/personal" element={(localStorage.getItem('qwert')===null)?(<Error/>):(<Personal />)}></Route>
                    <Route path="/Professional" element={(localStorage.getItem('qwert')===null)?(<Error/>):(<Professional />)}></Route>
                    <Route path="/admin" element={(localStorage.getItem('qwert')===null)?(<Error/>):(JSON.parse(localStorage.getItem('qwert')).name==="admin")?(<Admin />):(<Error/>)}></Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;