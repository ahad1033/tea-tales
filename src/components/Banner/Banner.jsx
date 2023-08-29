import bannerImg from '../../assets/images/banner.png'
import arrow from '../../assets/images/arrow.png'


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='relative'>
                    <img id='main' src={bannerImg} className="max-w-md rounded-lg shadow-2xl" />
                    <div id='unique' className='bg-white text-black absolute bottom-3 left-3 rounded p-2'>
                        
                        <div>
                            <h1 className='text-2xl font-bold'>5.00</h1>
                            <p className='text-xs'>Trust Pilot Ratings</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">It is good <p className='my-2'>tea time at The</p> Tea House</h1>
                    <p className="py-6">Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
                    <button style={{
                        borderRadius: '10px',
                        background: 'var(--linear, linear-gradient(270deg, #F00 0%, #FF8938 100%))'
                    }} className="btn border-0 text-white">
                        Explore More
                        <img className='ps-1' src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;