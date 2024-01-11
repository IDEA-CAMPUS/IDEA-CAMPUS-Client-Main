import { loginState } from "@/app/_api/naviBar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleRoute = (link: string) => {
    if (router) {
      router.push(link);
    }
  };

  useEffect(() => {
    const response = loginState();
    console.log("response", response);
  }, []);

  return (
    <div className="w-full h-[70px] bg-white box-border flex items-center justify-center">
      <div className="flex">
        <div className="flex gap-[64px] items-center">
          <img
            src="/logo.svg"
            className="w-[108px] h-[40px]"
            onClick={() => handleRoute("/")}
          ></img>
          <div
            className="text-[#B034F7] font-bold text-[18px] flex cursor-pointer"
            onClick={() => router.push("/IdeaZone")}
          >
            아이디어 존
          </div>
          <div
            className="font-bold text-[18px] flex cursor-pointer"
            onClick={() => router.push("/IdeaZone/ProjectGallery")}
          >
            프로젝트 갤러리
          </div>
          <div className="font-bold text-[18px] flex cursor-pointer">
            동아리·학회
          </div>
        </div>
        <div className="flex justify-end gap-[42px] ml-[630px] items-center">
          <div
            className="font-bold text-[18px] flex cursor-pointer"
            onClick={() => handleRoute("/login")}
          >
            로그인
          </div>
          <div
            className="font-bold text-[18px] flex cursor-pointer"
            onClick={() => handleRoute("/regist")}
          >
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};
