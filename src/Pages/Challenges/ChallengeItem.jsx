import React, {useState} from "react";
import NavigationModal from "../../Components/ModalComponents/NavigationModal";

const ChallengeItem = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
    <div className="challenges-offer-items">
      <b>
        {props.upText}
        <br />
        {props.bottomText}
      </b>
      <button onClick={handleOpenModal} type="button">Join now</button>
        {showModal && <NavigationModal onClose={handleCloseModal}/>}
    </div>
  );
};

export default ChallengeItem;
