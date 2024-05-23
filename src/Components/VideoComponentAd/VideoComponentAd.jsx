import homeImg from "../../Assets/images/home.png";
import showerImg from "../../Assets/images/shower.png";
import lockerImg from "../../Assets/images/locker.png";
import dumbbellImg from "../../Assets/images/dumbell.png";
import fitnessVid from "../../Assets/video/fitness-video.mp4";
import React from "react";
import "./VideoComponentAd.css";

const VideoComponentAd = () => {
    return (<div className="main-page-video">
            <div className="info-block">
                <div className="info-block-item">
                    <img src={homeImg} alt="house"/>
                    <p>1000 <br/>
                        Sqf</p>
                </div>
                <div className="info-block-item">
                    <img src={showerImg} alt="showers"/>
                    <p>Clean <br/>
                        Showers</p>
                </div>
                <div className="info-block-item">
                    <img src={lockerImg} alt="locker"/>
                    <p>Locker <br/>
                        Room</p>
                </div>
                <div className="info-block-item">
                    <img src={dumbbellImg} alt="fitness-equipment"/>
                    <p>New <br/>
                        Equipment</p>
                </div>
            </div>
            <div className="main-page-video-container">
                <b>OUR
                    <i> New</i>
                    <br/>
                    STUDIO</b>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
                    Text” or double click me to add your own content and make changes to the font.</p>
            </div>
            <div className="main-page-video-container">
                <video src={fitnessVid} muted loop autoPlay={true}></video>
            </div>
        </div>

    )
}
export default VideoComponentAd;