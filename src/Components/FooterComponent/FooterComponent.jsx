import adsImgGoogle from "../../Assets/images/google-market.webp";
import adsImgApple from "../../Assets/images/app-store.webp";
import React, {useRef} from "react";
import "../FooterComponent/FooterComponent.css";
import {Link, useNavigate} from "react-router-dom";

const FooterComponent = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const handleClick = () => {
        if (ref?.current) {
            navigate('/');
            ref?.current?.click();
        }
    }
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-block">
                    <div className="footer-block-item">
                        <h2>Join us on mobile!</h2>
                        <p>The Spaces by Wix app lets you easily stay in touch and updated with us on the go. Just
                            add your phone number and we’ll text you a link to download the app.</p>
                        <form action="#" encType="multipart/form-data">
                            <label htmlFor="numberPrefix" className="prefix-label">
                                <input type="tel" name="numberPrefix" placeholder="+994" className="ph-prefix" required/>
                            </label>
                            <label htmlFor="phoneNumber" className="phone-label">
                                <input type="tel" name="phoneNumber" placeholder="Phone" className="ph-number" required/>
                            </label>
                            <button type="submit">Send</button>
                        </form>
                        <div className="footer-images-block">
                            <a href="https://apps.wix.com/place-invites/invite-lp/v2?inviteId=19396257-a0d1-49f4-9f9d-081421713bef&ref=symp_button" rel="noreferrer" target="_blank">
                            <img src={adsImgGoogle} alt="googleAds"/>
                            </a>
                            <a href="https://apps.wix.com/place-invites/invite-lp/v2?inviteId=19396257-a0d1-49f4-9f9d-081421713bef&ref=symp_button" rel="noreferrer" target="_blank">
                                <img src={adsImgApple} alt="appleAds"/>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="footer-block">
                    <div className="footer-selection-container">
                        <div className="footer-selection-block">
                            <b>SOCIAL</b>
                            <div className="footer-selection-items">
                                    <a href="https://www.facebook.com/wix" target="_blank" rel="noreferrer">
                                        <p>Facebook</p>
                                    </a>
                                    <a href="https://www.youtube.com/user/Wix" target="_blank" rel="noreferrer">
                                        <p>Youtube</p>
                                    </a>
                                    <a href="https://www.tiktok.com/@wix?" target="_blank" rel="noreferrer">
                                        <p>TikTok</p>
                                    </a>
                                    <a href="https://www.instagram.com/wix/" target="_blank" rel="noreferrer">
                                        <p>Instagram</p>
                                    </a>
                            </div>
                            <Link to="/plans#plansAnchor">
                            <button type="button">Become a Member</button>
                            </Link>
                        </div>
                        <div className="footer-selection-block">
                            <b>MENU</b>
                            <div className="footer-selection-items">
                                <Link to="/services#servicesAnchor">
                                    <p>Services</p>
                                </Link>
                                <Link to="/challenges#challengesAnchor">
                                <p>Challenges</p>
                                </Link>

                                <Link to="/plans#plansAnchor">
                                <p>Plans</p>
                                </Link>
                                <Link to="/trainers#trainersAnchor">
                                <p>Trainers</p>
                                </Link>
                                <Link to="/groups#groupsAnchor">
                                <p>Groups</p>
                                </Link>
                                <div onClick={handleClick}>
                                    <a ref={ref} href="/#formAnchor">
                                        <p>Contact</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2023 by UNDERARMOUR. Powered and secured by <a href="https://github.com/Simon-Celestial" target="_blank" rel="noreferrer">Ziya Gasimly</a></p>
            </div>
        </footer>
    )
}

export default FooterComponent;