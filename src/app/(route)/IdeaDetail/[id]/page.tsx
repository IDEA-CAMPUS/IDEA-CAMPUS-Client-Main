"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import ideaDetailBackground from "public/ideazone/ideaDetailBackground.png";
import FixButton from "@/app/components/ideazone/FixButton";
import profile from "public/profile.svg";
import { usePathname, useRouter } from "next/navigation";
import GetIdeaDetail from "@/app/api/ideazone/GetIdeaDetail";
import splitkeyWords from "@/app/utils/seperateKeword";
import { NavBar } from "@/app/components/components/naviBar";
import DeleteIdea from "@/app/api/ideazone/DeleteIdea";
import GetCheckId from "@/app/api/ideazone/\bGetCheckId";

const IdeaDetail = () => {
  const pathname = usePathname();
  //id가져오는 문자열 함수g
  const id = Number(pathname.split("/")[2]);

  const ideaData = GetIdeaDetail(id)?.information;

  const checkId = GetCheckId(id);
  const router = useRouter();

  const handleFix = () => {
    router.push(`/FixIdea/${id}`);
  };

  const handleDelete = () => {
    try {
      DeleteIdea(ideaData!.id);
      alert("성공적으로 삭제되었습니다.");
      router.push("/IdeaZone");
    } catch (error) {
      console.error("Error fetching ideaData:", error);
    }
  };

  return (
    <main className="bg-white min-h-screen w-full text-black flex flex-col items-center mx-auto">
      <NavBar />
      <div className="mt-[100px] h-full z-10">
        <Image
          src={ideaDetailBackground}
          alt="ideaDetailBackground"
          width={1005}
        />
      </div>
      <div className="mt-[-300px] mx-32 mb-20 w-[1000px] h-auto z-20">
        <div className="flex items-center justify-between">
          <div className="mx-32">
            <p className="mt-7 text-black text-md">{ideaData?.hits}명 조회</p>
            <p className="text-black font-bold text-5xl">{ideaData?.title}</p>
            <p className="mt-3 text-black text-lg">
              {ideaData?.simpleDescription}
            </p>
            <div className="flex mt-2 w-auto space-x-3">
              {ideaData?.keyWord[0] && (
                <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] shadow-lg flex items-center justify-center">
                  {ideaData?.keyWord[0]}
                </p>
              )}
              {ideaData?.keyWord[1] && (
                <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] shadow-lg flex items-center justify-center">
                  {ideaData?.keyWord[1]}
                </p>
              )}
              {ideaData?.keyWord[2] && (
                <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] shadow-lg flex items-center justify-center">
                  {ideaData?.keyWord[2]}
                </p>
              )}
            </div>
          </div>
          <div className="mr-24 items-center justify-center flex flex-col">
            <Image src="/user.svg" alt="profile" width={70} height={70} />
            <p className="mt-3 text-black text-lg">{ideaData?.nickName}</p>
          </div>
        </div>
      </div>
      <div className="mt-[-300px] mb-20 w-[1000px] h-auto border-2 border-gray-100 rounded-2xl shadow-lg bg-white">
        <div className="flex flex-col mx-32 mt-[400px] mb-20">
          <p className="text-black font-bold text-2xl">상세 설명</p>
          <p className="mt-7 text-black text-lg">
            {ideaData?.detailedDescription}
          </p>
          <p className="mt-20 text-black font-bold text-2xl">관련 링크</p>
          <p className="mt-7 text-black text-lg"> {ideaData?.url1}</p>
          <p className="mt-7 text-black text-lg"> {ideaData?.url2}</p>
        </div>
        {/* 바뀐 거 있나 확인 */}
        {checkId && (
          <div className="items-center justify-center mb-20 mt-32 flex space-x-5">
            <button
              className="w-20 h-9 p-1 text-xs bg-gray-400 hover:bg-[#FFE292] rounded-xl text-white"
              type="button"
              onClick={() => handleFix()}
            >
              수정하기
            </button>
            <button
              className="w-20 h-9 p-1 text-xs bg-gray-400 hover:bg-[#FFE292] rounded-xl text-white"
              type="button"
              onClick={() => handleDelete()}
            >
              삭제하기
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
export default IdeaDetail;
