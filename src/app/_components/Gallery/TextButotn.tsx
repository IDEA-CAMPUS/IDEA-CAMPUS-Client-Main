import React from "react";

interface TextProps {
  title: string;
  isHover: boolean;
  onClick: () => void;
}

const TextButton: React.FC<TextProps> = ({ title, isHover, onClick }) => {
  return (
    <button
      className={`w-16 h-8 p-1 text-base bg-white ${
        isHover ? "text-[#9747FF]" : "text-black"
      }`}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TextButton;
