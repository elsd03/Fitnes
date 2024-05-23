import "./SiteMainPage.css";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import mainImgA from "../../Assets/images/main-background.jpg"
import mainImgB from "../../Assets/images/main-background2.jpg"
import AdComponent from "../../Components/AdComponent/AdComponent";
import mainImgC from "../../Assets/images/fitness-man.jpg";
import mainImgD from "../../Assets/images/fitness-man-2.jpg";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import fitnessHall from "../../Assets/images/fitness-hall.jpg";
import jordenTrainer from "../../Assets/images/jorden-img.webp";
import jeremyTrainer from "../../Assets/images/jeremy-img.webp";
import emilyTrainer from "../../Assets/images/emily-img.webp";
import hannaTrainer from "../../Assets/images/hanna-img.webp";
import verifyImg from "../../Assets/images/verify.png";
import quoteImg from "../../Assets/images/quote.png";
import VideoComponentAd from "../../Components/VideoComponentAd/VideoComponentAd";
import FormContainer from "../../Components/FormContainer/FormContainer";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import "../../Animation.css";
import InfoBlock from "./InfoBlock";

const infoBlockArr = [
    {
        italicText: "In-person fitness classes offer a wide range of benefits that can enhance your overall health, fitness, and well-being.",
    },
    {
        italicText: "Online fitness classes provide several advantages for individuals looking to stay active, fit, and healthy.",
    },
];

