"use client";
import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const TextBox = () => {
  const refTextBox = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (refTextBox.current) {
      refTextBox.current.style.height = "auto";
      refTextBox.current.style.height = refTextBox.current.scrollHeight + "px";
    }
  }, [text]);
  
  return (
    <div className="w-1/2 flex items-end pb-3 justify-center gap-2  border-b border-b-gray-600">
      <textarea
        ref={refTextBox}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-3 resize-none overflow-hidden max-h-52  outline-none"
        placeholder="Ask me anything"
      />
      <div className="flex items-center cursor-pointer justify-center w-10 h-9 text-xl bg-blue-500 rounded-full">
        <IoArrowUp />
      </div>
    </div>
  );
};

export default TextBox;
