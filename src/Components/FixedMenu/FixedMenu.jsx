import "./FixedMenu.css";
import facebookImg from "../../Assets/images/facebook.png";
import youtubeImg from "../../Assets/images/youtube.png";
import tikTokImg from "../../Assets/images/tik-tok.png";
import instagramImg from "../../Assets/images/instagram.png";
import chatImg from "../../Assets/images/live-chat.png";
import arrowUP from "../../Assets/images/verify.png";
import {useState} from "react";
import NavigationModal from "../ModalComponents/NavigationModal";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
const FixedMenu = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return (
        <div className="fixed-menu">
            <div className="circle-menu-arrow" onClick={scrollToTop}>
                <img src={arrowUP} alt="arrow"/>
            </div>
            <div className="vertical-fixed-block">
                <a href="https://www.facebook.com/wix" target="_blank" rel="noreferrer">
                    <img src={facebookImg} alt="facebook"/>
                </a>
                <a href="https://www.youtube.com/user/Wix" target="_blank" rel="noreferrer">
                    <img src={youtubeImg} alt="youtube"/>
                </a>
                <a href="https://www.tiktok.com/@wix?" target="_blank" rel="noreferrer">
                    <img src={tikTokImg} alt="tik-tok"/>
                </a>
                <a href="https://www.instagram.com/wix/" target="_blank" rel="noreferrer">
                    <img src={instagramImg} alt="instagram"/>
                </a>
            </div>
            <div onClick={handleOpenModal} className="horizontal-fixed-block">
                <img src={chatImg} alt="chat"/>
                <p>Support's Help!</p>
            </div>
            {showModal && <NavigationModal onClose={handleCloseModal}/>}
        </div>
    )

}
export default FixedMenu;