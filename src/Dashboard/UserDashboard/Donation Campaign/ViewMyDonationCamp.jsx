import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ViewMyDonationCamp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const axiosPublic = useAxiosPublic();

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(0)

    const { user } = useContext(AuthContext);
    const { refetch, data } = useQuery({
        queryKey: ['pets', user?.email, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/adddonationcamp/v1?email=${user.email}&page=${currentPage}&size=${itemsPerPage}`);
            return res.data;
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get(`/addapet/email?email=${user.email}`);
                setCount(res.data.totalCount);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        refetch()
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
        refetch()
    }


    
    const adoptedstatus = 'true'
    const handleAdopted = async (id) => {
        const updateData = {
            adopted: adoptedstatus,
        }

        const updateRes = await axiosPublic.patch(`/addapet/status/${id}`, updateData);
        console.log(updateRes.data)
        if (updateRes.data.modifiedCount > 0) {
            //
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pet Information Updated",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        }
    }
    // console.log(pets[0].petName)
    return (
        <div className="pt-8">
            <div className=" rounded-tl-2xl rounded-tr-2xl mt-8 ml-[22rem] mr-20">
                <table className="table  rounded-tl-2xl rounded-tr-2xl">
                    {/* head */}
                    <thead className="bg-[#ADA7FF] text-xl h-[2rem] rounded-tl-2xl rounded-tr-2xl">
                        <tr>
                            <th className="text-white font-semibold"></th>

                            <th className="text-white font-semibold">Pet Name</th>
                            <th className="text-white font-semibold">Max Amount</th>
                            <th className="text-white font-semibold">Progress Bar</th>
                            <th className="text-white font-semibold">Edit</th>
                            <th className="text-white font-semibold">Pause Donation</th>
                            <th className="text-white font-semibold">View Donators</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            data?.map((pet, index) => <tr key={index}>
                                <th>{index + 1}</th>

                                <td>{pet?.petName}</td>
                                <td>{pet?.amount}</td>
                                <td>Progress</td>
                                <td>

                                    <Link to={`/dashboard/update-pet/${pet?._id}`}><button className="btn btn-sm btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-3 text-sm">Edit</button></Link>
                                </td>
                                
                                <td><button onClick={() => handleAdopted(pet?._id)} className="btn btn-sm btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-3 text-sm">Pause</button></td>
                                <td><button onClick={() => handleAdopted(pet?._id)} className="btn btn-sm btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-3 text-sm">View Donators</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className="mt-32 absolute left-[45%]">
                <div className='text-center mb-10 space-x-4 md:space-x-6 mt-20'>

                    <button className="btn  btn-outline border-[#ADA7FF] border-4 md:w-[7rem] md:text-lg" onClick={handlePrevPage}>Prev</button>
                    {
                        pages.map(page => <button
                            className={currentPage === page ? 'btn bg-[#ADA7FF] text-xl font-bold text-white' : 'btn btn-outline border-[#ADA7FF] border-4 text-xl'}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button className="btn btn-outline border-[#ADA7FF] border-4 md:w-[7rem] md:text-lg" onClick={handleNextPage}>Next</button>
                    <select className="btn bg-[#ADA7FF] text-xl text-white" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ViewMyDonationCamp;