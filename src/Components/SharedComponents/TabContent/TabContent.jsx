import TabContentCard from "./TabContentCard";

const TabContent = ({item}) => {

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                item && item.map((item, idx) => <TabContentCard key={idx} item={item}></TabContentCard>)
            }
        </div>
    );
};

export default TabContent;