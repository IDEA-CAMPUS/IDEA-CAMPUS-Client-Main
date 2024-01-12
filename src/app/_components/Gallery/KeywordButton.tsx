"use client";
import React, { useState } from "react";

interface KeywordProps {
  title: string;
  onButtonClick: (isClicked: boolean) => void;
}

const KeywordButton: React.FC<KeywordProps> = ({ title, onButtonClick }) => {
  const [isClicked, setIsClicked] = useState<boolean>(true);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    onButtonClick(!isClicked); // Notify the parent component about the state change
  };

  return (
    <button
      className={`w-20 h-8 p-1 text-sm border-2 border-[#B034F7] rounded-3xl ${
        isClicked ? "bg-purple-300" : "bg-white"
      } text-black`}
      type="button"
      onClick={handleButtonClick}
    >
      {title}
    </button>
  );
};

export default KeywordButton;
