import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface FixButtonProps {
  title: string;
  onClick?: () => void;
  url?: string; // url은 반드시 필요하다고 가정
}

const FixButton: React.FC<FixButtonProps> = ({ title, url, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    // 클릭 시 다음 페이지로 이동
    if (url) router.push(url);
  };
  return (
    <button
      className="w-20 h-9 p-1 text-xs bg-gray-400 hover:bg-[#FFE292] rounded-xl text-white"
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default FixButton;
