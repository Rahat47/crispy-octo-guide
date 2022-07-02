import Cloud from "../../assets/images/contact/cloud.png";
import Insta from "../../assets/images/contact/instagram.png";
import Linkedin from "../../assets/images/contact/linkedin.png";
import Spotify from "../../assets/images/contact/spotify.png";

const socialData = [
  { image: Insta, link: "#!" },
  { image: Linkedin, link: "#!" },
  { image: Cloud, link: "#!" },
  { image: Spotify, link: "#!" },
];
const Social = ({ align }) => {
  return (
    <div className={`flex ${align} items-center gap-4`}>
      {socialData.map((data, index) => (
        <a href={data.link} key={index}>
          <img src={data.image} alt={`social-${index}`} />
        </a>
      ))}
    </div>
  );
};

export default Social;
