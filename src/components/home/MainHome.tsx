import Image from "next/image";
import React from "react";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";

const geist = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
});

const MainHome = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden min-h-screen relative ">
      <div className="w-[200%] h-[230%] -top-[190%] -translate-x-0 absolute bg-[radial-gradient(circle,rgba(0,102,255,1)_0%,rgba(0,102,255,0)_50%)]"></div>
      <div className="w-full flex z-10 items-end justify-between min-h-screen gap-10">
        <div className="flex flex-col justify-center min-h-screen gap-5 w-[35%] ">
          <h1
            className={`text-9xl bg-gradient-to-b from-pink-300 to-blue-300 bg-clip-text text-transparent ${geist.className}`}
          >
            CHAT BOT
          </h1>
          <h3 className="text-5xl font-bold ">AI GENERATED</h3>

          <Link
            href={"/chat"}
            className="border border-white rounded-lg w-32 py-2 hover:bg-white hover:text-black transition duration-500 cursor-pointer flex items-center justify-center"
          >
            Start Chat
          </Link>
        </div>
        <Image
          src="/image/bot-Photoroom.png"
          width={500}
          height={100}
          alt="bot"
        />
        <div className="flex flex-col justify-center min-h-screen gap-5 w-[30%]">
          <p className="text-xl leading-9">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            distinctio id natus quidem expedita assumenda dolore, praesentium
            accusamus reprehenderit illo!
          </p>
        </div>
      </div>
      <div className="w-[200%] h-[200%] -bottom-[150%] -translate-x-0 absolute bg-[radial-gradient(circle,rgba(101,8,65,1)_0%,rgba(101,8,65,0)_50%)]"></div>
    </div>
  );
};

export default MainHome;
