import Arrow from "./Arrow";

const BoxIconText = ({ text, width, fontSize, leftIcon }) => {
  return (
    <div
      className={`border-[1px] border-black rounded-lg bg-[#45ffc7] about-third-shadow   ${width} px-4 text-center relative 
   `}
    >
      <a href="#!">
        <div
          className={`flex justify-center items-center ${
            leftIcon ? "flex-row-reverse" : ""
          }`}
        >
          <h3
            className={`${fontSize} font-primary white-text-shadow  p-3 italic tracking-widest uppercase`}
          >
            {text}
          </h3>

          <Arrow width="w-[60px]" rotate={"rotate-90"} />
        </div>
      </a>
    </div>
  );
};

export default BoxIconText;
