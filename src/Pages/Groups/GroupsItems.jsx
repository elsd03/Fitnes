import React, {useState} from "react";
import NavigationModal from "../../Components/ModalComponents/NavigationModal";


const GroupsItems = ({image,name}) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="suggested-groups-item">
            <button onClick={handleOpenModal} className="suggested-group-button">Join</button>
            <img src={image} alt="group"/>
            <div className="group-name">
                <p>{name}</p>
                <div className="group-info">
                    <p>Public</p>
                    <p>1 Member</p>
                </div>
            </div>
            {showModal && <NavigationModal onClose={handleCloseModal} />}
        </div>
    );
};

export default GroupsItems;