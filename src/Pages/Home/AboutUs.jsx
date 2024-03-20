import aboutbg from "../../assets/Images/about-us-bg.jpg"
import bone from "../../assets/Images/bone.png"

const AboutUs = () => {
    return (
        <div className="flex justify-between items-center mx-[10%] gap-20 my-20">
            <div className="hover:shadow-xl hover:shadow-[#ADA7FF] hover:rounded-3xl ">
                <img className=" hover:rounded-3xl" src={aboutbg} alt="dog background image" />
            </div>

            <div>
                <h5 className="flex items-center text-[#ADA7FF] font-medium gap-3 text-lg"><hr className="w-12" /> About Us</h5>

                <h1 className="text-5xl text-gray-700 my-12 font-semibold dosis">Bringing Hope to Furry Friends</h1>

                <p className="text-gray-500 w-[45vw]">At Pet Adaption Platform, we connect caring individuals like you with pets in need of a second chance. Through our platform, we make it easy to donate, adopt, and support shelters and rescue organizations dedicated to the well-being of our furry companions.</p>

                <div className="mt-8 space-y-4">
                    <p className="flex gap-2 items-center text-lg text-gray-400"><img className="w-[35px]" src={bone} alt="steps" />Explore our gallery of adorable pets waiting for their forever homes.</p>
                    <p className="flex gap-2 items-center text-lg text-gray-400"><img className="w-[35px]" src={bone} alt="steps" />Every contribution makes a direct impact on their lives.</p>
                    <p className="flex gap-2 items-center text-lg text-gray-400"><img className="w-[35px]" src={bone} alt="steps" />Find your perfect companion and make a lifelong connection.</p>
                    <p className="flex gap-2 items-center text-lg text-gray-400"><img className="w-[35px]" src={bone} alt="steps" />Spread the word about our platform and the importance of pet adoption.</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default AboutUs;