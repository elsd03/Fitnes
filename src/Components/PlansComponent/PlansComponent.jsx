import "./PlansComponent.css";
import React from "react";
import PlansComponentItem from "./PlansComponentItem";

let plansArray = [
    {
        name: "Yearly Plan - 40% off",
        description: "Choose your training plan!",
        price: "29.99 $"
    },
    {
        name: "Monthly Plan",
        description: "Take your fitness journey to the next level!",
        price: "$49.99"
    }
];
const PlansComponent = () => {
    return (
        <div className="plans-main-content">
            <div id="plansAnchor" className="plans-main-content-container">
                <h1>Our Memberships
                </h1>
                <div className="membership-block">
                    {plansArray.map((item, i) => {
                        return <PlansComponentItem
                            key={i}
                            {...item}
                        />
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default PlansComponent;