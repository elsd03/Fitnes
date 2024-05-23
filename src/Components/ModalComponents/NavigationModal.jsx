import React from "react";
import "./NavigationModal.css";

const NavigationModal = ({ onClose }) => {
    return (
        <div className="full-screen-modal">
            <div className="modal-container">
            <b>Under Construction!</b>
            <i>We apologize, this function
                is under development!</i>
            <button onClick={onClose} >Close Modal</button>
            </div>
        </div>
    );
};

export default NavigationModal;