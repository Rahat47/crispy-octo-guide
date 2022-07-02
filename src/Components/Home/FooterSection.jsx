import img1 from "../../assets/images/home/footer1.jpg";
import img2 from "../../assets/images/home/footer2.jpg";
import dolphin from "../../assets/images/home/mini-dol.gif";
import img3 from "../../assets/images/home/sea.gif";
import BoxIconText from "../Shared/BoxIconText";
import BoxText from "../Shared/BoxText";

import FooterSocial from "../Shared/FooterSocial";

const FooterSection = () => {
  return (
    <footer>
      <div className="flex justify-center items-start gap-16 flex-wrap">
        {/* first column */}
        <div className="flex flex-col items-center gap-16">
          <div className="relative">
            <img src={img1} alt="" className="w-[380px] relative z-10" />
            <img
              src={img3}
              alt=""
              className="w-[350px] h-[430px] absolute -bottom-10 -right-10"
            />
          </div>
          <BoxIconText
            text="other work"
            width="w-[150px]"
            fontSize="text-sm"
            leftIcon={false}
          />
        </div>

        {/* second column */}
        <div className="flex flex-col items-center gap-8">
          <img src={img2} alt="" className="w-[400px] border-4 border-black" />
          <BoxIconText
            text="other work"
            width="w-[150px]"
            fontSize="text-sm"
            leftIcon={true}
          />
        </div>

        {/* third column */}

        <div className="flex flex-col items-center gap-8 justify-end mt-32">
          <BoxText
            text="about me"
            bg="bg-[#45ffc7]"
            isWhite={true}
            isBlue={true}
            width="w-[120px]"
            fontSize="text-sm"
            isGif={true}
            content="mark"
          />
          <BoxText
            text="contact me"
            bg="bg-[#45ffc7]"
            isWhite={true}
            isBlue={true}
            width="w-[130px]"
            fontSize="text-sm"
            isGif={false}
            content="mark"
          />
          <img src={dolphin} alt="" className="w-full" />
        </div>
      </div>
      <FooterSocial top={"mt-8"} />
    </footer>
  );
};

export default FooterSection;
