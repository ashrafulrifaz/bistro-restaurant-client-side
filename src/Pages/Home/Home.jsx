import Banner from "../../Components/HomeComp/Banner/Banner";
import Foods from "../../Components/HomeComp/Foods/Foods";
import Info from "../../Components/HomeComp/Info/Info";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[85%] xl:max-w-[1200px] mx-auto">
                <Foods></Foods>
                <Info></Info>
            </div>
        </div>
    );
};

export default Home;