import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface SubmitProps {
  title: string;
  url?: string; // url은 반드시 필요하다고 가정
}

const SubmitButton: React.FC<SubmitProps> = ({ title, url }) => {
  const router = useRouter();

  const handleClick = () => {
    // 클릭 시 다음 페이지로 이동
    if (url) router.push(url);
  };

  return (
    <button
      className="w-20 h-9 p-1 text-xs bg-[#FFE292] hover:bg-[#FFCF4A] rounded-xl text-black"
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default SubmitButton;
