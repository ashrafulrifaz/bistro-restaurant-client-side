
const MenuCard = ({menu}) => {
    const {name, image, recipe, price} = menu

    return (
        <div className="flex items-center">
            <div className="w-[33%]">
                <img src={image} alt="food" className="w-24 h-24 rounded-full rounded-tl-none" />
            </div>
            <div className="flex justify-between w-full">
                <div>
                    <h3 className="text-lg font-main">{name}------------------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-[#BB8506]">{price}</p>
            </div>
        </div>
    );
};

export default MenuCard;