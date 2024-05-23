import "./NavigationMenu.css";
import brandLogo from "../../Assets/images/siteLogo.png";
import user from "../../Assets/images/user.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";
import LogInModal from "../ModalComponents/LogInModal";


const NavigationMenu = () => {
    const location = useLocation();
    const ref = useRef(null);
    const burgerRef = useRef(null);
    const navigate = useNavigate();
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowWidth > 850 && burgerOpen) setBurgerOpen(false)
    }, [windowWidth, burgerOpen]);

    useEffect(() => {
        if (burgerOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "unset";
        }
    }, [burgerOpen]);
    const handleClick = () => {
        if (ref?.current) {
            setBurgerOpen(false);
            navigate('/#formAnchor');
        }
    }
    const rotateMenu = () => {
        setBurgerOpen(prev => !prev);
    }
    const opaqueStyle = useMemo(() => ({
        opacity: burgerOpen ? 0 : 1,
    }), [burgerOpen])
    return (
        <>
            <header className="nav-menu">
                <div className="nav-container" style={opaqueStyle}>
                    <Link to="/">
                        <img src={brandLogo} alt="site-logo"/>
                    </Link>
                </div>
                <div className="nav-container burger-wrapper">
                    <div className="transformer-menu-wrapper" onClick={() => rotateMenu()}>
                        <div ref={burgerRef}
                             className={['transformer-menu', burgerOpen ? 'rotated' : ''].join(' ')}>
                            <div className="menu-stick first-stick"></div>
                            <div className="menu-stick second-stick"></div>
                            <div className="menu-stick third-stick"></div>
                        </div>
                    </div>
                </div>
                <div className="nav-container">
                    <Link to="/services#servicesAnchor">
                        <p style={{color: location.pathname.startsWith('/services') ? 'orange' : 'black',}}>Services</p>
                    </Link>
                    <Link to="/challenges">
                        <p style={{color: location.pathname.startsWith('/challenges') ? 'orange' : 'black',}}>Challenges</p>
                    </Link>
                    <Link to="/plans">
                        <p style={{color: location.pathname.startsWith('/plans') ? 'orange' : 'black',}}>Plans</p>
                    </Link>
                    <Link to="/trainers">
                        <p style={{color: location.pathname.startsWith('/trainers') ? 'orange' : 'black',}}>Trainers</p>
                    </Link>
                    <Link to="/groups">
                        <p style={{color: location.pathname.startsWith('/groups') ? 'orange' : 'black',}}>Groups</p>
                    </Link>
                    <div onClick={handleClick}>
                        <a ref={ref} href="/#formAnchor">
                            <p>Contact</p>
                        </a>
                    </div>
                </div>
                <div className="nav-container" style={opaqueStyle}>
                    <div className="nav-log-block">
                        <div className="nav-log-item" onClick={handleOpenModal}>
                            <img className="log-in-entry" src={user} alt="user-logo"/>
                            <p>Log In</p>
                        </div>
                        <Link to="/plans">
                            <button type="button" className="join-button">Join Now</button>
                        </Link>
                        {showModal && <LogInModal onClose={handleCloseModal}/>}
                    </div>
                </div>
            </header>

            <div className={["nav-container-mobile", burgerOpen ? 'open' : ''].join(' ')} style={{
                top: (burgerRef?.current?.getBoundingClientRect()?.bottom || 0) + 15,
            }}>
                <div className="nav-log-item menu-log-in">
                    {showModal && <LogInModal onClose={handleCloseModal}/>}
                    <img src={user} alt="user-logo"/>
                    <p onClick={handleOpenModal}>Log In</p>
                </div>
                {
                    [
                        ['/', 'Home'],
                        ['/challenges', 'Challenges'],
                        ['/plans', 'Plans'],
                        ['/trainers', 'Trainers'],
                        ['/groups', 'Groups']
                    ].map(([path, label]) =>
                        <Link
                            key={`id_${path}`}
                            to={path}
                            onClick={() => {
                                if (location.pathname === path) setBurgerOpen(false);
                            }}
                        ><p>{label}</p>
                        </Link>)
                }
                <div onClick={handleClick}>
                    <a ref={ref} href="/#formAnchor">
                        <p>Contact</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavigationMenu;