
import { useEffect, useState } from "react";
import PetListingBanner from "./PetListingBanner/PetListingBanner";
import PetListingCard from "./PetLsitingCard/PetListingCard";
import { useQuery } from "@tanstack/react-query";


const PetListing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [petCategoris, setPetCategories] = useState('')
    const [searchPetName, setsearchPetName] = useState('')
    console.log(petCategoris)

    const getPets = async () => {
        let apiUrl = `http://localhost:5000/addapet/v1?petName=${searchPetName}`;
        if (petCategoris) {
            apiUrl += `&category=${petCategoris}`;
        }
        const res = await fetch(apiUrl, { credentials: 'include' });
        return res.json();
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['pets', searchPetName, petCategoris],
        queryFn: getPets,
    });
    console.log(data)
    const filterdData = data?.filter(pet=>pet?.adopted==='false');
    console.log(filterdData)
    if (isLoading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <div className="min-h-[100vh] mx-[10%]">
            <PetListingBanner setPetCategories={setPetCategories} setsearchPetName={setsearchPetName} />
            
            <div className="grid grid-cols-3 justify-items-center items-center gap-20 mt-20">
                {
                    filterdData?.map(pet => <PetListingCard key={pet?._id} pet={pet} />)
                }
            </div>


        </div>
    );
};

export default PetListing;