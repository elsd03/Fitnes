import React from "react";

const InfoBlock = ({italicText}) => {
    return (
        <div className="classes-selection-item">
            <i>{italicText}</i>
        </div>
    );
};

export default InfoBlock;