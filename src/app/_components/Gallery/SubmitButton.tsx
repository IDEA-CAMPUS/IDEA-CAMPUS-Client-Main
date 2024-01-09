import React from "react";

interface SubmitProps {
  title: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitProps> = ({ title, onClick }) => {
  return (
    <button
      className="w-20 h-9 p-1 text-xs bg-purple-300 hover:bg-purple-500 rounded-xl text-white"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SubmitButton;
