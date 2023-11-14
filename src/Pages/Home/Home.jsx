import Banner from "../../Components/HomeComp/Banner/Banner";
import Foods from "../../Components/HomeComp/Foods/Foods";
import Info from "../../Components/HomeComp/Info/Info";
import Menu from "../../Components/HomeComp/Menu/Menu";
import Number from "../../Components/HomeComp/Number/Number";
import Recomendation from "../../Components/HomeComp/Recomendation/Recomendation";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[85%] xl:max-w-[1100px] mx-auto">
                <Foods></Foods>
                <Info></Info>
                <Menu></Menu>
                <Number></Number>
                <Recomendation></Recomendation>
            </div>
        </div>
    );
};

export default Home;