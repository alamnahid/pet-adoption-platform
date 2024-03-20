import { Link } from "react-router-dom";
import dog from "../../../assets/Images/adoption_shop_thumb01.webp"
import footprint from "../../../assets/Logo/Dog print.png"
const PetListingCard = ({pet}) => {
    return (
        <div>
            <div className="w-[22rem]">
                <div className="w-[22rem] h-[22rem] rounded-[50%] bg-[#f4f1e9]">
                <img className="w-[22rem] h-[22rem] rounded-[50%] hover:shadow-md hover:shadow-[#ADA7FF]" src={pet?.image} alt="" />
                </div>
                <h3 className="text-3xl font-bold text-gray-700 text-center mt-5">{pet?.petName}</h3>
                <p className="text-lg text-center mt-4"><span className="font-medium">Age:</span> {pet?.petAge} Year</p>
                <p className="text-lg text-center"><span className="font-medium">Location:</span> {pet?.petLocation}</p>

                <div className="text-center mt-8">
                    <Link to={`/petlistingdetsils/${pet?._id}`}><button className="btn btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-8 text-lg">View Details <img src={footprint} alt="" /></button></Link>
                </div>

            </div>

        </div>
    );
};

export default PetListingCard;