// import Wix from '../../assets/images/home/wix.png';
import Arrow from "../Shared/Arrow";
import BoxText from "../Shared/BoxText";

const HeaderLeft = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-20 mt-36">
      {/* <img src={Wix} alt='Wix-logo' /> */}
      <BoxText
        text="new"
        bg="bg-box"
        isWhite={true}
        isBlue={true}
        width="w-[150px]"
        fontSize="text-2xl"
        isGif={false}
        content=""
      />
      <Arrow rotate={"rotate-90"} />
      <BoxText
        text="art direction"
        bg="bg-box"
        isWhite={true}
        isBlue={true}
        width="w-[150px]"
        fontSize="text-xs"
        isGif={true}
        content="tree"
      />
    </div>
  );
};

export default HeaderLeft;
