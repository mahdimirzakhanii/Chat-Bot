"use client";
import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import axios from "axios";

interface TextBoxProps {
  req: string;
  res: string[];
}

const TextBox = () => {
  const refTextBox = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>("");

  const [resData, setResData] = useState<TextBoxProps[]>([]);

  useEffect(() => {
    if (refTextBox.current) {
      refTextBox.current.style.height = "auto";
      refTextBox.current.style.height = refTextBox.current.scrollHeight + "px";
    }
  }, [text]);

  // Handle Chat Data API
  const handleDataChat = async () => {
    const formData = {
      message: text,
    };
    try {
      const res = await axios.post("/api/chat", formData);
      console.log(res?.data);
      setResData((prev) => [
        ...(prev ?? []),
        {
          req: text,
          res: res?.data?.candidates[0]?.content?.parts[0]?.text?.split(
            /(\*\*.*?\*\*)/g
          ),
        },
      ]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  // Detect Farsi Text
  const textFn = /[\u0600-\u06FF]/.test(resData[resData?.length - 1]?.res[0]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-96 w-[90%] lg:w-full">
      <p
        className={`leading-10  w-full flex flex-col 
        ${textFn ? "text-right" : "text-left"} `}
      >
        {resData?.map((part, i) =>
          part?.res?.[0]?.startsWith("**") && part?.res?.[0]?.endsWith("**") ? (
            <div key={i} className="flex flex-col border-b border-b-gray-700 py-5">
              <h1 className="text-lg font-bold ">{part?.req}</h1>
              <span
                key={i}
                className="bg-red-400 mt-4 font-bold text-xl text-gray-900"
              >
                {part?.res?.[0]?.replace(/\*\*/g, "")}
              </span>
            </div>
          ) : (
            <div key={i} className="flex flex-col  border-b border-b-gray-700 last-of-type:border-none py-5">
              <h1 className="text-lg font-bold ">{part?.req}</h1>
              <span key={i} className="text-gray-300 text-lg">
                {part?.res?.[0]}
              </span>
            </div>
          )
        )}
      </p>
      <div className="w-full flex items-end pb-3 justify-center gap-2 border-b border-b-gray-600">
        <textarea
          ref={refTextBox}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 resize-none overflow-hidden max-h-52 outline-none"
          placeholder="Ask me anything"
        />
        <div
          onClick={handleDataChat}
          className="flex items-center cursor-pointer justify-center w-10 h-9 text-xl bg-blue-500 rounded-full"
        >
          <IoArrowUp />
        </div>
      </div>
    </div>
  );
};

export default TextBox;
