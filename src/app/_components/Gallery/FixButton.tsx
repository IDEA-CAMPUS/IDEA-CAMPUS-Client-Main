import React from "react";

interface FixButtonProps {
  title: string;
  onClick?: () => void;
}

const FixButton: React.FC<FixButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="w-20 h-9 p-1 text-xs bg-gray-400 hover:bg-purple-300 rounded-xl text-white"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default FixButton;
