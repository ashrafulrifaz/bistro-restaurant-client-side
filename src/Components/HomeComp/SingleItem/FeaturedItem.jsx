import { Link } from 'react-router-dom';
import bannerImg from '../../../../assets/home/featured.jpg'

const FeaturedItem = () => {
    const bannerbg = {
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${bannerImg}")`,
        backgroundSize: 'cover'
    }

    return (
        <div className="py-12" style={bannerbg}>
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center">
                    <h3 className="text-[#D99904] italic">---Check it out---</h3>
                    <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                        <h2 className="text-2xl uppercase text-white">From our menu</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10 items-center mt-5 text-white">
                    <img src={bannerImg} alt="" />
                    <div>
                        <h3>March 20, 2023</h3>
                        <h2 className='text-lg'>WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <Link to="/menu">
                            <button className='text-sm mt-2 py-2 px-5 rounded-md border-b-2 hover:scale-95 transition-all uppercase font-medium'>add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;