import Img2 from "../../assets/images/home/new/PBR.jpg";
import Img3 from "../../assets/images/home/new/Upworthy.png";
import Img1 from "../../assets/images/home/new/Voodoo Ranger.png";
import img6 from "../../assets/images/home/new/z.jpg";
import Arrow from "../Shared/Arrow";
import BoxText from "../Shared/BoxText";

const SecondSection = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-center flex-wrap gap-8">
        <div className="flex flex-col gap-8">
          <div className="-ml-4">
            <Arrow rotate={"rotate-90"} />
          </div>
          <img
            src={Img1}
            alt="img-1"
            className="w-[360px] hidden md:block border-svg border-8"
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <img
            src={img6}
            alt=""
            className="border-[6px] border-white rounded-[50%] w-[250px] relative z-10"
          />
          <div className="ml-6">
            <img src={Img2} alt="img-2" className="w-[280px]" />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-8 ">
          <img src={Img3} alt="img-3" className="w-[360px] sketchy" />

          <BoxText
            text='new! 
            click to see more images from "Baltigq+"'
            bg="bg-box"
            isWhite={true}
            isBlue={true}
            width="w-[200px]"
            fontSize="text-sm"
            isGif={false}
            content=""
          />
        </div>
        <div className="flex justify-center items-center md:block">
          <Arrow rotate={"rotate-90"} />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
