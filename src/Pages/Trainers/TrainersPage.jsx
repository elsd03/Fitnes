import "./TrainersPage.css";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import fitnessBackImg from "../../Assets/images/fitness-man-back.jpg";
import emilyTrainer from "../../Assets/images/emily-trainer.webp";
import melTrainer from "../../Assets/images/mel-trainer.webp";
import michaelTrainer from "../../Assets/images/michael-trainer.webp";
import joshTrainer from "../../Assets/images/josh-trainer.webp";
import jordenTrainer from "../../Assets/images/jorden-trainer.webp";
import hannaTrainer from "../../Assets/images/hanna-trainer.webp";
import jeremyTrainer from "../../Assets/images/jeremy-trainer.webp";
import marinaTrainer from "../../Assets/images/marina-trainer.webp";
import derekTrainer from "../../Assets/images/derek-trainer.webp";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TrainersPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#trainersAnchor") {
            const element = document.getElementById("trainersAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }
}, [location]);

    return (
        <div className="trainers-wrapper" id="trainersAnchor">
            <FixedMenu/>
            <NavigationMenu/>
            <div className="trainers-main-content">
                <div className="trainers-colored-block">
                    <div className="trainers-colored-text-container">
                        <b>WE DEFINE
                            <br/>
                            <i>Professional </i>
                            TRAINING</b>
                        <p>I'm a paragraph. Click here to add your own text
                            and edit me. Let your users get to know
                            you</p>
                    </div>
                </div>
                <img src={fitnessBackImg} alt="fitness-back" className="fitness-back-img"/>
                <div className="trainers-info-container">
                    <div className="trainers-info-text">
                        <b>MEET YOUR <i>Trainers</i></b>
                        <p>I'm a paragraph. Click here to add your own text and edit me.
                            <br/>
                            Let your users get to know you.
                        </p>
                    </div>
                    <div className="trainers-photo-info-block">
                        <div className="trainers-info-row">
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={jeremyTrainer} alt="jeremy-trainer"/>
                                    <h2>JEREMY</h2>
                                    <p>Specializing in Yoga</p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={jordenTrainer} alt="jorden-trainer"/>
                                    <h2>JORDEN</h2>
                                    <p>Specializing in Strength</p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={hannaTrainer} alt="hanna-trainer"/>
                                    <h2>HANNA</h2>
                                    <p>Specializing in Endurance</p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="trainers-info-row">
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={joshTrainer} alt="josh-trainer"/>
                                    <h2>JOSH</h2>
                                    <p>Specializing in Endurance
                                    </p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={emilyTrainer} alt="emily-trainer"/>
                                    <h2>EMILY</h2>
                                    <p>Specializing in Hiit
                                    </p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={melTrainer} alt="mel-trainer"/>
                                    <h2>MEL</h2>
                                    <p>Specializing in Meditation</p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="trainers-info-row">
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={marinaTrainer} alt="marina-trainer"/>
                                    <h2>MARINA</h2>
                                    <p>Specializing in Meditation</p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={michaelTrainer} alt="michael-trainer"/>
                                    <h2>MICHAEL</h2>
                                    <p>Specializing in Strength</p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                            <div className="trainers-info-row-container">
                                <div className="trainers-row-photo-item">
                                    <img src={derekTrainer} alt="derek-trainer"/>
                                    <h2>DEREK</h2>
                                    <p>Specializing in Yoga</p>
                                </div>
                                <div className="trainers-row-text-item">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to add your own content and make changes to
                                        the font. I’m a great place for you to tell a story and let your users know a
                                        little more about you.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="trainers-classes-block">
                        <p>
                            All of our trainers are world class certified. And ready to help at any time!                        </p>
                    </div>
                </div>
            </div>

            <FooterComponent/>
        </div>
    )
}
export default TrainersPage;