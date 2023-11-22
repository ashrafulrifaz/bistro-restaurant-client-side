import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const UpdateItem = () => {
    const item = useLoaderData()
    const {name, recipe, category, price, _id} = item
    const { register, handleSubmit } = useForm()
    const [isLoadingPost, setIsLoadingPost] = useState(false);
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        setIsLoadingPost(true)
        const newItem = {
            name: data.name,
            recipe: data.details,
            category: data.category,
            price: parseFloat(data.price)
        }

        const menuRes = await axiosSecure.put(`/menu/${_id}`, newItem)
        if(menuRes.data.modifiedCount){
            setIsLoadingPost(false)
            Swal.fire({
                position: "top-end",
                title: `${name} updated successfully`,
                imageUrl: "https://i.ibb.co/P96LKHm/right-decision.gif",
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: "failed",
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            setIsLoadingPost(false)
            Swal.fire({
                position: "top-end",
                title: `everything is up to date`,
                imageUrl: "https://i.ibb.co/P96LKHm/right-decision.gif",
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: "failed",
                showConfirmButton: false,
                timer: 1500
              });
        }
    };

    return (
        <div className="py-6 px-20 bg-white min-h-screen">
            <h2 className="text-2xl uppercase text-center">update item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 p-10 bg-[#F3F3F3] space-y-3">
                <div className="space-y-2">
                    <label htmlFor="">Recipe name*</label>
                    <input defaultValue={name} {...register("name", { required: true })} type="text" className="w-full bg-white py-2.5 px-5 focus:outline-none" placeholder="Recipe name" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="">Category*</label>
                        <div className="w-full bg-white">
                            <select defaultValue={category} {...register("category", { required: true })} className="focus:outline-none w-full py-2.5 px-5">
                                <option value="Category" disabled>Category</option>
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
                        <input defaultValue={price} {...register("price", { required: true })} type="text" className="w-full bg-white py-2.5 px-5 focus:outline-none" placeholder="Price" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="">Recipe details*</label>
                    <textarea defaultValue={recipe} {...register("details", { required: true })} rows={6} type="text" className="w-full bg-white py-2.5 px-5 focus:outline-none" placeholder="Recipe details" />
                </div>
                <div className="flex justify-center">
                    <button className="capitalize text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 font-semibold text-sm flex items-center">
                        <span>update recipe details</span>
                        {
                            isLoadingPost && <span className="loading loading-dots loading-xs ml-2"></span>
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;