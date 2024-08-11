/* eslint-disable @next/next/no-img-element */
import reactIcon from "/public/react.svg";

export default function ReactLogo() {
  const customClass =
    "size-28 md:size-36 xl:size-52 animate-rotate-360 animate-iteration-count-infinite animate-duration-[7s] p-2 rounded-[50%]";

  return (
    <div className="relative w-fit mx-auto animate-fade-in-up">
      {Array.from({ length: 2 }).map((_, index) => (
        <img
          key={index}
          className={`${customClass} ${index === 1 ? "blur-2xl absolute top-0" : ""}`}
          src={reactIcon.src}
          alt="react logo"
          aria-hidden={index === 1 ? false : true}
        />
      ))}
    </div>
  );
}
