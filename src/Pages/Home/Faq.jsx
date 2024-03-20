import faqimage from "../../assets/Images/TV-removebg-preview.png"

const Faq = () => {
    return (
        <div className="flex justify-around items-center mx-[10%] gap-20 my-40">
            <div className="flex-1">
                <img src={faqimage} alt="dog background image" />
            </div>

            <div className="flex-1 w-full space-y-4">

                <h1 className="text-4xl text-gray-700 my-12 font-semibold dosis">Your Questions Answered</h1>

                <div className="collapse collapse-arrow w-full">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What are the benefits of adopting a pet?
                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-500">Adopting a pet not only gives an animal a second chance at a loving home, but it also brings immense joy and companionship into your life. You'll be making a lifelong friend, experiencing unconditional love, and creating unforgettable memories with your new furry family member.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border-b-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I adopt if I live in a small apartment?
                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-500">Absolutely! Many of our pets, including small dogs and cats, thrive in apartment living. We work with you to match your lifestyle with the right pet, whether you have a cozy studio or a spacious home.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border-b-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I know if a pet is right for me and my family?
                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-500">Our pet profiles provide detailed information about each animal's temperament, energy level, and compatibility with children, other pets, and living spaces. Additionally, our staff is available to offer personalized guidance to ensure the perfect match.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border-b-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is included in the adoption fee?
                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-500">Our adoption fees cover a range of services, including spaying/neutering, vaccinations, microchipping, and initial veterinary exams. This ensures that your new pet is healthy, up-to-date on medical needs, and ready to start their new life with you.</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Faq;