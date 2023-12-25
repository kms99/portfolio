import Link from "next/link";
import React, { useState } from "react";
import Search from "@/public/img/search.svg";
import Down from "@/public/img/down.svg";
import { motion } from "framer-motion";

const MainIntro = () => {
  const [checkViewPort, setCheckViewPort] = useState<boolean>(false);

  return (
    <motion.div
      id="intro"
      onViewportLeave={() => {
        setCheckViewPort(false);
      }}
      onViewportEnter={() => {
        setCheckViewPort(true);
      }}
      className="h-screen flex justify-center items-center bg-i relative mb-1"
    >
      <div className="border-black border-4 w-12em text-5xl py-6 px-4 relative">
        <h2
          className={`font-bold w-7em ${
            checkViewPort && "animate-typing"
          } whitespace-nowrap overflow-hidden border-r border-black`}
        >
          낭만있는개발자
        </h2>
        <Link
          className="absolute right-8 top-1/2 -translate-y-1/2"
          href="#about"
        >
          <Search />
        </Link>
      </div>

      <section className="animate-bounce absolute bottom-32 flex flex-col items-center">
        <span className="mb-2 font-bold">내려주세요</span>
        <Down />
      </section>
    </motion.div>
  );
};

export default MainIntro;
