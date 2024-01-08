import Header from "@/app/_components/layout/Header";
import GradientBackground from "@/assests/images/gradientBackground.png";
import ThumbnailImage from "@/assests/images/Image.png";
import Image from "next/image";

import React from "react";

const registrationCompleted = () => {
  return (
    <div>
      <Header />
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
            <Image src="/Profile.svg" width={40} height={40} alt="Logo"></Image>
            <h5 className="text-base text-center mt-2">사용자 닉네임</h5>
            <h1 className="text-5xl mt-3 text-center">
              제목이 들어갈 곳입니다.
            </h1>
          </div>
        </div>
        <div className="flex justify-center  mt-20 bg-white rounded-xl z-10 shadow-md">
          <div className="flex-col items-start w-[71vw] p-8 z-20">
            <p className="text-lg text-left font-semibold text-black">제목</p>
            <input
              type="text"
              id="formInput1"
              name="formInput1"
              className="w-full  px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="10글자 이내의 아이디어 제목을 입력해주세요"
            />
            <p className="text-lg text-left font-semibold text-black mt-4 ">
              상세설명
            </p>
            <textarea
              id="formInput1"
              name="formInput1"
              className="w-full h-[342px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black place-content-start"
              placeholder="상세 설명을 입력해주세요"
            />
            <p className="text-lg font-semibold text-black inline-block mr-1 mt-4">
              관련이미지
            </p>
            <div className="grid grid-rows-2 grid-cols-4 gap-4 mt-4">
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
              <Image
                src={ThumbnailImage}
                alt="01"
                className="bg-gray-300 rounded-md"
              />
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

export default registrationCompleted;
