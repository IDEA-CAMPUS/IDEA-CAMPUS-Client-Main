import React, { useState } from "react";

interface KeywordProps {
  title: string;
}

const KeywordButton: React.FC<KeywordProps> = ({ title }) => {
  const [isClicked, setisClicked] = useState<boolean>(false);

  const handleisClicked = () => {
    setisClicked(!isClicked);
  };
  return (
    <button
      className={`w-20 h-8 p-1 text-sm border-2 border-[#B034F7] rounded-3xl ${
        isClicked ? "bg-[#B034F7]" : "bg-white"
      } text-black`}
      type="button"
      onClick={handleisClicked}
    >
      {title}
    </button>
  );
};

export default KeywordButton;
