import React, {useState} from "react";
import "./LogInModal.css";
import profileImg from "../../Assets/images/profile.png";
import passwordImg from "../../Assets/images/key.png";
import closeImg from "../../Assets/images/close.png";
import NavigationModal from "./NavigationModal";

const LogInModal = ({ onClose }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="log-in-modal">
            <div className="log-in-modal-container">
                <img onClick={onClose} src={closeImg} alt="close-button" className="log-in-close"/>
                <form action="#" encType="multipart/form-data">
                    <div className="log-in-input">
                        <div className="user-img">
                            <img src={profileImg} alt="user"/>
                        </div>
                        <label htmlFor="username">
                            <input type="text" placeholder="Username" name="username" required={true}/>
                        </label>
                    </div>
                    <div className="log-in-input">
                        <div className="user-img">
                            <img src={passwordImg} alt="user" className="key-image"/>
                        </div>
                        <label htmlFor="user-password">
                            <input type="password" placeholder="Password" name="user-password" required={true}/>
                        </label>
                    </div>
                    <div className="log-in-options">
                        <label htmlFor="option">
                            <input type="checkbox" name="option" className="log-in-check-box"/>
                            Remember Me
                        </label>
                        <p onClick={handleOpenModal}>Forgot Password?</p>
                    </div>
                    {showModal && <NavigationModal onClose={handleCloseModal} />}

                    <label htmlFor="submit-log-in">
                    <button type="submit" name="submit-log-in" className="login-button">LOGIN</button>
                    </label>
                    <p onClick={handleOpenModal}>Need to Register?</p>
                </form>
            </div>
        </div>
    );
};
export default LogInModal;