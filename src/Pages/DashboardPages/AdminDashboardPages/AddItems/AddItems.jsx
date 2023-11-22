import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [isLoadingPost, setIsLoadingPost] = useState(false);

    const onSubmit = async (data) => {
        setIsLoadingPost(true)
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_url, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        if(res.data.success){
            const newItem = {
                name: data.name,
                recipe: data.details,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }

            const menuRes = await axiosSecure.post('/menu', newItem)
            if(menuRes.data.insertedId){
                setIsLoadingPost(false)
                reset()
                Swal.fire({
                    position: "top-end",
                    title: "new item added successfully",
                    imageUrl: "https://i.ibb.co/P96LKHm/right-decision.gif",
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: "failed",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    };


    return (
        <div className="py-6 px-20 bg-white min-h-screen">
            <div className="text-center">
                <h3 className="text-[#D99904] italic">---What{"'"}s New---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">add an item</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 p-10 bg-[#F3F3F3] space-y-3">
                <div className="space-y-2">
                    <label htmlFor="">Recipe name*</label>
                    <input {...register("name", { required: true })} type="text" className="w-full bg-white py-2.5 px-5 focus:outline-none" placeholder="Recipe name" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="">Category*</label>
                        <div className="w-full bg-white">
                            <select {...register("category", { required: true })} className="focus:outline-none w-full py-2.5 px-5">
                                <option value="Category" disabled selected>Category</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="">Price*</label>
                        <input {...register("price", { required: true })} type="text" className="w-full bg-white py-2.5 px-5 focus:outline-none" placeholder="Price" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="">Recipe details*</label>
                    <textarea {...register("details", { required: true })} rows={6} type="text" className="w-full bg-white py-2.5 px-5 focus:outline-none" placeholder="Recipe details" />
                </div>
                <div>
                    <input {...register("image", { required: true })} type="file"/>
                </div>
                <button className="capitalize text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 font-semibold text-sm flex items-center">
                    <span>add items</span>
                    {
                        isLoadingPost ? 
                        <span className="loading loading-dots loading-xs ml-2"></span>
                        :
                        <FontAwesomeIcon icon={faUtensils} className="ml-1"/>
                    }
                </button>
            </form>
        </div>
    );
};

export default AddItems;