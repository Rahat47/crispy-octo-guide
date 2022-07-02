import { useState } from "react";
import ArrowHover from "../../assets/images/contact/arrow-hover.png";
import ArrowImg from "../../assets/images/contact/arrow.png";
const Arrow = ({ rotate, width }) => {
  const [hover, setHover] = useState(false);
  return (
    <img
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={hover ? ArrowHover : ArrowImg}
      alt="arrow"
      className={`${rotate} ${width}`}
    />
  );
};

export default Arrow;
