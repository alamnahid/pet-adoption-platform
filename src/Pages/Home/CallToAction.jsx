import { Link } from "react-router-dom";
import dogfootprint from "../../assets/Logo/Dog print.png"

const CallToAction = () => {
    return (
        <div className="my-40 h-[60vh] calltoaction flex flex-col justify-center pl-[10%]">
            <h1 data-aos="fade-left" data-aos-duration="2000" className="text-6xl text-white font-semibold dosis">Give a Home, Gain a Friend</h1>
            <p data-aos="fade-up" data-aos-duration="3000" className="text-gray-400 w-[50vw] mt-8">Ready to make a difference? Adopt a furry companion today and experience the unconditional love and joy they bring to your life.</p>
            <p data-aos="fade-up" data-aos-duration="3000" className="text-gray-400 w-[50vw]">Every pet deserves a chance at a loving home. By adopting, you are not just saving a life, you are gaining a loyal friend who will fill your days with laughter and love.</p>
            <Link to='/petlisting'><button className="btn btn-outline mt-10 w-fit bg-[#ADA7FF] border-none text-white font-medium rounded-[25px] px-8 text-lg">Find Your Perfect Companion <img src={dogfootprint} alt="dogfootprint" /></button></Link>
            
        </div>
    );
};

export default CallToAction;