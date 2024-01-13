"use client";

import getClubDetail from "@/app/api/club/GetClubDetail";
import { NavBar } from "@/app/components/components/naviBar";
import Header from "@/app/components/layout/Header";
import GradientBackground from "@/assests/images/gradientBackground.png";
import ThumbnailImage from "@/assests/images/Image.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

const RegistrationCompleted = () => {
  const pathname = usePathname();
  //id가져오는 문자열 함수
  const id = pathname.split("/")[3];

  const clubData = getClubDetail(id)?.information;

  const thumbnail = clubData?.thumbnail ?? "";
  const otherImages = clubData?.otherImages ?? [];

  const images: string[] = [thumbnail, ...otherImages];

  const router = useRouter();
  return (
    <div>
      <NavBar />
      <div className="flex flex-col w-[100vw] items-center bg-[#FAFAFA]">
        {/* 등록폼 박스 만들기 */}
        <Image
          src={GradientBackground}
          alt="gradientBackground"
          className="h-3/5 absolute"
        />
        <div className="flex flex-col items-center mt-12 w-[71vw] z-20">
          {/* 텍스트 */}
          <div className="flex flex-col items-center">
            {/* 여기 프로필 색깔 코드 들어가야됨. */}
            {/* <Image
              src={clubData!.thumbnail}
              width={200}
              height={200}
              alt="Logo"
            /> */}
            <h5 className="text-base text-center mt-2">{clubData?.nickname}</h5>
            <h1 className="text-5xl mt-3 text-center">{clubData?.title}</h1>
          </div>
        </div>
        <div className="flex justify-center  mt-20 bg-white rounded-xl z-10 shadow-md">
          <div className="flex-col items-start w-[71vw] p-8 z-20">
            <p className="text-lg text-left font-semibold text-black mt-4 ">
              상세설명
            </p>
            <div
              id="formInput1"
              className="bg-[#F5F5F5] h-[400px] mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-auto p-2 border-2 border-[#A6A6A6] rounded-xl"
            >
              <p className="text-black">{clubData?.description}</p>
            </div>
            <p className="text-lg font-semibold text-black inline-block mr-1 mt-4">
              관련이미지
            </p>
            <div className="grid grid-rows-2 grid-cols-4 gap-5 mt-4">
              {images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="flex p-2 items-center justify-center w-[200px] h-[200px] border-2 rounded-xl"
                >
                  <Image
                    src={image}
                    alt="01"
                    className="bg-gray-300 rounded-md"
                    width={1000}
                    height={1000}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center gap-4 mt-8">
              <button className="bg-gray-400 hover:bg-gray-500 active:bg-gray-800 text-white px-4 py-2 w-22 h-10 rounded-2xl shrink-0">
                수정하기
              </button>
              <button className="bg-gray-400 hover:bg-gray-500 active:bg-gray-800 px-4 py-2 w-22 h-10 rounded-2xl shrink-0">
                삭제하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCompleted;
