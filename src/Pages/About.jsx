import aboutImg from "../assets/images/about/about.jpg";
import AboutFooter from "../Components/About/AboutFooter";
import { Details } from "../Components/About/Details";
import FooterSocial from "../Components/Shared/FooterSocial";

const About = () => {
  return (
    <section className="w-[60%] mx-auto py-4">
      <div className="relative before:absolute before:content-left before:left-0 before:top-0 before:translate-x-[-50%] after:absolute after:content-right after:left-[100%] after:bottom-0 after:translate-x-[-10%]">
        <div className="flex justify-center gap-6 items-center flex-wrap xl:flex-nowrap mx-8">
          <div className="xl:w-full">
            <img
              src={aboutImg}
              alt="about-img"
              className="border-8 border-white w-full h-full"
            />
          </div>
          <div className="xl:text-left text-center xl:w-full">
            <Details />
          </div>
        </div>
      </div>
      {/* about footer */}
      <AboutFooter />
      <FooterSocial top={"mt-10"} />
    </section>
  );
};

export default About;
