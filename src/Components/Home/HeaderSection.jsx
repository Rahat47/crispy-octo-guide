import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderTitle from './HeaderTitle';

import img3 from '../../assets/images/home/new/Bean _ Bean.jpg';
import img2 from '../../assets/images/home/new/Bellessa.jpg';
import img1 from '../../assets/images/home/new/PBR.jpg';
import img4 from '../../assets/images/home/new/Upworthy.png';
const HeaderSection = () => {
    return (
        <section>
            <div className='flex justify-center gap-6 items-start'>
                {/* left side */}
                <div className='hidden lg:block'>
                    <HeaderLeft />
                </div>

                {/* middle side */}
                <div>
                    <HeaderTitle />
                    <div className='flex gap-6 justify-center items-start flex-wrap-reverse'>
                        <div className='gap-6 flex flex-col-reverse lg:flex-col'>
                            {/* <img
                                src={img1}
                                alt=''
                                className='border-[5px] border-white w-72 h-auto block'
                            /> */}
                            <img
                                src={img2}
                                alt=''
                                className='w-80 border-8 [border-image:repeating-linear-gradient(50deg,_pink,_teal_4%)_1]'
                            />

                            {/* <div className="relative w-[400px] h-[450px] mt-24"> */}
                            <div className='relative'>
                                <img
                                    src={img3}
                                    alt=''
                                    className='z-50 relative w-80 border-svg border-[12px]'
                                />
                                {/* <img
                  src={water}
                  alt=""
                  className="absolute -top-16 -left-24 w-full h-full  object-cover"
                /> */}
                            </div>
                        </div>
                        <div className='gap-6 flex flex-col items-end '>
                            {/* <img src={img2} alt='' className='w-80' /> */}
                            <img
                                src={img1}
                                alt=''
                                className='border-[5px] border-paper sketchy w-72 h-auto block'
                            />
                            <img
                                src={img4}
                                alt=''
                                className='w-96 [border-image:repeating-linear-gradient(50deg,_pink,_teal_4%)_1] border-8'
                            />
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className='hidden lg:block'>
                    <HeaderRight />
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
