import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Mails from '../../pages/Mails';
import Home from '../../pages/Home';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Mails} />
                <Navigate to="/" />
            </Routes>
        </BrowserRouter>
    )
}

export default index