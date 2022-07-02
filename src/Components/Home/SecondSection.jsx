import gif from "../../assets/images/home/second.gif";
import Img1 from "../../assets/images/home/second1.jpg";
import Img3 from "../../assets/images/home/second3.jpg";
import Img2 from "../../assets/images/home/second4.jpg";
import Arrow from "../Shared/Arrow";
import BoxText from "../Shared/BoxText";

const SecondSection = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-center gap-8">
        <div className="flex flex-col gap-8">
          <div className="-ml-4">
            <Arrow rotate={"rotate-90"} />
          </div>
          <img src={Img1} alt="img-1" className="w-[360px] hidden md:block" />
        </div>

        <div>
          <div className="w-[80%] mb-8 hidden md:block">
            <img src={gif} alt="img-2" className="w-80" />
          </div>
          <div className="ml-6">
            <img src={Img2} alt="img-2" className="w-[280px]" />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-8 ">
          <img src={Img3} alt="img-3" className="w-[360px]" />

          <BoxText
            text='new! 
            click to see more images from "Baltigq+"'
            bg="bg-[#45ffc7]"
            isWhite={true}
            isBlue={true}
            width="w-[200px]"
            fontSize="text-sm"
            isGif={false}
            content=""
          />
        </div>
        <div className="flex justify-center items-center hidden md:block">
          <Arrow rotate={"rotate-90"} />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
