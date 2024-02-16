import { usePage } from "@/app/contexts/PageProvider";
import Scope from "@/public/img/scope.svg";
import Image from "next/image";

const AboutFirstPage = () => {
  const { isActiveFirst, handleChangeNextPage, handleChangePrevPage } =
    usePage();
  return (
    <div
      className={`absolute w-full h-full shadow-AboutCardShadow origin-left transform-3d transition-z duration-0 delay-500  ${
        !isActiveFirst ? "-z-30" : "z-30"
      }  [&>div]:backface-hidden ${
        !isActiveFirst ? "animate-flip" : "animate-flip-reverse"
      }`}
    >
      <div
        className="top-0 left-0 w-full h-full absolute bg-black z-20 flex flex-col items-center cursor-pointer"
        onClick={handleChangeNextPage}
      >
        <Image
          src={"/img/bg.jpg"}
          width={1920}
          height={1280}
          alt="first"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-70 -z-10"
        />
        <h2 className="text-white mt-28 text-3xl font-bold mb-10">낭만 코더</h2>
        <span className="text-white font-bold text-sm animate-pulse">
          클릭하여 넘겨주세요
        </span>
      </div>

      <div
        className="top-0 left-0 w-full h-full absolute flip bg-white z-20 border-r-2 flex flex-col items-center cursor-pointer"
        onClick={handleChangePrevPage}
      >
        <span className="mt-24 font-bold">첫번째 장</span>
        <h3 className="mt-16 text-3xl font-bold border-b-4 border-black mb-28">
          목표
        </h3>
        <Scope />
      </div>
    </div>
  );
};

export default AboutFirstPage;
