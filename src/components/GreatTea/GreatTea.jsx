import image1 from '../../assets/images/fresh-1.png'
import image2 from '../../assets/images/fresh-2.png'

const GreatTea = () => {
    return (
        <div className='flex flex-row mg:flex-col gap-16 mt-10 mb-16'>
            <div className='flex flex-row w-1/2 gap-8 py-16 px-8'>
                <div style={{
                    borderRadius: '10px',
                    background: 'rgba(230, 166, 35, 0.10)'
                }} className='flex items-center justify-center w-1/2'>
                    <img className='' src={image1} alt="" />
                </div>
                <div style={{
                    borderRadius: '10px',
                    background: 'rgba(87, 118, 57, 0.10)'
                }} className='flex items-center justify-center w-1/2'
                >
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='text-6xl md:text-3xl sm:text-2xl font-bold my-2'>Great Tea,<p>Freshly Presented</p></h1>
                <p className='mt-2 mb-5'>The meaning of gong cha is chanese is to provide the best tea to emperor from all possessions . It represents the highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by its custoers  because of good words of mouth and unique customized service orginated from Taiwan.</p>
                <h3 className='font-bold text-2xl my-2'>Unique Taste</h3>
                <p className='my-2'>A Unique and different style from other teapots gives a luxurious and minimalist impression</p>
                <h3 className='font-bold text-2xl my-2'>Premium Quality</h3>
                <p className='my-2'>Premium Quality that makes tea more elegant and more durable when you use it.</p>
            </div>
        </div>
    );
};

export default GreatTea;