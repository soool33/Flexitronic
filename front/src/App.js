import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mails from './pages/Mails';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Mails/>} />
                </Routes>
            </Router>
            
        </div>
    )
}

export default App;
