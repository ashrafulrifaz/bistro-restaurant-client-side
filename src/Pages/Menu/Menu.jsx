import SharedBanner from "../../Components/SharedComponents/SharedBanner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import MenuCard from "../../Components/HomeComp/Menu/MenuCard";
import { Link } from "react-router-dom";

// images
import bgImage from '../../../assets/menu/banner3.jpg'
import desertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import useUserData from "../../Hooks/useUserData";

const Menu = () => {
    const {menuItem} = useContext(AuthContext)
    const user = useUserData()
    console.log(user);

    // category items
    const dessertItem = menuItem.filter(item => item.category === 'dessert')
    const pizzaItem = menuItem.filter(item => item.category === 'pizza')
    const saladItem = menuItem.filter(item => item.category === 'salad')
    const soupItem = menuItem.filter(item => item.category === 'soup')

    return (
        <div>
            <SharedBanner bgImage={bgImage} title="our menu" description="Would you like to try a dish?"></SharedBanner>
            <div className="text-center py-10">
                <h3 className="text-[#D99904] italic">---Don{"'"}t miss---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">Today{"'"}s offer</h2>
                </div>
            </div> 
            <div className=" max-w-[1000px] mx-auto pb-10">
                <div className="grid grid-cols-2 gap-5">
                    {
                        menuItem && menuItem.map((menu, idx) => <MenuCard key={idx} menu={menu}></MenuCard>).slice(0, 4)
                    }
                </div>
                <div className="text-center">
                    <Link to={`/shop`}>
                        <button className='py-1.5 px-5 mt-5 rounded-md border-b-2 border-black hover:scale-95 transition-all uppercase'>order your favourite food</button>
                    </Link>
                </div>
            </div>

            {/* dessert items */}
            <SharedBanner bgImage={desertImage} title="dessert" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></SharedBanner>    
            <div className=" max-w-[1000px] mx-auto py-16">
                <div className="grid grid-cols-2 gap-5">
                    {
                        dessertItem && dessertItem.map((menu, idx) => <MenuCard key={idx} menu={menu}></MenuCard>).slice(0, 4)
                    }
                </div>
                <div className="text-center">
                    <Link to='/shop/dessert'>
                        <button className='py-1.5 px-5 mt-5 rounded-md border-b-2 border-black hover:scale-95 transition-all uppercase'>order your favourite food</button>
                    </Link>
                </div>
            </div>      

            {/* pizza items */}
            <SharedBanner bgImage={pizzaImage} title="pizza" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></SharedBanner>    
            <div className=" max-w-[1000px] mx-auto py-16">
                <div className="grid grid-cols-2 gap-5">
                    {
                        pizzaItem && pizzaItem.map((menu, idx) => <MenuCard key={idx} menu={menu}></MenuCard>).slice(0, 4)
                    }
                </div>
                <div className="text-center">
                    <Link to='/shop/pizza'>
                        <button className='py-1.5 px-5 mt-5 rounded-md border-b-2 border-black hover:scale-95 transition-all uppercase'>order your favourite food</button>
                    </Link>
                </div>
            </div>   

            {/* salad items */}
            <SharedBanner bgImage={saladImage} title="salad" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></SharedBanner>    
            <div className=" max-w-[1000px] mx-auto py-16">
                <div className="grid grid-cols-2 gap-5">
                    {
                        saladItem && saladItem.map((menu, idx) => <MenuCard key={idx} menu={menu}></MenuCard>).slice(0, 4)
                    }
                </div>
                <div className="text-center">
                    <Link to='/shop/salad'>
                        <button className='py-1.5 px-5 mt-5 rounded-md border-b-2 border-black hover:scale-95 transition-all uppercase'>order your favourite food</button>
                    </Link>
                </div>
            </div>     

            {/* soup items */}
            <SharedBanner bgImage={soupImage} title="soup" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></SharedBanner>    
            <div className=" max-w-[1000px] mx-auto py-16">
                <div className="grid grid-cols-2 gap-5">
                    {
                        soupItem && soupItem.map((menu, idx) => <MenuCard key={idx} menu={menu}></MenuCard>).slice(0, 4)
                    }
                </div>
                <div className="text-center">
                    <Link to='/shop/soup'>
                        <button className='py-1.5 px-5 mt-5 rounded-md border-b-2 border-black hover:scale-95 transition-all uppercase'>order your favourite food</button>
                    </Link>
                </div>
            </div>     
        </div>
    );
};

export default Menu;