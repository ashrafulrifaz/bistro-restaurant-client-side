
const TabContentCard = ({item}) => {
    const {name, image, recipe} = item

    return (
        <div className="text-center">
            <img src={image} alt="food" />
            <div className="p-5 bg-[#F3F3F3]">
                <h2 className="text-xl font-medium">{name}</h2>
                <p className="text-left">{recipe}</p>
                <button className='text-sm mt-2 py-2 px-5 rounded-md border-b-2 hover:scale-95 transition-all uppercase font-medium bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] hover:bg-[#151515]'>add to cart</button>
            </div>
        </div>
    );
};

export default TabContentCard;