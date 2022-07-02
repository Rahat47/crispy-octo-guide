import Doeuvres from "../assets/images/music/Hor_D'oeuvres_Cover.jpg";

const Music = () => {
  return (
    <div>
      <h3 className="text-2xl font-secondary about-third-text-shadow text-[#9EFFDB] py-6">
        Special thanks: Edek Sher.
      </h3>
      <div>
        <div>
          <img src={Doeuvres} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Music;
