import Arrow from "../../assets/images/about/arrow.gif";
import Email from "../../assets/images/about/email.gif";

const AboutFooter = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center gap-6 flex-wrap">
        <div className="border-[1px] border-black rounded-lg bg-[#fbff12] about-first-shadow w-[230px] text-center relative after:absolute after:content-mark after:left-[95%] after:-top-[12%] after:translate-x-[-50%]">
          <a href="#!">
            <h3 className="text-lg font-primary about-text-shadow p-2 italic tracking-widest">
              CHECK OUT MY SENIOR THESIS HERE: BALTIGQ+
            </h3>
          </a>
        </div>

        <div className="border-[1px] border-black rounded-lg bg-[#ff4d4d] about-second-shadow w-[150px] text-center">
          <a href="#!">
            <h3 className="text-lg font-primary about-second-text-shadow p-2 italic tracking-widest text-white">
              DOWN- LOAD MY RESUME
            </h3>
          </a>
        </div>

        <div>
          <div className="border-[1px] border-black rounded-lg bg-border  about-third-shadow text-center">
            <a href="#!">
              <h3 className="text-xl font-secondary font-medium about-third-text-shadow  py-4 px-8 italic tracking-widest">
                send me an email!
              </h3>
            </a>
          </div>
          <div className="flex justify-center items-center gap-10 mt-6">
            <img src={Arrow} alt="arrow-gif" className=" rotate-180" />
            <img src={Email} alt="email-gif" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
