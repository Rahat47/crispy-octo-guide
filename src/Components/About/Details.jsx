import Social from "../Shared/Social";

export const Details = () => {
  return (
    <>
      <h3 className="text-2xl font-primary text-border font-medium about-text-shadow">
        DENNIS KRAWEC
      </h3>
      <p className="text-xl leading-[1.5rem] font-secondary text-white my-4">
        Dennis Krawec is a Brooklyn-based designer who specializes in graphic
        design, art direction, photography, video and music production.
      </p>
      <p className="text-xl leading-[1.5rem] font-secondary text-white my-4">
        With experience working for design firms, universities, and art
        non-profits, his work has been featured in large and small marketing
        campaigns both domestically and internationally. He has been recognized
        for his bold and unique approach to design.
      </p>
      <p className="text-xl leading-[1.5rem] font-secondary text-white my-4">
        In his free time, you can find him listening to his favorite Kpop
        artists. Find his playlist here.
      </p>
      <Social align={"xl:justify-start justify-center"} />
    </>
  );
};
