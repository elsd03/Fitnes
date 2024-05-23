import "./PlansPage.css"
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import PlansComponent from "../../Components/PlansComponent/PlansComponent";

const PlansPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#plansAnchor") {
            const element = document.getElementById("plansAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [location]);
    return (
        <div className="plans-wrapper">
            <FixedMenu />
            <NavigationMenu />
            <PlansComponent />
            <FooterComponent />
        </div>
    )
}

export default PlansPage;