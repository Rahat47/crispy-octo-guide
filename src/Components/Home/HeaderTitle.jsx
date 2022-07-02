import Arrow from '../../assets/images/home/arrow.gif';
const HeaderTitle = () => {
    return (
        <div className='flex justify-center items-center gap-6 py-8'>
            <h2 className='font-primary text-[2rem] md:text-[2.8rem] text-white home-text-shadow'>
                John
            </h2>
            <div>
                <img src={Arrow} alt='arrow-gif' className='rotate-90' />
            </div>
            <h2 className='font-primary text-[2.5rem] text-white home-text-shadow'>
                Doe
            </h2>
        </div>
    );
};

export default HeaderTitle;
