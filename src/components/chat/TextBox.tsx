"use client";
import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import axios from "axios";

interface TextBoxProps {
  apiKey: string | undefined;
}

const TextBox = ({ apiKey }: TextBoxProps) => {
  const refTextBox = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (refTextBox.current) {
      refTextBox.current.style.height = "auto";
      refTextBox.current.style.height = refTextBox.current.scrollHeight + "px";
    }
  }, [text]);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const handleDataChat = async () => {
    const formData = {
      contents: [
        {
          parts: [{ text: text }],
        },
      ],
    };
    try {
      const res = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/2 flex items-end pb-3 justify-center gap-2  border-b border-b-gray-600">
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
  );
};

export default TextBox;
