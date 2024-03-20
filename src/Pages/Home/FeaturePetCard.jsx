import { Link } from "react-router-dom";
import footprint from "../../assets/Logo/Dog print.png"

const FeaturePetCard = ({pet}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div className="w-[20rem] border-2 rounded-xl p-8 border-[#ada7ff5d]">
                <div className="w-[12rem] mx-auto h-[12rem] rounded-[50%] bg-[#f4f1e9]">
                <img className="w-[12rem] h-[12rem] rounded-[50%]" src={pet?.image} alt="" />
                </div>
                <h3 className="text-3xl font-bold text-gray-700 text-center mt-5">{pet?.petName}</h3>
                <p className="text-lg text-center mt-4"><span className="font-medium">Age:</span> {pet?.petAge} Year</p>
                <p className="text-lg text-center"><span className="font-medium">Location:</span> {pet?.petLocation}</p>

                <div className="text-center mt-4">
                    <Link to={`/petlistingdetsils/${pet?._id}`}><button className="btn btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-8 text-lg">View Details <img src={footprint} alt="" /></button></Link>
                </div>

            </div>

        </div>
    );
};

export default FeaturePetCard;