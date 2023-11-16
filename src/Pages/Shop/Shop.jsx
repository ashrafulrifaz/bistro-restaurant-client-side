import SharedBanner from "../../Components/SharedComponents/SharedBanner";
import shopBannerBg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../../Provider/Provider";
import { useContext } from "react";
import TabContent from "../../Components/SharedComponents/TabContent/TabContent";

const Shop = () => {
    const {menuItem} = useContext(AuthContext)
    const saladItem = menuItem.filter(item => item.category === 'salad')
    const pizzaItem = menuItem.filter(item => item.category === 'pizza')
    const soupItem = menuItem.filter(item => item.category === 'soup')
    const dessertItem = menuItem.filter(item => item.category === 'dessert')
    const drinksItem = menuItem.filter(item => item.category === 'drinks')

    return (
        <div>
            <SharedBanner bgImage={shopBannerBg} title={'Our Shop'} description={"Would you like to try a dish?"}></SharedBanner>
            <div className="max-w-[1000px] mx-auto py-16">
            <Tabs>
                <TabList className="flex justify-center gap-5">
                <Tab className="uppercase font-medium cursor-pointer border-b-2 transition-all border-white hover:border-[#BB8506] hover:text-[#BB8506] focus:outline-none">salad</Tab>
                <Tab className="uppercase font-medium cursor-pointer border-b-2 transition-all border-white hover:border-[#BB8506] hover:text-[#BB8506] focus:outline-none">pizza</Tab>
                <Tab className="uppercase font-medium cursor-pointer border-b-2 transition-all border-white hover:border-[#BB8506] hover:text-[#BB8506] focus:outline-none">soup</Tab>
                <Tab className="uppercase font-medium cursor-pointer border-b-2 transition-all border-white hover:border-[#BB8506] hover:text-[#BB8506] focus:outline-none">dessert</Tab>
                <Tab className="uppercase font-medium cursor-pointer border-b-2 transition-all border-white hover:border-[#BB8506] hover:text-[#BB8506] focus:outline-none">drinks</Tab>
                </TabList>

                <div className="mt-8">
                    <TabPanel>
                        <TabContent item={saladItem}></TabContent>
                    </TabPanel>
                    <TabPanel>
                        <TabContent item={pizzaItem}></TabContent>
                    </TabPanel>
                    <TabPanel>
                        <TabContent item={soupItem}></TabContent>
                    </TabPanel>
                    <TabPanel>
                        <TabContent item={dessertItem}></TabContent>
                    </TabPanel>
                    <TabPanel>
                        <TabContent item={drinksItem}></TabContent>
                    </TabPanel>
                </div>
            </Tabs>
            </div>
        </div>
    );
};

export default Shop;