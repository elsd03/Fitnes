import "./GroupsPage.css";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import React, {useEffect, useMemo, useState} from "react";
import manUser from "../../Assets/images/man-user.png";
import videoCamera from "../../Assets/images/video-camera.png";
import photoCamera from "../../Assets/images/camera.png";
import searchImg from "../../Assets/images/search.png";
import groupOneImg from "../../Assets/images/group-1.webp";
import groupTwoImg from "../../Assets/images/group-2.webp";
import groupThreeImg from "../../Assets/images/group-3.webp";
import {useLocation} from "react-router-dom";
import GroupsItems from "./GroupsItems";
import NavigationModal from "../../Components/ModalComponents/NavigationModal";

const groupItems = [
    {
        image: groupOneImg,
        name: "Stronger Together",
    },
    {
        image: groupTwoImg,
        name: "Let's Talk Strength",
    },
    {
        image: groupThreeImg,
        name: "Daily Motivation Tips",
    },
];
const GroupsPage = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const location = useLocation();
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {

        if (location.hash === "#groupsAnchor") {
            const element = document.getElementById("groupsAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }

    }, [location]);

    const filteredGroups = useMemo(() => groupItems.filter(it => it.name
            .toLowerCase()
            .includes(searchValue.toLowerCase()))
        , [searchValue]);
    return (
        <div className="groups-wrapper" id="groupsAnchor">
            <FixedMenu/>
            <NavigationMenu/>
            <div className="groups-main-content">
                <div className="groups-colored-block">
                    <div className="groups-colored-text-container">
                        <b>JOIN THE
                            <i> UNDERARMOUR</i>
                            <br/>
                            COMMUNITY
                        </b>
                        <p>Embark on a journey towards a healthier and fitter lifestyle.</p>
                    </div>
                </div>
                <div className="groups-feed-wrapper">
                    <b className="group-feed-text">Groups Feed</b>
                    <div className="feed-container">
                        <div className="feed-container-blocks">
                            <div className="feed-blocks-item">
                                <img src={manUser} alt="man-user"/>
                                <div onClick={handleOpenModal} className="feed-sharing-panel">
                                    <p>Share something...</p>
                                </div>
                                <button onClick={handleOpenModal}>Create a Post</button>
                                {showModal && <NavigationModal onClose={handleCloseModal}/>}
                            </div>
                            <div className="feed-blocks-item">
                                <div className="feed-img-text-item" onClick={handleOpenModal}>
                                    <img src={photoCamera} alt="photo"/>
                                    <p>Photo</p>
                                </div>
                                <div className="feed-img-text-item" onClick={handleOpenModal}>
                                    <img src={videoCamera} alt="video"/>
                                    <p>Video</p>
                                </div>
                                <div className="feed-img-text-item" onClick={handleOpenModal}>
                                    <p>GIF</p>
                                </div>
                            </div>
                            <div className="feed-blocks-item">
                                <h2>No Posts to Show</h2>
                                <p>Check out the available groups for you to join and start posting.
                                </p>
                            </div>

                        </div>
                        <div className="feed-container-blocks">
                            <div className="suggested-groups-block">
                                <div className="groups-search-box-wrapper">
                                    <div className="groups-search-box">
                                        <img src={searchImg} alt="search"/>
                                        <input type="text" placeholder="Search"
                                               onInput={(ev) => setSearchValue(ev.target.value)}/>
                                    </div>
                                </div>
                                <div className="suggested-groups-list-block">
                                    <b className="suggested-group-name">Suggested Groups</b>
                                    {filteredGroups.map((item, i) => {
                                        return <GroupsItems
                                            key={`${i}${item.name}`}
                                            {...item}
                                        />
                                    })
                                    }
                                    {
                                        filteredGroups.length === 0 && <div className="no-groups-found">
                                            <b>No results to show</b>
                                            <p>No groups match your search. Double-check the name and try again.</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        </div>
    )
}
export default GroupsPage;
