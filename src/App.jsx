import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import SiteMainPage from "./Pages/SiteMainPage/SiteMainPage";
import ChallengesPage from "./Pages/Challenges/ChallengesPage";
import PlansPage from "./Pages/Plans/PlansPage";
import TrainersPage from "./Pages/Trainers/TrainersPage";
import GroupsPage from "./Pages/Groups/GroupsPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";


function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SiteMainPage />}/>
                <Route path="/challenges" element={<ChallengesPage />}/>
                <Route path="/plans" element={<PlansPage />}/>
                <Route path="/trainers" element={<TrainersPage />}/>
                <Route path="/groups" element={<GroupsPage />}/>
                <Route path="/services" element={<ServicesPage />}/>
            </Routes>
        </div>

    );
}

export default App;
