import arrow from "../../assets/images/home/arrows.gif";
import img6 from "../../assets/images/home/flower.jpg";
import img7 from "../../assets/images/home/girl-sky.jpg";
import img1 from "../../assets/images/home/third1.jpg";
import img2 from "../../assets/images/home/third2.jpg";
import img3 from "../../assets/images/home/third3.jpg";
import img4 from "../../assets/images/home/third4.jpg";
import img5 from "../../assets/images/home/third5.jpg";
import Arrow from "../Shared/Arrow";
import BoxText from "../Shared/BoxText";

const ThirdSection = () => {
  return (
    <section className="mt-6">
      <div className="flex justify-center items-start gap-16 flex-wrap">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-7">
            <div className="-mt-10 flex flex-col gap-40 justify-center items-center">
              <BoxText
                text="editorial design"
                bg="bg-[#45ffc7]"
                isWhite={true}
                isBlue={true}
                width="w-[150px]"
                fontSize="text-sm"
                isGif={false}
                content=""
              />
              <div>
                {/* arrow giff */}
                <img
                  src={arrow}
                  alt="arroes"
                  className="-rotate-90 w-[150px]"
                />
              </div>
              <Arrow rotate={"rotate-90"} />
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="w-[360px] border-[6px] border-black third-section1"
              />
            </div>
          </div>
          <img src={img3} alt="" />
          <div className="flex justify-center items-center gap-6 relative">
            <BoxText
              text="click to see more set design examples"
              bg="bg-[#45ffc7]"
              isWhite={true}
              isBlue={true}
              width="w-[190px]"
              fontSize="text-sm"
              isGif={false}
              content=""
            />
            <img
              src={img6}
              alt=""
              className="border-[6px] border-white rounded-[50%] w-[250px] relative z-10"
            />
          </div>
        </div>

        {/* second part */}
        <div className="flex flex-col-reverse md:flex-col gap-8">
          <div className="flex justify-center gap-7 ">
            <div className="mt-10">
              <img
                src={img2}
                alt=""
                className="w-[100%] md:w-[420px] main-image-shadow"
              />
            </div>
            <div className="-mt-20 flex flex-col gap-60 justify-center items-center hidden md:block">
              <BoxText
                text="editorial design"
                bg="bg-[#45ffc7]"
                isWhite={true}
                isBlue={true}
                width="w-[150px]"
                fontSize="text-sm"
                isGif={false}
                content=""
              />
              <div>
                {/* arrow giff */}
                <img
                  src={arrow}
                  alt="arroes"
                  className="-rotate-90 w-[150px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start gap-4 items-start md:-ml-8 relative z-10">
            <img src={img4} alt="" className="w-[50%] md:w-full md:h-full" />
            <img
              src={img5}
              alt=""
              className="border-[6px] border-white w-full hidden md:block"
            />
          </div>
          {/* single women image */}
          <div className="flex justify-center md:justify-end items-start md:-mt-56 ml-5">
            <img
              src={img7}
              alt=""
              className="border-[6px] border-white rounded-[50%] w-[100%] md:w-[70%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
