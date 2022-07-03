import img3 from "../../assets/images/home/new/Bean _ Bean.jpg";
import img2 from "../../assets/images/home/new/Bellessa.jpg";
import img4 from "../../assets/images/home/new/Upworthy.png";
import img1 from "../../assets/images/home/new/z.jpg";
const WooferSection = () => {
  return (
    <section className="mt-4  pb-6">
      {/* first part */}
      <div className="flex justify-center items-start flex-wrap gap-10">
        <div className="flex flex-col gap-10">
          <img
            src={img1}
            alt=""
            className="border-[5px] border-paper sketchy w-80 h-auto block"
          />
          <img
            src={img4}
            alt=""
            className="w-80 border-8 [border-image:repeating-linear-gradient(50deg,_pink,_teal_4%)_1]"
          />
        </div>
        <div className="flex flex-col gap-10 md:-mt-56">
          <img
            src={img2}
            alt=""
            className="w-96 [border-image:repeating-linear-gradient(50deg,_pink,_teal_4%)_1] border-8"
          />
          <img
            src={img3}
            alt=""
            className="z-50 relative w-80 border-svg border-[12px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WooferSection;
