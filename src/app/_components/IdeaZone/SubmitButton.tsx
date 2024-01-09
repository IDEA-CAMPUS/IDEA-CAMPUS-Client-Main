import React from "react";

interface SubmitProps {
  title: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitProps> = ({ title, onClick }) => {
  return (
    <button
      className="w-20 h-9 p-1 text-xs bg-[#FFE292] hover:bg-[#FFCF4A] rounded-xl text-black"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SubmitButton;
