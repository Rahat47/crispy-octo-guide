import arrow from "../../assets/images/home/arrows.gif";
import img7 from "../../assets/images/home/new/bafjsdv-6 copy.jpg";
import img2 from "../../assets/images/home/new/Bean _ Bean.jpg";
import img1 from "../../assets/images/home/new/Bellessa.jpg";
import img3 from "../../assets/images/home/new/Upworthy.png";
import img4 from "../../assets/images/home/new/Voodoo Ranger.png";
import img6 from "../../assets/images/home/new/z.jpg";
import Arrow from "../Shared/Arrow";
import BoxText from "../Shared/BoxText";

const ThirdSection = () => {
  return (
    <section className="mt-6">
      <div className="flex justify-center items-start gap-16 flex-wrap">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-7">
            <div className="-mt-10 flex flex-col gap-20 justify-center items-center">
              <BoxText
                text="editorial design"
                bg="bg-box"
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
                className="border-[5px] border-paper sketchy w-72 h-auto block"
              />
            </div>
          </div>
          <img
            src={img3}
            alt=""
            className="w-96 [border-image:repeating-linear-gradient(50deg,_pink,_teal_4%)_1] border-8"
          />
          <div className="flex justify-center items-center gap-6 relative">
            <BoxText
              text="click to see more set design examples"
              bg="bg-box"
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
              className="border-[6px] border-white rounded-[50%] w-[250px] relative z-10 hidden md:block"
            />
          </div>
          <div className="flex justify-center md:justify-end items-start">
            <img src={img7} alt="" className="w-96 border-svg border-8" />
          </div>
        </div>

        {/* second part */}
        <div className="flex flex-col-reverse md:flex-col gap-8">
          <div className="flex justify-center gap-7 ">
            <div className="mt-10">
              <img
                src={img2}
                alt=""
                className=" w-80 border-svg border-[12px]"
              />
            </div>
            <div className="-mt-20 flex flex-col gap-60 justify-center items-center hidden md:block">
              <BoxText
                text="editorial design"
                bg="bg-box"
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
          <div className="flex justify-center gap-4 items-start  relative z-10">
            <img
              src={img4}
              alt=""
              className="w-[360px] hidden md:block border-svg border-8"
            />
            {/* <img
              src={img5}
              alt=""
              className="border-[6px] border-white w-full hidden md:block"
            /> */}
          </div>
          {/* single women image */}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
