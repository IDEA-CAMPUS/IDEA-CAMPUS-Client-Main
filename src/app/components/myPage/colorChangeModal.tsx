// ColorChangeModal.tsx
import React, { useState } from "react";
import ColorPalette from "./ColorPalette";
import Image from "next/image";
import { editUserInfo } from "@/app/api/mypage/editUserInfo";

interface ownProps {
  onChange: (color: string) => void;
  onToggle: () => void;
  userInfoData: {};
}

export const ColorChangeModal = (props: ownProps) => {
  const {
    onChange: handleChange,
    onToggle: handleToggle,
    userInfoData,
  } = props;

  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleButtonClick = (colorCode: string) => {
    setSelectedColor(colorCode);
  };

  const colorCodes = [
    "#B034F7",
    "#FFCF4A",
    "#000000",
    "#6B6B6B",
    "#A6A6A6",
    "#23A698",
    "#28A6B4",
    "#439ED5",
    "#4569A3",
    "#49A366",
    "#745FAA",
    "#8EBD31",
    "#9259B8",
    "#D35698",
    "#D8466B",
    "#ECB477",
    "#F09896",
    "#F14F4D",
    "#F69630",
    "#FA7F60",
  ];

  const handleColorSave = () => {
    const bodyData = {
      ...userInfoData,
      color: selectedColor,
    };
    editUserInfo(bodyData);

    // handleChange(selectedColor);
    // handleToggle();
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-10">
        <h1 className="font-semibold text-xl">프로필 배경색 변경</h1>
        <div className="mt-4">
          <div className="relative">
            <svg width={100} height={100}>
              <circle
                cx="50"
                cy="50"
                r="50"
                fill={selectedColor || "#FFCF4A"}
              />
            </svg>
          </div>
          <div className="absolute mt-[-96px]">
            <Image
              src="/Profile_emptybg.svg"
              alt="프로필"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-9">
          {colorCodes.map((code, index) => (
            <ColorPalette
              key={index}
              ColorCode={code}
              handler={handleButtonClick}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-4 mt-4">
          <button
            onClick={handleToggle}
            className="bg-white text-black hover:bg-gray-200 font-semibold px-4 py-2 rounded-md"
          >
            취소
          </button>
          <button
            onClick={handleColorSave}
            className="bg-white text-purple-700 hover:bg-purple-200 font-semibold px-4 py-2 rounded-md"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};
