import Image from "next/image";
import React from "react";
import { Barlow_Condensed } from "next/font/google";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoLanguageSharp } from "react-icons/io5";
import { RiImageAiFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import MagicBento from "../EffectCarts";

const geist1 = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
});

const data = [
  {
    title: "Task Automation",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: <TbAutomaticGearbox />,
    color: "#f2f",
  },
  {
    title: "Multi Language Support",
    desc: "lorem ipsum dolor s Quisquam, quod.",
    icon: <IoLanguageSharp />,
    color: "#1222f1",
  },
  {
    title: "Image Generation",
    desc: "lorem ipsum dolor sit amet consectetur elit. Quisquam ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: <RiImageAiFill />,
    color: "#161d",
  },
  {
    title: "Code Snippets",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: <FaCode />,
    color: "#822",
  },
];
const MainChat = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] w-full ">
      <span className={`${geist1.className} text-7xl text-purple-300`}>
        ChatBot
      </span>
      <div className="flex items-stretch justify-center gap-5 w-[90%] ">
        <MagicBento
          data={data}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
};

export default MainChat;
