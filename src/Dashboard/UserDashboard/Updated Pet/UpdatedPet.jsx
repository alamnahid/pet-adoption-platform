import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdatedPet = () => {
    const { id } = useParams();
    const navigate = useNavigate()
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
    const findData = data?.find(pet => pet?._id === id);
    console.log(findData)



    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const updateData = {

            petName: data.name,
            petAge: data.age,
            petLocation: data.location,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
        }

        const updateRes = await axiosPublic.patch(`/addapet/${id}`, updateData);
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
            navigate('/dashboard/my-added-pet')
        }

    }
    return (
        <div className=" mt-20 ml-40">
            <div className="w-[90vw] lg:w-[70vw] mx-auto">
                <h1 className="text-gray-700 text-center text-[2.5rem] font-semibold">Update A Pet</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Pet Name</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Pet Name" {...register("name", { required: true })} defaultValue={findData?.petName} />
                    {errors.name && <span>This field is required</span>}

                    {/* age input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Pet Age</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="number" name="age" id="" placeholder="Pet Age" {...register("age", { required: true })} defaultValue={findData?.petAge} />


                    {/* location input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Location</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="location" id="" placeholder="Enter Location" {...register("location", { required: true })} defaultValue={findData?.petLocation} />


                    {/* shortDescription input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Short Description</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="shortDescription" id="" placeholder="Enter Short Description" {...register("shortDescription", { required: true })} defaultValue={findData?.shortDescription} />
                    {errors.shortDescription && <span>This field is required</span>}

                    {/* shortDescription input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Long Description</p>

                    <input className="w-full mt-2 h-[6.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="longDescription" id="" placeholder="Enter Long Description" {...register("longDescription", { required: true })} defaultValue={findData?.longDescription} />
                    {errors.longDescription && <span>This field is required</span>}

                    <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#ADA7FF] text-white text-xl font-bold" type="submit" id="" value="Update Pet" />



                </form>


            </div>

        </div>
    );
};

export default UpdatedPet;