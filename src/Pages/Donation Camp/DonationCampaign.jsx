import DonationCampaignCard from "./Donation Campaign Card/DonationCampaignCard";


const DonationCampaign = () => {
    return (
        <div className="min-h-screen">

            <div className="grid grid-cols-3 justify-items-center items-center mx-[10%] mt-32 gap-32">
                <DonationCampaignCard />
                <DonationCampaignCard />
                <DonationCampaignCard />
                <DonationCampaignCard />
                <DonationCampaignCard />
                <DonationCampaignCard />
                <DonationCampaignCard />

            </div>
        </div>
    );
};

export default DonationCampaign;