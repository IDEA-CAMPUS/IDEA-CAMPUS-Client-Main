"use Client";

import Image from "next/image";
import React from "react";

import polygon8 from "public/ideazone/polygon8.svg";
import profile from "public/profile.svg";
import { useRouter } from "next/navigation";
import ColorChangeModal from "../myPage/colorChangeModal";

interface IdeaContentProps {
  id: number;
  title: string;
  image: string;
  keyWord1: string;
  keyWord2: string;
  keyWord3: string;
  name: string;
  explain: string;
}

const IdeaContent: React.FC<IdeaContentProps> = ({
  id,
  title,
  image,
  keyWord1,
  keyWord2,
  keyWord3,
  name,
  explain,
}) => {
  const router = useRouter();

  const handleClick = () => {
    // 클릭 시 해당 id를 이용하여 새로운 페이지로 이동
    router.push(`/IdeaDetail/${id}`);
  };

  return (
    <main
      className="w-[330px] h-[456px] mb-10 border-2 border-gray-100 rounded-2xl bg-white shadow-lg"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="flex p-5 flex-col items-center justify-center relative">
        <p className="w-auto h-12 p-1 px-3 text-xl bg-[#FFCF4A] rounded-xl text-black flex items-center justify-center">
          {title}
        </p>
        <p
          className="mt-5 h-[90px] text-lg text-center text-black"
          style={{ display: "flex", alignItems: "center" }}
        >
          {explain.length > 50 ? `${explain.slice(0, 50)}...` : explain}
        </p>
        <div className="flex mt-4 space-x-2">
          {keyWord1 && (
            <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] flex items-center justify-center">
              {keyWord1}
            </p>
          )}
          {keyWord2 && (
            <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] flex items-center justify-center">
              {keyWord2}
            </p>
          )}{" "}
          {keyWord3 && (
            <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] flex items-center justify-center">
              {keyWord3}
            </p>
          )}
        </div>
      </div>
      <div className="w-[328px] h-[215px] bg-[#FFF5DB] rounded-b-xl overflow-hidden">
        <div className="flex items-center justify-center mt-[-10px]">
          <Image src={polygon8} alt="polygon8" width={50} />
        </div>
        <div className="flex items-center justify-center mt-12">
          <svg width={60} height={60}>
            <circle cx="30" cy="30" r="30" fill={image || "#FFCF4A"} />
          </svg>
        </div>
        <div className="relative">
          <Image
            src="/profile_emptybg.svg"
            alt="프로필"
            width={5}
            height={5}
            layout="fixed"
          ></Image>
        </div>
        <p className="mt-5 text-lg text-center text-black">{name}</p>
      </div>
    </main>
  );
};

export default IdeaContent;
