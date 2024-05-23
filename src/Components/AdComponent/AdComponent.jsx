import adsImgApple from "../../Assets/images/app-store.webp";
import adsImgGoogle from "../../Assets/images/google-market.webp";
import "./AdComponent.css";
import {Link} from "react-router-dom";


const AdComponent = () => {
    return (
        <div className="ads-container">
            <div className="ads-items">
                <p>We're available on multiple devices</p>
                <h4>Download Our App</h4>
            </div>
            <div className="ads-items">
                <Link to="/#footerAnchor">
                    <img src={adsImgApple} alt="apple-store"/>
                </Link>
                <Link to="/#footerAnchor">
                    <img src={adsImgGoogle} alt="play-market"/>
                </Link>
            </div>
        </div>
    )
}
export default AdComponent;