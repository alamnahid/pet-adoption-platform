import { useQuery } from '@tanstack/react-query';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PetListingCard from '../Pet Listing/PetLsitingCard/PetListingCard';
import FeaturePetCard from './FeaturePetCard';

const FeaturePets = () => {
    const getPets = async () => {
        let apiUrl = `http://localhost:5000/addapet/v1`;

        const res = await fetch(apiUrl, { credentials: 'include' });
        return res.json();
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['pets'],
        queryFn: getPets,
    });
    console.log(data)
    const filterdData = data?.filter(pet => pet?.adopted === 'false');
    console.log(filterdData)
    if (isLoading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='px-[10%] my-40 home-banner'>
            <div>
                <h1 className="text-4xl font-medium text-gray-600 text-center">Puppies Waiting for Adoption</h1>
                <p className='text-center text-gray-600 mt-5'>The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides <br /> you with a breed brwn and information Most dogs</p>
                <hr className="w-32 mx-auto mt-4" />
            </div>
            <Carousel 
            className='px-[10%] mt-20'
            responsive={responsive}
            swipeable={true}
            customTransition="all .5"
            transitionDuration={500}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            
            >
                {
                    filterdData?.map(pet => <div  key={pet?._id}><FeaturePetCard pet={pet} /></div>)
                }
                
            </Carousel>;

        </div>
    );
};

export default FeaturePets;