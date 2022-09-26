import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import User from './pages/User';
import Profile from './pages/Profile';


export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                 <Route exact path="/" element={<User/>}/>
                 <Route exact path="/create" element={<Profile/>}/>
                 <Route exact path="/update/:id" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}