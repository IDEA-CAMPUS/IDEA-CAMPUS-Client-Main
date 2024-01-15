"use client";

import "next/link";
import Header from "../components/layout/Header";
import Image from "next/image";
import GradientBackgroundmyPage from "@/assests/images/graidentBackgroundmyPage.png";
import { NavBar } from "../components/components/naviBar";
import { usePathname, useRouter } from "next/navigation";

const IdeaManage = () => {
  const router = useRouter();
  const data = [
    {
      title: "익명 편지 아이디어",
      category: "아이디어 존",
      date: "2023-01-01",
    },
    { title: "아이디어 존", category: "프로젝트 갤러리", date: "2023-11-29" },
    { title: "새로운 아이디어", category: "아이디어 존", date: "2023-12-15" },
    { title: "프로젝트 소개", category: "프로젝트 갤러리", date: "2022-10-05" },
    { title: "디자인 아이디어", category: "아이디어 존", date: "2022-07-20" },
    { title: "개발 관련 이슈", category: "기술 블로그", date: "2022-09-08" },
    { title: "코딩 팁", category: "기술 블로그", date: "2022-03-02" },
    {
      title: "프로젝트 업데이트",
      category: "프로젝트 갤러리",
      date: "2022-06-12",
    },
    { title: "행사 안내", category: "커뮤니티", date: "2022-04-18" },
    { title: "유용한 리소스", category: "기술 블로그", date: "2022-08-25" },
  ];

  return (
    <div>
      <NavBar />
      <div className="flex flex-col w-[100vw] items-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center mt-12 w-[71vw] z-20">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row">
              <Image
                src="/Profile.svg"
                width={60}
                height={60}
                alt="Logo"
              ></Image>
              <div className="ml-4">
                <p className="text-2xl text-black">김명지</p>
                <p className="text-base font-medium text-gray-600">
                  소속 동아리 : UMC
                </p>
              </div>
            </div>
            <button
              className="bg-purple-500 hover:bg-purple-600 active:bg-purple-800 text-white px-4 py-1 rounded-2xl shrink-0"
              onClick={() => router.push("/myPage/profileChange")}
            >
              프로필 수정
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[71vw] mt-10 ">
          <div className="text-2xl font-semibold items-start font-semibolds text-purple-500">
            나의 게시물
          </div>
          <div className="flex flex-col mt-4 items-stretch justify-stretch w-[71vw] bg-[#FFFFFF] rounded-2xl shadow-md shadow-purple-200">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="text-black ">
                  <th className="py-2 px-4 w-2/4 ">제목</th>
                  <th className="py-2 px-4 w-1/4 ">분류</th>
                  <th className="py-2 px-4 w-1/4 ">등록일</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.title}>
                    <td className="py-2 px-4 text-black">{item.title}</td>
                    <td className="py-2 px-4  text-black">{item.category}</td>
                    <td className="py-2 px-4  text-black">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Image
        src={GradientBackgroundmyPage}
        alt="배경색"
        className="w-full object-cover bg-[#FAFAFA]"
      ></Image>
    </div>
  );
};

export default IdeaManage;
