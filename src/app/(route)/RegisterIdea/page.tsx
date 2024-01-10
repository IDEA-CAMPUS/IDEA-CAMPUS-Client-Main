"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import Image from "next/image";

import RegisterIdeaZoneBackground from "public/IdeaZone/RegisterIdeaZoneBackground.svg";
import KeywordButton from "@/app/_components/Gallery/KeywordButton";
import DeleteButton from "public/ProjectGallery/DeleteButton.svg";
import SubmitButton from "@/app/_components/IdeaZone/SubmitButton";
import FixButton from "@/app/_components/IdeaZone/FixButton";

const RegisterIdea = () => {
  const [images, setImages] = useState<
    Array<{ name: string; url: string; size: string }>
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFixed, setIsFixed] = useState<Boolean>(false);

  const handleUpload = () => {
    // 여기에 파일 업로드 로직 추가
    if (images) {
      console.log("Upload image:", images);
      // 이 부분에 실제로 서버로 이미지를 업로드하는 로직을 추가할 수 있습니다.
      // 서버로의 업로드를 위해 fetch 또는 axios 등을 사용할 수 있습니다.
    }
  };

  return (
    <main className="bg-[#FFFDF6] w-full text-black flex flex-col items-center mx-auto">
      <div className="items-start">
        <Image
          src={RegisterIdeaZoneBackground}
          alt="projectgallerybackground1"
        />
      </div>
      <div className="mt-40 ml-24 mr-24 w-full absolute">
        <p className=" text-center text-4xl font-bold">아이디어 등록하기</p>
        <p className="text-xl text-center mt-10 ">
          당신의 아이디어를 마음껏 뽐내주세요.
        </p>
      </div>
      <div className="mt-[-150px] mb-20 py-20 px-10 w-[1000px] h-auto border-2 border-gray-100 rounded-2xl  shadow-lg bg-white">
        <p className="text-black font-bold text-2xl">아이디어 명칭</p>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[650px] p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="15글자 이내의 프로젝트 제목을 입력해주세요."
        />
        <p className="mt-5 text-black font-bold text-2xl">간단 설명</p>
        <textarea
          style={{ resize: "none" }}
          className="bg-[#F5F5F5] h-24 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          placeholder="50글자 이내의 간단 설명을 입력해주세요. 화면에 노출되는 설명입니다."
        />
        <p className="mt-12 text-black font-bold text-2xl">키워드</p>
        <div className="flex space-x-2">
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[100px] p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="5글자 이내."
          />
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[100px] p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="5글자 이내."
          />
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[100px] p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="5글자 이내."
          />
        </div>

        <p className="mt-12 text-black font-bold text-2xl">상세 설명</p>
        <textarea
          style={{ resize: "none" }}
          className="bg-[#F5F5F5] h-80 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          placeholder="상세 설명을 입력해주세요."
        />

        <div className="flex mt-12">
          <p className="text-black font-bold text-2xl">관련 링크</p>
          <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
        </div>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="해당 아이디어 관련 링크를 자유롭게 업로드 해주세요."
        />
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
        />

        {
          //건든 흔적 있는 거 추가 (이거 설마 전부 하나씩 추가해야됨?)
          <div className="flex items-center justify-center space-x-5 mt-24">
            <FixButton title="취소하기" onClick={handleUpload} />
            <SubmitButton title="등록하기" />
          </div>
        }
      </div>
    </main>
  );
};

export default RegisterIdea;
