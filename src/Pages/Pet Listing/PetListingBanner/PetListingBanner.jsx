

const PetListingBanner = ({setsearchPetName, setPetCategories}) => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        setsearchPetName(e.target.search.value)
    }
    return (
        <div>
            <div className="petlistingbanner">


                <div>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">

                        <div className="mt-5 text-center mx-auto">
                            <h1 className="block font-semibold text-gray-800 text-3xl">
                                Meet Your Future Companion: Discover <span className="text-[#ADA7FF]">Unadopted Pets Waiting</span> for Love

                            </h1>
                        </div>

                        <div className="mt-5">
                        <form onSubmit={handleSubmit}>
                        <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg  dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2] max-w-[30vw] mx-auto mt-8">
                            <div className="flex-[1_0_0%]">
                                <label className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search article</span></label>
                                <input type="search" name="search" id="hs-search-article-1" className="p-3 block  w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400" placeholder="Enter full food name to search" />
                            </div>
                            <div className="flex-[0_0_auto]">
                                <button type="submit" className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>


                            <div className="mx-auto w-[24rem] mt-4 text-center border-2">


                                {/* onChange={(e) => setFoodExpireDate(e.target.value)} */}

                                <select onChange={(e) => setPetCategories(e.target.value)} className="py-3 px-4 block w-full border-none focus:border-none text-sm">
                                    <option disabled selected>Open this select Categories</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="parrot">Parrot</option>
                                    <option value="rabbit">Rabbit</option>
                                    <option value="fish">Fish</option>
                                    <option value="bird">Bird</option>

                                </select>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default PetListingBanner;