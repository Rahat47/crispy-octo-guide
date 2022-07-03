import img7 from "../../assets/images/home/arrows.gif";
import img1 from "../../assets/images/home/black-men.jpg";
import img9 from "../../assets/images/home/cat-man-2.jpg";
import img3 from "../../assets/images/home/cat-men.jpg";
import img5 from "../../assets/images/home/Cover.jpg";
import img6 from "../../assets/images/home/EmptyName 21.jpg";
import img8 from "../../assets/images/home/flowers.jpg";
import img2 from "../../assets/images/home/KC_DENNIS-3651.jpg";
import img4 from "../../assets/images/home/Tony.jpg";
import Arrow from "../Shared/Arrow";
import BoxText from "../Shared/BoxText";

const WooferFooter = () => {
  return (
    <div className="flex justify-center items-start gap-8 pt-4 flex-wrap">
      <div className="flex items-start justify-center md:justify-start gap-8 flex-wrap">
        <div className="flex flex-col items-center gap-8 ">
          <BoxText
            text="Apparel
            Photo
            Video"
            bg="bg-box"
            isWhite={true}
            isBlue={true}
            width="w-[150px]"
            fontSize="text-sm"
            isGif={false}
            content=""
          />
          <Arrow rotate={"rotate-90"} width={"w-[70px]"} />
        </div>
        <div className="md:-mt-48 flex flex-col gap-8">
          <img
            src={img1}
            alt=""
            className="border-[4px] border-black w-[420px]"
          />
          <img src={img4} alt="" className=" w-[370px] ml-4" />
          <img src={img5} alt="" className=" w-[400px] relative z-10" />
          <div className="flex justify-end pr-10">
            <BoxText
              text="Click for         
              more Selfie
              stick photos!"
              bg="bg-box"
              isWhite={true}
              isBlue={true}
              width="w-[210px]"
              fontSize="text-sm"
              isGif={false}
              content=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex justify-start items-center gap-8 flex-wrap">
          <img
            src={img2}
            alt=""
            className="border-[4px] border-black w-[370px]"
          />
          <img
            src={img3}
            alt=""
            className="border-[4px] border-white w-[200px]"
          />
        </div>
        <div className="md:-ml-8 flex justify-between items-center flex-wrap">
          <img
            src={img6}
            alt=""
            className="third-section1 border-[4px] border-black w-[600px] h-[500px]"
          />
          <div className="">
            <img src={img7} alt="" className=" -rotate-90 w-[180px]" />
          </div>
        </div>
        {/* flowers section */}
        <div className="flex items-start justify-center md:justify-start gap-16 md:-ml-20 flex-wrap-reverse">
          <img src={img8} alt="" className="main-image-shadow w-[550px]" />
          <img
            src={img9}
            alt=""
            className="border-[5px] border-white w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WooferFooter;
