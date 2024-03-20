import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const PetListingDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams()
    // console.log(id)
    const [singlePets, setSinglePets] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/addapet/v1/${id}`, { withCredentials: true })
            .then(data => setSinglePets(data.data))
    }, [id])
    console.log(singlePets)

    const { user } = useContext(AuthContext)
    console.log(user)
    
    const handleRequest = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const phoneNumber = e.target.phone.value;
        const address = e.target.address.value;
        const petId = id;
        const petName = singlePets?.petName;
        const adopted = singlePets.adopted;

        const requestPetInfo = {
            userName, userEmail, phoneNumber, address, petId, petName, adopted
        }

        console.log(requestPetInfo)

        fetch('http://localhost:5000/adoptionreq/v1', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestPetInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                form.reset();
                if (data.insertedId) {
                    navigate('/petlisting');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Adoption Request sent Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    
                }
            })


    }

    return (
        <div className="min-h-[100vh]">
            <div className='flex gap-20 items-center justify-around p-20 bg-[#f1f1f1]'>
                <div className='flex-1'>
                    <img className="w-[100%] h-[60vh]" src={singlePets?.image} alt="" />
                </div>

                <div className="flex-1">
                    <h1 className='text-gray-800 text-5xl font-bold'>{singlePets?.petName}</h1>

                    <div className="mt-8 space-y-5">
                        <p className=' text-black text-[15px] font-medium'>Age: {singlePets?.petAge} Years</p>
                        <p className=' text-black text-[15px] font-medium'>Category: {singlePets?.petCategory?.label}</p>
                        <p className=' text-black text-[15px] font-medium'>Location: {singlePets?.petLocation}</p>
                        <p className=' text-gray-600'>{singlePets?.shortDescription}</p>
                        <p className=' text-gray-700'>{singlePets?.longDescription}</p>

                        <div>
                            <button className="btn btn-outline mt-4 bg-[#ADA7FF] text-white font-medium rounded-[25px] px-20 text-lg" onClick={() => document.getElementById('my_modal_5').showModal()}>Adopt</button>

                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Enter Your Details!</h3>


                                    <form onSubmit={handleRequest}>
                                        <label className="input input-bordered flex items-center gap-2 mt-4">
                                            Name
                                            <input type="text" className="grow" placeholder="Enter Your name..." readOnly defaultValue={user?.displayName}/>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mt-4">
                                            Email
                                            <input type="email" className="grow" placeholder="Enter Email..." readOnly defaultValue={user?.email}/>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mt-4">
                                            Phone
                                            <input type="number" name="phone" className="grow" placeholder="Enter Contact Number..." />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mt-4">
                                            Address
                                            <input type="text" name="address" className="grow" placeholder="Enter Address..." />
                                        </label>

                                        <button type="submit" className="btn btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-8 text-lg mt-5">Submit</button>
                                    </form>

                                    
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn btn-outline border-[#ADA7FF] font-medium rounded-[25px] px-8 text-lg">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PetListingDetails;