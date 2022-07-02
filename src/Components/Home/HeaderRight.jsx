import Insta from "../../assets/images/contact/instagram.png";
import Arrow from "../Shared/Arrow";
import BoxText from "../Shared/BoxText";
const HeaderRight = () => {
  return (
    <div
      className=" flex justify-center
    items-center flex-col gap-10"
    >
      <img src={Insta} alt="insta" />
      <BoxText
        text="new"
        bg="bg-[#45ffc7]"
        isWhite={true}
        isBlue={true}
        width="w-[150px]"
        fontSize="text-2xl"
        isGif={false}
        content=""
      />
      <Arrow rotate={"rotate-90"} />
      <BoxText
        text="CHECK OUT MY SENIOR THESIS HERE: BALTIGQ+"
        bg="bg-[#fbff12]"
        isWhite={false}
        isBlue={false}
        width="w-[180px]"
        fontSize="text-lg"
        isGif={false}
        content=""
      />
      <Arrow rotate={"-rotate-90"} />
      <BoxText
        text="art direction"
        bg="bg-[#45ffc7]"
        isWhite={true}
        isBlue={true}
        width="w-[150px]"
        fontSize="text-xs"
        isGif={true}
        content="mark"
      />
    </div>
  );
};

export default HeaderRight;
