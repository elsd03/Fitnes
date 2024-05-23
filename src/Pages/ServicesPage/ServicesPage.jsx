import "./ServicesPage.css";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import PlansComponent from "../../Components/PlansComponent/PlansComponent";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import ServicesItem from "./ServicesItem";

const servicesItem = [
    {
        type: "Strength",
        description: "Strength training may enhance your quality of life.",
        days: "Mon, Wed, Thu, Fri",
        duration: "2hr",
        price: "20$"
    },
    {
        type: "Hiit",
        description: "Hiit may provide the same health benefits as regular exercise.",
        days: "Mon, Wed, Thu",
        duration: "1hr",
        price: "20$"
    },
    {
        type: "Yoga",
        description: "Yoga improves strength, balance and flexibility.",
        days: "Mon, Thu, Fri",
        duration: "1hr",
        price: "30$"
    },
    {
        type: "Meditation",
        description: "Meditation is a simple, fast way to reduce stress.",
        days: "Mon, Wed, Thu",
        duration: "1hr",
        price: "30$"
    },
    {
        type: "Cardio",
        description: "Cardio exercise is activity that increases your heart rate.",
        days: "Mon, Wed, Thu, Fri",
        duration: "45min",
        price: "20$"
    },
    {
        type: "Online Strength",
        description: "Join Strength online classes.",
        days: "",
        duration: "",
        price: "15$"
    },
    {
        type: "Online Hiit",
        description: "Join Hiit online classes.",
        days: "Mon, Wed, Thu, Fri",
        duration: "1hr",
        price: "20$"
    },
    {
        type: "Online Yoga",
        description: "Join Yoga online classes.",
        days: "Mon, Thu, Fri",
        duration: "1hr",
        price: "10$"
    },
    {
        type: "Online Meditation",
        description: "Join Meditation online classes.",
        days: "Mon, Thu, Fri",
        duration: "3hr",
        price: "30$"
    },
    {
        type: "Online Cardio",
        description: "Join Cardio online classes.",
        days: "Mon, Fri",
        duration: "45min",
        price: "10$",
        borderBottom: true,
    }
];

const ServicesPage = () => {

    const location = useLocation();

    useEffect(() => {

        if (location.hash === "#servicesAnchor") {
            const element = document.getElementById("servicesAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }

    }, [location]);
    return (
        <div className="services-wrapper" id="servicesAnchor">
            <FixedMenu/>
            <NavigationMenu/>
            <div className="services-main-content">
                <div className="services-main-text-container">
                    <div className="text-container-block">
                        <b>CHECK OUT <br/>
                            ALL<i> Services</i></b>
                        <p>I'm a paragraph. Click here to add <br/>
                            your own text and edit me. Let your <br/>
                            users get to know you
                        </p>
                    </div>
                </div>
                <b>Classes</b>
                <div className="services-classes-container">
                    {servicesItem.map((item, i) => {
                        return <ServicesItem
                            key={`${i}${item.description}`}
                            {...item}
                        />
                    })
                    }
                </div>
                <PlansComponent/>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default ServicesPage;