const SiteMainPage = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash === "#footerAnchor") {
            const element = document.getElementById("footerAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }
        if (location.hash === "#homeAnchor") {
            const element = document.getElementById("homeAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }
        if (location.hash === "/#formAnchor") {
            const element = document.getElementById("formAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [location]);

    return (
        <div className="site-wrapper" id="homeAnchor">
            <FixedMenu/>
            <NavigationMenu/>
            <div className="main-page-content">
                <div className="main-page-container">
                    <div className="main-page-container-block animated-block">
                        <h2>Get Fit</h2>
                        <h1>You Can</h1>
                        <h1>& You Will</h1>
                        <p>For your convenience; fitness workouts online & in person so you always have the choice. </p>
                    </div>
                    <img src={mainImgA} alt="fitness" className="main-img-a"/>
                    <img src={mainImgB} alt="fitness" className="main-img-b"/>
                    <AdComponent/>
                </div>
                <div className="main-page-second-container">
                    <div className="second-container-items">
                        <div className="second-container-image-block">
                            <img src={mainImgC} alt="fitness-trainer"/>
                            <img src={mainImgD} alt="fitness-trainer-2"/>
                        </div>

                    </div>
                    <div className="second-container-items">
                        <div className="second-container-info-block">
                            <h2>WE BELIEVE</h2>
                            <h2>
                                IN <i>Training</i>
                            </h2>
                            <p>Fitness is a journey, not a destination. It is a lifelong commitment to self-improvement
                                and self-care. We recognize that everyone's fitness journey is unique, and we strive to
                                provide a supportive and inclusive environment for individuals of all ages, backgrounds,
                                and fitness levels.</p>
                            <div className="second-page-info-container">
                                <div className="info-container-numbers">
                                    <h4>1500+</h4>
                                    <p>Clients</p>
                                </div>
                                <div className="info-container-numbers">
                                    <h4>45</h4>
                                    <p>Trainers</p>
                                </div>
                                <div className="info-container-numbers">
                                    <h4>07</h4>
                                    <p>Locations</p>
                                </div>
                            </div>
                            <Link to="/services#servicesAnchor">
                                <button type="button">View Our Services</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="main-page-content-heading-block">
                    <h2><i>Become an </i>UNDERARMOUR</h2>
                    <p>Join one of our plans and get access to all of our fitness workouts.</p>
                </div>
                <div className="main-page-price-container">
                    <div className="price-container-blocks">
                        <div className="price-block-items">
                            <p>YEARLY PLAN
                                <br/>
                                (40% off)
                            </p>
                            <h1>$29.99</h1>
                            <h5>per/month</h5>
                            <Link to="/plans#plansAnchor">
                                <button type="button" className="monthly-button">
                                    Start 1 Month Free
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="price-container-blocks">
                        <img src={fitnessHall} alt="fitness"/>
                    </div>
                    <div className="price-container-blocks">
                        <div className="price-block-items">
                            <p>MONTHLY PLAN
                                <br/>
                                (Cancel Anytime)
                            </p>
                            <h1>$49.99</h1>
                            <h5>per/month</h5>
                            <Link to="/plans#plansAnchor">
                                <button type="button" className="yearly-button">
                                    Start 1 Month Free
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="main-page-classes-selection">
                    <div className="classes-selection-container">
                        <b>IN <i>Person</i> OR <i>Online.</i></b>
                        <b>THE CHOICE IS YOURS.
                        </b>
                        <p>Our studio classes stream live so you can feel the studio wherever you are.</p>
                        <div className="classes-selection-block">
                            {infoBlockArr.map((item, i) => {
                                return <InfoBlock
                                    key={i}
                                    {...item}
                                />
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="main-page-next-heading">
                    <b>THEY MAKE IT <i>Happen</i></b>
                    <p>Our head trainers work hard to create exercises right for you.</p>
                    <Link to="/trainers#trainersAnchor">
                        <button type="button">Meet All Trainers</button>
                    </Link>
                </div>
                <div className="main-page-trainers">
                    <div className="trainers-item">
                        <img src={jordenTrainer} alt="fitness-trainer-jorden"/>
                        <div className="trainers-item-container">
                            <h5>JORDEN</h5>
                            <p>Specializing in Strength</p>
                        </div>
                        <Link to="/trainers#trainersAnchor">
                            <img src={verifyImg} alt="verify-button" className="verify-trainers"/>
                        </Link>
                    </div>
                    <div className="trainers-items">
                        <div className="trainers-item">
                            <img src={jeremyTrainer} alt="fitness-trainer-jeremy"/>
                            <div className="trainers-item-container">
                                <h5>JEREMY</h5>
                                <p>Specializing in Yoga</p>
                            </div>
                            <Link to="/trainers#trainersAnchor">
                                <img src={verifyImg} alt="verify-button" className="verify-trainers"/>
                            </Link>
                        </div>
                        <div className="trainers-item">
                            <img src={hannaTrainer} alt="fitness-trainer-hanna"/>
                            <div className="trainers-item-container">
                                <h5>HANNA</h5>
                                <p>Specializing in Endurance</p>
                            </div>
                            <Link to="/trainers#trainersAnchor">
                                <img src={verifyImg} alt="verify-button" className="verify-trainers"/>
                            </Link>
                        </div>
                    </div>
                    <div className="trainers-item">
                        <img src={emilyTrainer} alt="fitness-trainer-emily"/>
                        <div className="trainers-item-container">
                            <h5>EMILY</h5>
                            <p>Specializing in Crossfit</p>
                        </div>
                        <Link to="/trainers#trainersAnchor">
                            <img src={verifyImg} alt="verify-button" className="verify-trainers"/>
                        </Link>
                    </div>
                </div>
                <div className="main-page-new-heading">
                    <div className="new-heading-container">
                        <b>
                            YOU HEARD IT
                            HERE <i>First</i> </b>
                    </div>
                    <div className="new-heading-container">
                        <p>Hear what our clients have to say about their workouts and their experiences.
                        </p>
                    </div>
                </div>
                <div className="main-page-testimonials">
                    <div className="testimonial-containers">
                        <div className="testimonial-circle">
                            <img src={quoteImg} alt="quote"/>
                        </div>
                        <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your
                            services. Let your customers review you and tell their friends how great you are.”</p>
                        <span>CASEY</span>
                        <p>Yoga Class</p>
                    </div>
                    <div className="testimonial-containers">
                        <div className="testimonial-circle">
                            <img src={quoteImg} alt="quote"/>
                        </div>
                        <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your
                            services. Let your customers review you and tell their friends how great you are.”</p>
                        <span>AMY</span>
                        <p>Strength Class</p>
                    </div>
                    <div className="testimonial-containers">
                        <div className="testimonial-circle">
                            <img src={quoteImg} alt="quote"/>
                        </div>
                        <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your
                            services. Let your customers review you and tell their friends how great you are.”</p>
                        <span>ROBBIE</span>
                        <p>Crossfit Class</p>
                    </div>
                </div>
                <VideoComponentAd/>
                <FormContainer/>
                <div className="form-empty-container" id="footerAnchor"/>
                <FooterComponent/>
            </div>
        </div>
    )
}
export default SiteMainPage;