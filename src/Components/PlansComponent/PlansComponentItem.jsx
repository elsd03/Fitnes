import React, {useState} from "react";
import NavigationModal from "../ModalComponents/NavigationModal";

const PlansItem = ({name,price,description}) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="membership-containers">
            <p>{name}</p>
            <h2>{price}</h2>
            <h4>Every month</h4>
            <h4>One-time payment</h4>
            <h4>30 day free trial</h4>
            <button onClick={handleOpenModal}>Start Free Trial</button>
            <div className="membership-benefit-container">
                <h3>{description}</h3>
            </div>
            {showModal && <NavigationModal onClose={handleCloseModal}/>}
        </div>
    );
};

export default PlansItem;
