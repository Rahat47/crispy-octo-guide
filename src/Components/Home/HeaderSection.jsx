import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderTitle from "./HeaderTitle";

import img3 from "../../assets/images/home/black_women.jpg";
import img2 from "../../assets/images/home/lawnfront.jpg";
import img1 from "../../assets/images/home/three.jpg";
import img4 from "../../assets/images/home/Valentine3.jpg";
const HeaderSection = () => {
  return (
    <section>
      <div className="flex justify-center gap-6 items-start">
        {/* left side */}
        <div className="hidden lg:block">
          <HeaderLeft />
        </div>

        {/* middle side */}
        <div>
          <HeaderTitle />
          <div className="flex gap-6 justify-center items-start flex-wrap-reverse">
            <div className="gap-6 flex flex-col-reverse lg:flex-col">
              <img src={img1} alt="" className="border-[5px] border-white" />
              {/* <div className="relative w-[400px] h-[450px] mt-24"> */}
              <div className="relative">
                <img src={img3} alt="" className="z-50 relative" />
                {/* <img
                  src={water}
                  alt=""
                  className="absolute -top-16 -left-24 w-full h-full  object-cover"
                /> */}
              </div>
            </div>
            <div className="gap-6 flex flex-col ">
              <img src={img2} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="hidden lg:block">
          <HeaderRight />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
