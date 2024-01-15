"use client";

import { LoginState } from "@/app/api/naviBar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [color, setColor] = useState<string | undefined>("");
  const [nick, setNick] = useState<string | undefined>("");

  const pathname = usePathname();
  const router = useRouter();

  const handleRoute = (link: string) => {
    if (router) {
      router.push(link);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await LoginState();
        console.log("response", response);
        response?.check ? setIsLogin(true) : setIsLogin(false);
        setColor(response?.information?.color);
        setNick(response?.information?.nickname);
      } catch (error) {
        console.error("Error fetching login state:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[70px] bg-white box-border flex items-center justify-center">
      <div className="flex justify-around ">
        <div className="flex gap-[64px] items-center">
          <img
            src="/logo.svg"
            className="w-[108px] h-[40px] cursor-pointer"
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
            onClick={() => router.push("/ProjectGallery")}
          >
            프로젝트 갤러리
          </div>
          <div
            className="font-bold text-[18px] flex cursor-pointer"
            onClick={() => router.push("/studentGroups")}
          >
            동아리·학회
          </div>
        </div>
        <>
          {isLogin ? (
            <div className="flex justify-end gap-[42px] ml-[660px] items-center">
              <div
                className={`flex justify-center pt-[6px] w-[46px] h-[46px] rounded-[100px] bg-[${color}] z-0 cursor-pointer`}
                onClick={() => router.push("/myPage")}
              >
                <img
                  src="/user.svg"
                  className="w-[40px] h-[40px] z-10 cursor-pointer"
                  onClick={() => router.push("/myPage")}
                />
              </div>
              <div
                className="font-bold text-[18px] flex cursor-pointer"
                onClick={() => router.push("/myPage")}
              >
                {nick}
              </div>
            </div>
          ) : (
            <div className="flex justify-end gap-[42px] ml-[600px] items-center">
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
          )}
        </>
      </div>
    </div>
  );
};
