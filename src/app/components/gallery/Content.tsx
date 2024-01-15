import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface contentProps {
  id: number;
  booleanWeb: boolean;
  booleanApp: boolean;
  booleanAi: boolean;
  team: string;
  title: string;
  simpleDescription: string;
  thumbnail: string;
  hits: number;
  createdAt: string;
}
const Content: React.FC<contentProps> = ({
  id,
  booleanWeb,
  booleanApp,
  booleanAi,
  team,
  title,
  simpleDescription,
  thumbnail,
  hits,
  createdAt,
}) => {
  const router = useRouter();

  const handleClick = () => {
    // 클릭 시 해당 id를 이용하여 새로운 페이지로 이동
    router.push(`/ProjectDetail/${id}`);
  };
  return (
    <main
      className="w-[330px] h-[456px] mb-10 border-2 border-gray-100 rounded-2xl bg-white p-5 shadow-lg"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
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
          <Image
            src={thumbnail}
            alt=""
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
        {booleanWeb && (
          <p className="w-9 h-8 rounded-full bg-[#D085FA] border-2 border-purple-500 flex items-center justify-center">
            웹
          </p>
        )}
        {booleanApp && (
          <p className="w-9 h-8 rounded-full bg-[#D085FA] border-2 border-purple-500 flex items-center justify-center">
            앱
          </p>
        )}
        {booleanAi && (
          <p className="w-9 h-8 rounded-full bg-[#D085FA] border-2 border-purple-500 flex items-center justify-center">
            Ai
          </p>
        )}
        {team !== "없음" && (
          <p className="h-8 rounded-full bg-yellow-300 border-2 border-yellow-500 flex items-center justify-center px-4">
            {team}
          </p>
        )}
      </div>
      <p className="p-1 mt-2 font-bold text-2xl">{title}</p>
      <p className="ml-5">
        {simpleDescription.length > 50
          ? `${simpleDescription.slice(0, 50)}...`
          : simpleDescription}
      </p>
    </main>
  );
};
export default Content;
