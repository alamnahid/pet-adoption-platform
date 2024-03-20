import { Link } from "react-router-dom";
import dog from "../../../assets/Images/adoption_shop_thumb01.webp"
import footprint from "../../../assets/Logo/Dog print.png"

const DonationCampaignCard = () => {
    return (
        <div>
            <div className="w-[22rem]">
                <div className="relative">
                    <img className="w-[22rem] h-[22rem] rounded-[50%] hover:shadow-md hover:shadow-[#ADA7FF]" src={dog} alt="" />
                    <div className="absolute bottom-0 left-[4.5rem]">
                        <Link to='/donationcampdetails'><button className="btn btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-8 text-lg">View Details <img src={footprint} alt="" /></button></Link>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-700 text-center mt-5">Alex Jon</h3>
                <p className="text-lg text-center mt-4"><span className="font-medium">Maximum Donation Amount:</span> 10$</p>
                <p className="text-lg text-center"><span className="font-medium">Donated Amount:</span> $200</p>



            </div>
        </div>
    );
};

export default DonationCampaignCard;