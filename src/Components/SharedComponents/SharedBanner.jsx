
const SharedBanner = ({bgImage, title, description}) => {
    const bannerBg = {
        background: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <div style={bannerBg} className="p-32 text-white">
            <div className="bg-[#15151599] py-20 px-32 text-center">
                <h1 className='text-4xl font-main font-bold'>{title}</h1>
                <p className='mt-4 capitalize'>{description}</p>
            </div>
        </div>
    );
};

export default SharedBanner;