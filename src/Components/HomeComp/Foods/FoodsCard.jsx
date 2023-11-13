
const FoodsCard = ({item}) => {
    const {name, image} = item

    return (
        <div className="relative">
            <img src={image} className="w-full h-[350px]" alt="food" />
            <h1 className="absolute bottom-7 text-center w-full text-white text-2xl font-main">{name}</h1>            
        </div>
    );
};

export default FoodsCard;