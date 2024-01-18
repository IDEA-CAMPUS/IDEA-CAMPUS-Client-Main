"use client";

import LogOut from "@/app/api/logout";
import { LoginState } from "@/app/api/naviBar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import profileImage from "@/../public/profileImage.png";
import Image from "next/image";
import SelectModal from "../myPage/SelectModal";

export const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [color, setColor] = useState<string | undefined>("");
  const [nick, setNick] = useState<string | undefined>("");
  const [showNavBar, setShowNavBar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleItemClick = () => {
    setShowNavBar(!showNavBar);
  };

  const handleMyPageClick = () => {
    router.push("/MyPage");
    setShowNavBar(false);
  };

  const handleLogoutClick = async () => {
    setIsModal(true);
    setShowNavBar(false);
  };

  const handleRoute = (link: string) => {
    if (router) {
      router.push(link);
    }
  };
  const nowPage = typeof window !== "undefined" ? window.location.pathname : "";

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
        // 오류 처리를 여기에 추가할 수 있습니다.
      }
    };
    fetchData();
    // console.log("window.location.pathname", window.location.pathname);
  }, []);

  return (
    <div className="h-[70px] text-black bg-white box-border flex items-center justify-between">
      <div className="flex ml-12 gap-[64px] items-center">
        <img
          src="/logo.svg"
          className="w-[108px] h-[40px] cursor-pointer"
          onClick={() => handleRoute("/")}
        ></img>
        <div
          className={` font-bold text-[18px] flex cursor-pointer ${
            nowPage === "/IdeaZone" ? "text-[#B034F7]" : ""
          }`}
          onClick={() => router.push("/IdeaZone")}
        >
          아이디어 존
        </div>
        <div
          className={` font-bold text-[18px] flex cursor-pointer ${
            nowPage === "/ProjectGallery" ? "text-[#B034F7]" : ""
          }`}
          onClick={() => router.push("/ProjectGallery")}
        >
          프로젝트 갤러리
        </div>
        <div
          className={` font-bold text-[18px] flex cursor-pointer ${
            nowPage === "/studentGroups" ? "text-[#B034F7]" : ""
          }`}
          onClick={() => router.push("/studentGroups")}
        >
          동아리·학회
        </div>
      </div>
      <div className="flex  gap-[42px] mr-12 items-center">
        {isLogin ? (
          <div className="flex gap-[42px] items-center">
            {/* <div
              className={`flex pt-[6px] w-[46px] h-[46px] rounded-[100px] bg-[${color}] z-0 cursor-pointer`}
              onClick={() => router.push("/MyPage")}
            >
              <img
                src="/user.svg"
                className="w-[40px] h-[40px] ml-1 z-10 cursor-pointer"
                onClick={() => router.push("/MyPage")}
              />
              
            </div> */}
            <div
              style={{
                backgroundColor: `${color}`,
              }}
              className={`w-[40px] h-[40px] rounded-[100%] relative`}
              onClick={() => router.push("/MyPage")}
            >
              <Image src={profileImage} alt="프로필이미지" className="mt-2" />
            </div>
            <div
              className="font-bold text-[18px] flex cursor-pointer"
              onClick={() => router.push("/MyPage")}
            >
              {nick}
            </div>

            {showNavBar && (
              <div className="absolute top-[50px] right-12 bg-white p-2 border rounded z-10">
                <button
                  className="block w-full text-left mb-2"
                  onClick={handleMyPageClick}
                >
                  My Page
                </button>
                <button
                  className="block w-full text-left"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-[42px] items-center">
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
      </div>
      {isModal && (
        <div className="min-h-screen z-20">
          <SelectModal
            text={"로그아웃 하시겠습니까?"}
            onClose={() => setIsModal(false)}
            onClick={() => setIsLogin(false)}
          />
        </div>
      )}
    </div>
  );
};
// ml-[600px]
