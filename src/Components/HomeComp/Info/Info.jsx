import bgImage from '../../../../assets/home/chef-service.jpg'

const Info = () => {
    const bannerBg = {
        background: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <div style={bannerBg} className="p-20">
            <div className="bg-white py-12 px-32 text-center">
                <h1 className='text-4xl font-main text-black'>Bistro Boss</h1>
                <p className='text-[#151515] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Info;