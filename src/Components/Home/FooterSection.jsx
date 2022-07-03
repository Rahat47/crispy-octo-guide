import dolphin from "../../assets/images/home/mini-dol.gif";
import img2 from "../../assets/images/home/new/PBR.jpg";
import img1 from "../../assets/images/home/new/Voodoo Ranger.png";
import BoxIconText from "../Shared/BoxIconText";
import BoxText from "../Shared/BoxText";

import FooterSocial from "../Shared/FooterSocial";

const FooterSection = () => {
  return (
    <footer>
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {/* first column */}
        <div className="flex flex-col items-center gap-8">
          <img
            src={img2}
            alt=""
            className="border-[5px] border-paper sketchy w-96 h-auto block"
          />
          <BoxIconText
            text="other work"
            width="w-[150px]"
            fontSize="text-sm"
            leftIcon={true}
          />
        </div>
        {/* second column */}
        <div className="flex flex-col items-center gap-16">
          <div className="relative">
            <img
              src={img1}
              alt=""
              className="w-[360px] hidden md:block border-svg border-8"
            />
          </div>
          <BoxIconText
            text="other work"
            width="w-[150px]"
            fontSize="text-sm"
            leftIcon={false}
          />
        </div>

        {/* third column */}

        <div className="flex flex-col items-center gap-8 justify-end mt-32">
          <BoxText
            text="about me"
            bg="bg-box"
            isWhite={true}
            isBlue={true}
            width="w-[120px]"
            fontSize="text-sm"
            isGif={true}
            content="mark"
          />
          <BoxText
            text="contact me"
            bg="bg-box"
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
