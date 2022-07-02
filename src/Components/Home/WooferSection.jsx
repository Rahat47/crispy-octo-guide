import ArrowGif from "../../assets/images/home/arrow.gif";
import dolphin from "../../assets/images/home/dolphin.gif";
import img1 from "../../assets/images/home/man-bottole.jpg";
import img3 from "../../assets/images/home/PinkGumballInsta.jpg";
import sea from "../../assets/images/home/sea-weater.gif";
import img2 from "../../assets/images/home/woofer.png";
import Arrow from "../Shared/Arrow";

import BoxText from "../Shared/BoxText";
import WooferFooter from "./WooferFooter";

const WooferSection = () => {
  return (
    <section className="mt-4 md:-mt-48 pb-6">
      {/* first part */}
      <div className="flex justify-center items-start flex-wrap">
        {/* 1st */}
        <img
          src={img1}
          alt=""
          className="border-[6px] border-white w-[350px]"
        />
        {/* 2nd part */}
        <div className="">
          {/* first section  */}
          <div className="">
            <img src={img2} alt="" className="w-[600px] hidden md:block" />
            <div className="flex justify-center hidden md:block">
              <Arrow rotate={"rotate-90"} />
            </div>
            <div className=" flex">
              <div>
                <img src={sea} alt="" className="w-[330px] h-[150px]" />
                <div className="-mt-16">
                  <img src={dolphin} alt="" className="w-[280px]" />
                </div>
              </div>
              <div className="flex justify-end gap-8">
                <div className="mt-6 -ml-16">
                  <img src={img3} alt="" className="w-[350px]" />
                </div>
                <div className="flex flex-col items-center -mt-8 hidden md:block">
                  <BoxText
                    text="Apparel Photo Video"
                    bg="bg-[#45ffc7]"
                    isWhite={true}
                    isBlue={true}
                    width="w-[120px]"
                    fontSize="text-sm"
                    isGif={false}
                    content=""
                  />

                  <img
                    src={ArrowGif}
                    alt="arrow-gif"
                    className="rotate-90 w-[45px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* second section */}
        </div>
      </div>

      {/* last part */}
      <WooferFooter />
    </section>
  );
};

export default WooferSection;
