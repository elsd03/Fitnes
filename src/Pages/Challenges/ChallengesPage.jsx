import "./ChallengesPage.css";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import runningImg from "../../Assets/images/running.jpg";
import ChallengeItem from "./ChallengeItem";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const ChallengesPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#challengesAnchor") {
            const element = document.getElementById("challengesAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }

    }, [location]);

    let myChallengesArray = [
        {
            upText: "Get Marathon",
            bottomText: "Ready"
        },
        {
            upText: "Running for",
            bottomText: "Beginners"
        },
        {
            upText: "5k Running",
            bottomText: "Challenge"
        }
    ];

    return (
        <div className="challenges-wrapper" id="challengesAnchor">
            <FixedMenu/>
            <NavigationMenu/>
            <div className="challenges-main-content">
                <div className="challenger-colored-block">
                    <div className="colored-text-container">
                        <b>GET OUT THERE
                            <br/>
                            and <i>Run</i></b>
                        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know
                            you</p>
                    </div>
                </div>
                <img src={runningImg} alt="running" className="running-img"/>
                <div className="challenger-offer-block">
                    {myChallengesArray.map((item,i) => {
                        return <ChallengeItem key ={i} upText={item.upText} bottomText={item.bottomText}/>
                    })
                    }
                </div>
            </div>
            <FooterComponent/>

        </div>
    )
}

export default ChallengesPage;