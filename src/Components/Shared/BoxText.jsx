const BoxText = ({
  text,
  bg,
  isWhite,
  isBlue,
  width,
  isGif,
  fontSize,
  content,
}) => {
  return (
    <div
      className={`border-[1px] border-black rounded-lg ${bg} ${
        isBlue ? "about-third-shadow" : "about-first-shadow"
      }  ${width} text-center relative ${
        isGif
          ? `after:absolute after:content-${content} after:right-[80%] after:-top-[12%] after:translate-x-[-50%]`
          : ""
      } `}
    >
      <a href="#!">
        <h3
          className={`${fontSize} font-primary ${
            isWhite ? "white-text-shadow" : "about-text-shadow"
          }  p-3 italic tracking-widest uppercase`}
        >
          {text}
        </h3>
      </a>
    </div>
  );
};

export default BoxText;
