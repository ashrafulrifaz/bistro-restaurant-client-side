import { Link } from "react-router-dom";

const RecommendCard = ({item}) => {
    const {name, image, recipe} = item

    return (
        <div>
            <img src={image} alt="food" className="w-full h-[300px]" />
            <div className="p-5 bg-[#E8E8E8]">
                <h2 className="text-[#151515] font-semibold text-lg">{name}</h2>
                <p>{recipe}</p>
                <Link to="/menu">
                    <button className='text-sm mt-2 text-[#BB8506] py-2 px-5 rounded-md border-2 border-b-[#BB8506] hover:bg-black hover:scale-95 hover:border-black transition-all uppercase font-medium'>add to cart</button>
                </Link>
            </div>
        </div>
    );
};

export default RecommendCard;