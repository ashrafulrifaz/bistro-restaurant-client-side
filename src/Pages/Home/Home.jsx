import Banner from "../../Components/HomeComp/Banner/Banner";
import Foods from "../../Components/HomeComp/Foods/Foods";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[85%] xl:max-w-[1200px] mx-auto">
                <Foods></Foods>
            </div>
        </div>
    );
};

export default Home;