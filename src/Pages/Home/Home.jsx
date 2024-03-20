import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Categories from "./Categories";
import Faq from "./Faq";
import HowWork from "./HowWork";
import FeaturePets from "./FeaturePets";


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Banner/>
            <Categories/>
            <FeaturePets/>
            <CallToAction/>
            <AboutUs/>
            <HowWork/>
            <Faq/>
            
        </div>
    );
};

export default Home;