"use client";
import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import axios from "axios";

const TextBox = () => {
  const refTextBox = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [resData, setResData] = useState<string | null>(null);

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
    console.log(formData);
    try {
      const res = await axios.post("/api/chat", formData);
      console.log(res?.data);
      setResData(res?.data?.candidates[0]?.content?.parts[0]?.text);
    } catch (error) {
      console.log(error);
    }
  };

  // Detect Farsi Text
  const textFn = /[\u0600-\u06FF]/.test(resData || "");

  // Split Title
  const parts = resData?.split(/(\*\*.*?\*\*)/g);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[90%] lg:w-full">
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
      <p className={`leading-10 ${textFn ? "text-right" : "text-left"} w-full`}>
        {parts?.map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <span
              key={i}
              className="block mt-4 font-bold text-xl text-gray-100"
            >
              {part.replace(/\*\*/g, "")}
            </span>
          ) : (
            <span key={i} className="text-gray-300 text-lg">
              {part}
            </span>
          )
        )}
      </p>
    </div>
  );
};

export default TextBox;
