import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/Landing/LandingPage";
import HomePrep from "./views/vistas-Prep/HomePrep";
import Postres from "./views/vistas-Prep/Postres/Postres";
import PostresFrios from "./views/vistas-Prep/Postres/PostresFrios";
import Waffles from "./views/vistas-Prep/Postres/PostresCalientes/Waffles";
//import Fondue from "./views/vistas-Prep/Postres/PostresCalientes/";
//import Fondue from "./views/vistas-Prep/Postres/PostresCalientes/";
//import Fondue from "./views/vistas-Prep/Postres/PostresCalientes/";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"              element={<LandingPage />} />
        <Route path="/home-prep"     element={<HomePrep />} />
        <Route path="/postres"       element={<Postres />} />
        <Route path="/postres-fríos" element={<PostresFrios />} />
        <Route path="/view-waffles"  element={<Waffles />} />
        {/* <Route path="/view-fondue"  element={<Fondue />} /> */}
        {/* <Route path="/view-calientes"  element={<Calientes />} /> */}
        {/* <Route path="/view-paraniños"  element={<ParaNiños />} /> */}



      </Routes>
    </Router>
  );
};

export default App;
