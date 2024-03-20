import dog from "../../../assets/Images/adoption_shop_thumb01.webp"

const DonationCampaignDetails = () => {
    return (
        <div className="min-h-[100vh]">
            <div className='flex gap-20 items-center justify-around p-20 bg-[#f1f1f1]'>
                <div className='flex-1'>
                    <img className="w-[100%] h-[60vh]" src={dog} alt="" />
                </div>

                <div className="flex-1">
                    <h1 className='text-gray-800 text-5xl font-bold'>Cat the Boss</h1>
                   
                    <div className="mt-8 space-y-5">
                        <p className=' text-black text-[15px] font-medium'>Age: </p>
                        <p className=' text-black text-[15px] font-medium'>Category: </p>
                        <p className=' text-black text-[15px] font-medium'>Location: </p>
                        <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae illo ex nulla mollitia quod suscipit cum assumenda! Vitae, ad.</p>
                        <p className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur minus, non a beatae esse deserunt earum ipsam, et tempora qui molestiae sapiente totam reprehenderit iure nemo deleniti! Ex, labore.</p>

                        
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DonationCampaignDetails;