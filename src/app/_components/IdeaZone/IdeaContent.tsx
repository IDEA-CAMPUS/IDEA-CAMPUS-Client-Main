import Image from "next/image";
import React from "react";

import Polygon8 from "public/IdeaZone/Polygon 8.svg";
import Profile from "public/Profile.svg";

interface IdeaContentProps {
  title: string;
  image: string;
  keyword1: string;
  keyword2: string;
  keyword3: string;
  name: string;
  explain: string;
}

const IdeaContent: React.FC<IdeaContentProps> = ({
  title,
  image,
  keyword1,
  keyword2,
  keyword3,
  name,
  explain,
}) => {
  return (
    <main className="w-[330px] h-[456px] mb-10 border-2 border-gray-100 rounded-2xl bg-white shadow-lg">
      <div className="flex p-5 flex-col items-center justify-center relative">
        <p className="w-24 h-12 p-1 text-xl bg-[#FFCF4A] rounded-xl text-black flex items-center justify-center">
          {title}
        </p>
        <p className="mt-5 text-lg text-center text-black">
          {explain.length > 50 ? `${explain.slice(0, 50)}...` : explain}
        </p>
        <div className="flex mt-4 space-x-2">
          {keyword1 && (
            <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] flex items-center justify-center">
              {keyword1}
            </p>
          )}
          {keyword2 && (
            <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] flex items-center justify-center">
              {keyword2}
            </p>
          )}{" "}
          {keyword3 && (
            <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] flex items-center justify-center">
              {keyword3}
            </p>
          )}
        </div>
      </div>
      <div className="w-[328px] h-[215px] bg-[#FFF5DB] rounded-b-xl overflow-hidden">
        <div className="flex items-center justify-center mt-[-10px]">
          <Image src={Polygon8} alt="polygon8" width={50} />
        </div>
        <div className="flex items-center justify-center mt-12">
          <Image src={Profile} alt="polygon8" />
        </div>
        <p className="mt-5 text-lg text-center text-black">{name}</p>
      </div>
    </main>
  );
};

export default IdeaContent;
