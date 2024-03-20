import dogicon from "../../assets/Images/icons8-dog-80.png"
import caticon from "../../assets/Images/cat.png"
import parroticon from "../../assets/Images/parrot.png"
import rabbiticon from "../../assets/Images/rabbit.png"
import fishicon from "../../assets/Images/Fish.png"
import birdicon from "../../assets/Images/Bird.png"
const Categories = () => {
    return (
        <div className="mx-[10%]">
            <div>
                <h1 className="text-4xl font-medium text-gray-600 text-center">Pet Categories</h1>
                <hr className="w-32 mx-auto mt-4" />
            </div>
            
            <div className="grid grid-cols-6 gap-5 justify-items-center items-centr">
            <div className="bg-white shadow-md rounded-2xl w-fit h-fit px-20 py-4 hover:bg-[#ADA7FF] cursor-pointer text-gray-600 hover:text-white mt-16">
                <img className="mx-auto" src={dogicon} alt="dog icon" />
                <h3 className="text-2xl font-bold mt-2 text-center">Dog</h3>

            </div>

            <div className="bg-white shadow-md rounded-2xl w-fit h-fit px-20 py-4 hover:bg-[#ADA7FF] cursor-pointer text-gray-600 hover:text-white mt-16">
                <img className="mx-auto" src={caticon} alt="dog icon" />
                <h3 className="text-2xl font-bold mt-2 text-center">Cat</h3>

            </div>


            <div className="bg-white shadow-md rounded-2xl w-fit h-fit px-20 py-4 hover:bg-[#ADA7FF] cursor-pointer text-gray-600 hover:text-white mt-16">
                <img className="mx-auto" src={parroticon} alt="dog icon" />
                <h3 className="text-2xl font-bold mt-2 text-center">Parrot</h3>

            </div>


            <div className="bg-white shadow-md rounded-2xl w-fit h-fit px-20 py-4 hover:bg-[#ADA7FF] cursor-pointer text-gray-600 hover:text-white mt-16">
                <img className="mx-auto" src={rabbiticon} alt="dog icon" />
                <h3 className="text-2xl font-bold mt-2 text-center">Rabbit</h3>

            </div>


            <div className="bg-white shadow-md rounded-2xl w-fit h-fit px-20 py-4 hover:bg-[#ADA7FF] cursor-pointer text-gray-600 hover:text-white mt-16">
                <img className="mx-auto" src={fishicon} alt="dog icon" />
                <h3 className="text-2xl font-bold mt-2 text-center">Fish</h3>

            </div>
            <div className="bg-white shadow-md rounded-2xl w-fit h-fit px-20 py-4 hover:bg-[#ADA7FF] cursor-pointer text-gray-600 hover:text-white mt-16">
                <img className="mx-auto" src={birdicon} alt="dog icon" />
                <h3 className="text-2xl font-bold mt-2 text-center">Bird</h3>

            </div>


           
            
            </div>

        </div>
    );
};

export default Categories;