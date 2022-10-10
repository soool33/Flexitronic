import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mails from '../../pages/Mails';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Mails/>} />
                <Route path="/profil" element={<Profil/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default index