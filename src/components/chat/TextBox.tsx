"use client";
import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import axios from "axios";

const TextBox = () => {
  const refTextBox = useRef(null);
  const [text, setText] = useState("");
  const [resData, setResData] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (refTextBox.current) {
      refTextBox.current.style.height = "auto";
      refTextBox.current.style.height = refTextBox.current.scrollHeight + "px";
    }
  }, [text]);

  const handleDataChat = async () => {
    const formData = {
      message: text,
    };
    try {
      const res = await axios.post("/api/chat", formData);
      console.log(res?.data);
      setResData(res?.data?.candidates[0]?.content?.parts[0]?.text);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(resData);

  const renderText = (text: string) => {
    return text.replace(/\n/g, "<br/>");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-1/2">
      <div className="w-full flex items-end pb-3 justify-center gap-2 border-b border-b-gray-600">
        <textarea
          ref={refTextBox}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 resize-none overflow-hidden max-h-52  outline-none"
          placeholder="Ask me anything"
        />
        <div
          onClick={handleDataChat}
          className="flex items-center cursor-pointer justify-center w-10 h-9 text-xl bg-blue-500 rounded-full"
        >
          <IoArrowUp />
        </div>
      </div>
      {resData && (
        <div className="text-xl w-full mb-20">
          <div dangerouslySetInnerHTML={{ __html: renderText(resData) }} />
        </div>
      )}
    </div>
  );
};

export default TextBox;
