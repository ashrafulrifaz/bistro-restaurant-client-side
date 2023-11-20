import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../../../Hooks/UseCart";
import useUserData from "../../../Hooks/useUserData";


const TabContentCard = ({item}) => {
    const {name, image, recipe, price, category} = item
    const user = useUserData()    
    const [, , refetch] = useCart()
    
    const handleAddToCart = () => {
        if(user){
            const cartDetails = {
                email: user?.email, name, image, price, category
            }
            axios.post('http://localhost:5000/cart', cartDetails)
                .then(res => {
                    if(res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            title: "Added to cart",
                            imageUrl: "https://i.ibb.co/P96LKHm/right-decision.gif",
                            imageWidth: 100,
                            imageHeight: 100,
                            imageAlt: "failed",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch()
                    }
                })
            
        } else {
            Swal.fire({
                position: "top-end",
                title: "Please, login to add cart",
                imageUrl: "https://i.ibb.co/yQpFFWG/login.gif",
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: "failed",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }

    return (
        <div className="text-center">
            <img src={image} alt="food" />
            <div className="p-5 bg-[#F3F3F3]">
                <h2 className="text-xl font-medium">{name}</h2>
                <p className="text-left">{recipe}</p>
                <button onClick={handleAddToCart} className='text-sm mt-2 py-2 px-5 rounded-md border-b-2 hover:scale-95 transition-all uppercase font-medium bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] hover:bg-[#151515]'>add to cart</button>
            </div>
        </div>
    );
};

export default TabContentCard;