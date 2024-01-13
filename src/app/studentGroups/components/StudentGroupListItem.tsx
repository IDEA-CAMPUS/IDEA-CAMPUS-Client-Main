import React from "react";
import Image from "next/image";
import GradientBackground from "@/assests/images/gradientBackground.png";
import { useRouter } from "next/navigation";

interface contentProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  nickname: string;
  thumbnail: string | null;
}
const StudentGrouplistItem: React.FC<contentProps> = ({
  id,
  title,
  description,
  createdAt,
  nickname,
  thumbnail,
}) => {
  const formatDate = (createdAt: string): string => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}`;
  };

  const router = useRouter();

  const handleClick = () => {
    router.push(`/studentGroups/registrationCompleted/${id}`);
  };

  console.log(thumbnail);

  return (
    <div
      className="bg-white flex w-full justify-between mt-5 p-6 rounded-xl shadow-lg"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div>
        <h5 className="text-2xl text-[#000000]">{title}</h5>
        <h3 className="text-lg text-[#6B6B6B] mt-2.5">{description}</h3>
        <h1 className="text-sm text-[#A6A6A6] mt-5">
          {formatDate(createdAt)} | {nickname}
        </h1>
      </div>
      <Image
        src={"/" + thumbnail} // 슬래시(/)로 시작하는 상대 경로 사용
        width={50}
        height={50}
        alt="gradientBackground"
        className="w-28 h-28"
      />
    </div>
  );
};

export default StudentGrouplistItem;
