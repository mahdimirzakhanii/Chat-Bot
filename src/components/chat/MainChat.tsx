import { Barlow_Condensed } from "next/font/google";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoLanguageSharp } from "react-icons/io5";
import { RiImageAiFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import MagicBento from "../EffectCarts";
import TextBox from "./TextBox";

const geist1 = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
});

const dataCart = [
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

  const apiKey = process.env.GEMINI_API_KEY;
  
  return (
    <div className="flex flex-col gap-20 items-center justify-start min-h-[90vh] mt-20 w-full ">
      <div className="flex flex-col items-center w-full justify-center gap-10">
        <span className={`${geist1.className} text-7xl text-purple-300`}>
          ChatBot
        </span>
        <div className="flex items-stretch justify-center gap-5 w-full ">
          <MagicBento
            data={dataCart}
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
      <div className="w-full flex flex-col items-center justify-center">
        <TextBox apiKey={apiKey}/>
      </div>
    </div>
  );
};

export default MainChat;
