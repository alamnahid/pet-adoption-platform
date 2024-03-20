import { Link } from "react-router-dom";
import bannerimage from "../../assets/Images/Group 7.png"
import dogfootprint from "../../assets/Logo/Dog print.png"
import steps from "../../assets/Logo/icons8-pet-50.png"

const Banner = () => {
    return (
        <div className="flex justify-between items-center px-[10%] h-[90vh] home-banner">
            <div className="">
                <h1 className="text-[#302B3A] font-extrabold text-6xl dosis">Looking for a <span className="text-[#ADA7FF]">good</span> time?</h1>
                <p className="text-[#404040] mt-8 w-[40vw]">Welcome to Pet Donation Platform, where compassion meets action! Every pet deserves love, care, and a place to call home. Join us in our mission to support shelters, rescue organizations, and furry friends in need.</p>

                <div className="mt-8 space-y-4">
                    <p className="flex gap-3 items-center text-lg text-gray-500"><img className="w-[35px]" src={steps} alt="steps" />Browse through heartwarming stories of rescued pets.</p>
                    <p className="flex gap-3 items-center text-lg text-gray-500"><img className="w-[35px]" src={steps} alt="steps" />Discover local shelters and their urgent needs.</p>
                    <p className="flex gap-3 items-center text-lg text-gray-500"><img className="w-[35px]" src={steps} alt="steps" />Become a part of their journey to a loving family.</p>
                </div>
                
                <div>
                   <Link to='/dashboard/add-a-pet'> <button className="btn btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-8 text-lg mt-8">Adopt Now <img src={dogfootprint} alt="dog foot print" /></button></Link>
                </div>

            </div>


            <div>
                <img src={bannerimage} alt="banner background image" />
            </div>

        </div>
    );
};

export default Banner;