import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/Landing/LandingPage';
import HomePrep from './views/vistas-Prep/HomePrep';

const App = () => {
    return (
        

        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home-prep" element={<HomePrep />} />
            </Routes>
        </Router>

        
    );
    
};

export default App;

