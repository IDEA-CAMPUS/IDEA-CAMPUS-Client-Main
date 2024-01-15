import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface SubmitProps {
  title: string;
  url?: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitProps> = ({ title, url, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (localStorage.getItem("login-token") !== null) {
      if (onClick) onClick();
      // 클릭 시 다음 페이지로 이동
      if (url) router.push(url);
    } else {
      alert("로그인 후 이용해주세요");
      router.push("/login");
    }
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
