import img1 from "../../assets/Images/work_1.png"
import img2 from "../../assets/Images/work_2.png"
import img3 from "../../assets/Images/work_3.png"

const HowWork = () => {
    return (
        <div className="mx-[15%]">
            <div className="text-center mt-40">
                <h5 className="flex items-center text-[#ADA7FF] font-medium gap-3 text-lg mx-auto justify-center"><hr className="w-12" /> How We Work</h5>
                <h1 className="text-5xl text-gray-700 my-12 font-semibold dosis">Pet Adoption Process</h1>
            </div>

            <div className="flex justify-between items-center gap-20">
                <div data-aos="fade-up" data-aos-duration="3000" className="w-[22rem] hover:text-[#ADA7FF]">
                    <img className="mx-auto" src={img1} alt="find your pet" />
                    <h3 className="text-2xl font-bold text-center">Find Your Pet</h3>
                    <p className="mt-4 text-gray-500">Explore our gallery of adorable companions, each with their own story waiting to unfold. From playful pups to affectionate kittens, discover the perfect furry friend to bring love and joy into your home.
                    </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="3500" className="w-[22rem] hover:text-[#ADA7FF]">
                    <img className="mx-auto" src={img2} alt="find your pet" />
                    <h3 className="text-2xl font-bold text-center">Know your pet</h3>
                    <p className="mt-4 text-gray-500">Dive deeper into your potential companion's world. Learn about their personality, preferences, and what makes them unique. Understanding your pet is the first step to a lifelong bond.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="4000" className="w-[22rem] hover:text-[#ADA7FF]">
                    <img className="mx-auto" src={img3} alt="find your pet" />
                    <h3 className="text-2xl font-bold text-center">Take your pet home</h3>
                    <p className="mt-4 text-gray-500">Ready to make it official? Complete the adoption process, meet your chosen pet, and embark on a journey of love and companionship. Your new family member is waiting to be welcomed home!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HowWork;