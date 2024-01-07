import React from "react";

interface SubmitProps {
  color: string;
  hoverColor: string;
}

const SubmitButton: React.FC<SubmitProps> = ({ color, hoverColor }) => {
  return (
    <button
      className={`w-20 h-9 p-1 text-xs bg-${color} hover:bg-${hoverColor} rounded-xl text-white`}
      type="button"
    >
      등록하기
    </button>
  );
};

export default SubmitButton;
