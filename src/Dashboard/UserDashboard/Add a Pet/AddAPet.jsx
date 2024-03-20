import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Select from 'react-select';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddAPet = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { user } = useContext(AuthContext);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    const options = [
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'parrot', label: 'Parrot' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'fish', label: 'Fish' },
        { value: 'bird', label: 'Bird' },
      
      ];
      

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationKey: ['pets'],
        mutationFn: (addingData) => {
            return axios.post('http://localhost:5000/addapet', addingData, { withCredentials: true, })
        },
        onSuccess: () => {
            Swal.fire({
                title: "Successfully added",
                icon: "success",
                confirmButtonColor: "#ADA7FF",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/dashboard/add-a-pet')
                }
            });
        }

    })

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {

            mutate({
                email: user.email,
                petName: data.name,
                petAge: data.age,
                petCategory: selectedOption?.value,
                petLocation: data.location,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                image: res.data.data.display_url,
                dateTime: formattedDate,
                adopted: 'false'


            })
        }


    }
    return (
        <div className=" mt-20 ml-40">
            <div className="w-[90vw] lg:w-[70vw] mx-auto">
                <h1 className="text-gray-700 text-center text-[2.5rem] font-semibold">Add A Pet</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Pet Name</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Pet Name" {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}

                    {/* age input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Pet Age</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="number" name="age" id="" placeholder="Pet Age" {...register("age", { required: true })} />


                    {/* petCategory input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Pet Category</p>

                    <div className="w-full mt-2 h-[3.5rem]">
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={options}
                        />
                    </div>

                    {/* location input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Location</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="location" id="" placeholder="Enter Location" {...register("location", { required: true })} />


                    {/* shortDescription input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Short Description</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="shortDescription" id="" placeholder="Enter Short Description" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span>This field is required</span>}

                    {/* shortDescription input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Long Description</p>

                    <input className="w-full mt-2 h-[6.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="longDescription" id="" placeholder="Enter Long Description" {...register("longDescription", { required: true })} />
                    {errors.longDescription && <span>This field is required</span>}

                    {/* Image input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Image</p>

                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent w-full max-w-xs mt-5" />
                    {errors.image && <span>This field is required</span>}

                    <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#ADA7FF] text-white text-xl font-bold" type="submit" id="" value="Add Pet" />



                </form>


            </div>

        </div>
    );
};

export default AddAPet;