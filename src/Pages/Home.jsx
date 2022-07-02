import FooterSection from '../Components/Home/FooterSection';
import HeaderSection from '../Components/Home/HeaderSection';
import SecondSection from '../Components/Home/SecondSection';
import ThirdSection from '../Components/Home/ThirdSection';
import WooferSection from '../Components/Home/WooferSection';

const Home = () => {
    return (
        <section className='bg-[#ffabd9]'>
            <HeaderSection />
            <SecondSection />
            <ThirdSection />
            <WooferSection />
            <FooterSection />
        </section>
    );
};

export default Home;
