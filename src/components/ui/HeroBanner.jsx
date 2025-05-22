import banner from '../../assets/herobanner/banner.jpg'
const HeroBanner = () => {
    return (
        <figure className="h-150 rounded-2xl overflow-hidden relative">
            <img src={banner} alt="hero-banner" className='w-full h-full object-cover z-0' />
            <div className='absolute z-50 top-60 left-10 w-130'>
                <h1 className='text-5xl text-white font-semibold'>SUPER SALE-UP TO 50% OFF</h1>
                <button className='border rounded-xl px-5 py-4 text-white bg-black outline-none border-none mt-10 font-semibold text-2xl active:bg-gray-900'>Shop Now</button>
            </div>
        </figure>
    )
}

export default HeroBanner