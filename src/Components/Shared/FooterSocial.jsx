import Cloud from "../../assets/images/contact/cloud.png";
import Insta from "../../assets/images/contact/instagram.png";
import Linkedin from "../../assets/images/contact/linkedin.png";
import Spotify from "../../assets/images/contact/spotify.png";
import Arrow from "./Arrow";
import Social from "./Social";
const socialData = [
  { image: Insta, link: "#!" },
  { image: Linkedin, link: "#!" },
  { image: Cloud, link: "#!" },
  { image: Spotify, link: "#!" },
];
const FooterSocial = ({ top }) => {
  return (
    <div
      className={`flex justify-center items-center ${top} w-[80%] mx-auto gap-16 py-4`}
    >
      <div className=" -rotate-90">
        <Arrow width={"w-[50px]"} />
      </div>
      <Social align={"justify-center"} />
      <div className=" -rotate-90">
        <Arrow width={"w-[50px]"} />
      </div>
    </div>
  );
};

export default FooterSocial;
