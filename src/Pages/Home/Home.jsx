import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Categories from "./Categories";
import Faq from "./Faq";
import HowWork from "./HowWork";
import FeaturePets from "./FeaturePets";
import Testomonials from "./Testomonials";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(()=>{
        AOS.init();
    }, [])
    return (
        <div>
            <Banner/>
            <Categories/>
            <FeaturePets/>
            <CallToAction/>
            <AboutUs/>
            <HowWork/>
            <Faq/>
            <Testomonials/>
            
        </div>
    );
};

export default Home;