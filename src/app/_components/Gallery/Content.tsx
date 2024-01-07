import Image from "next/image";
import React from "react";

interface contentProps {
  title: string;
  image: string;
  keyword: string;
  team: string;
  explain: string;
}

const Content: React.FC<contentProps> = ({
  title,
  image,
  keyword,
  team,
  explain,
}) => {
  return (
    <main className="w-[330px] h-[456px] mb-10 border-2 border-gray-100 rounded-2xl bg-white p-5 shadow-lg">
      <div
        className="flex items-center justify-center"
        style={{
          width: "100%",
          height: "60%",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div className="flex items-center justify-center">
          <Image src={image} alt="" width={250} height={250} layout="fixed" />
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
        <p className="w-9 h-8 rounded-full bg-[#D085FA] border-2 border-purple-500 flex items-center justify-center">
          {keyword}
        </p>
        {team !== "없음" && (
          <p className="h-8 rounded-full bg-yellow-300 border-2 border-yellow-500 flex items-center justify-center px-4">
            {team}
          </p>
        )}
      </div>
      <p className="p-1 mt-2 font-bold text-2xl">{title}</p>
      <p className="ml-5">
        {explain.length > 50 ? `${explain.slice(0, 50)}...` : explain}
      </p>
    </main>
  );
};
export default Content;
