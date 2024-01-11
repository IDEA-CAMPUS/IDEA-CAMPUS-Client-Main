"use client";

import React, { useState, ChangeEvent, useRef } from "react";

import ProjectGalleryRegisterBackGround from "public/ProjectGallery/ProjectGalleryRegisterBackGround.svg";
import Image from "next/image";
import keyWordButton from "@/app/_components/Gallery/keyWordButton";
import DeleteButton from "public/ProjectGallery/DeleteButton.svg";
import SubmitButton from "@/app/_components/Gallery/SubmitButton";
import FixButton from "@/app/_components/Gallery/FixButton";

const RegisterProject = () => {
  const [images, setImages] = useState<
    Array<{ name: string; url: string; size: string }>
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFixed, setIsFixed] = useState<Boolean>(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageSize = `${(file.size / 1024).toFixed(2)} KB`;
        setImages((prevImages) => [
          ...prevImages,
          { name: file.name, url: reader.result as string, size: imageSize },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = () => {
    // 여기에 파일 업로드 로직 추가
    if (images) {
      console.log("Upload image:", images);
      // 이 부분에 실제로 서버로 이미지를 업로드하는 로직을 추가할 수 있습니다.
      // 서버로의 업로드를 위해 fetch 또는 axios 등을 사용할 수 있습니다.
    }
  };

  return (
    <main className="bg-[#FCF6FF] w-full text-black flex flex-col items-center mx-auto">
      <div className="items-start">
        <Image
          src={ProjectGalleryRegisterBackGround}
          alt="projectgallerybackground1"
        />
      </div>
      <div className="mt-40 ml-24 mr-24 w-full absolute">
        <p className="text-white text-center text-4xl font-bold">
          프로젝트 등록하기
        </p>
        <p className="text-xl text-center mt-10 text-white">
          당신의 프로젝트를 마음껏 자랑해주세요!
        </p>
      </div>
      <div className="mt-[-150px] mb-20 py-20 px-10 w-[1000px] h-auto border-2 border-gray-100 rounded-2xl  shadow-lg bg-white">
        <p className="text-black font-bold text-2xl">키워드</p>
        <div className="mt-3 space-x-4">
          <keyWordButton title={"앱"} />
          <keyWordButton title={"웹"} />
          <keyWordButton title={"AI"} />
        </div>
        <p className="mt-10 text-black font-bold text-2xl">프로젝트 명칭</p>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[650px] p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="15글자 이내의 프로젝트 제목을 입력해주세요."
        />
        <p className="mt-5 text-black font-bold text-2xl">간단 설명</p>
        <textarea
          style={{ resize: "none" }}
          className="bg-[#F5F5F5] h-24 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          placeholder="50글자 이내의 간단 설명을 입력해주세요. 창의 메인 화면에 올라갈 글입니다."
        />
        <p className="mt-12 text-black font-bold text-2xl">상세 설명</p>
        <textarea
          style={{ resize: "none" }}
          className="bg-[#F5F5F5] h-80 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          placeholder="상세 설명을 입력해주세요."
        />
        <p className="mt-12 text-black font-bold text-2xl">팀 정보</p>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="팀과 팀원들을 소개해주세요."
        />
        <div className="flex mt-12">
          <p className="text-black font-bold text-2xl">GitHub 링크</p>
          <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
        </div>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="해당 프로젝트의 GitHub 링크를 입력해주세요."
        />
        <div className="flex mt-12">
          <p className="text-black font-bold text-2xl">웹 주소</p>
          <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
        </div>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="해당 프로젝트의 웹 주소를 입력해주세요."
        />
        <div className="flex mt-12">
          <p className="text-black font-bold text-2xl">구글플레이 주소</p>
          <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
        </div>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="해당 프로젝트의 구글플레이 주소를 입력해주세요."
        />
        <p className="mt-20 text-black font-bold text-2xl">사진등록</p>
        <p className="mt-10 text-black text-xl">
          드래그 혹은 ‘파일 찾기’ 버튼을 통해 사진을 등록할 수 있습니다. <br />
          이미지는 1:1 사이즈로 업로드해주세요. 가장 상단의 이미지가 썸네일로
          등록됩니다.
        </p>
        <div className="bg-[#F5F5F5] h-80 mt-3 flex items-center justify-between focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl">
          <p className="absolute mt-60 mb-10 ml-[90px]">썸네일 미리보기</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {images.length === 0 ? (
                <div className="bg-white m-5 h-64 w-64 rounded-xl"></div>
              ) : (
                <div className="bg-gray-500 m-5 h-64 w-64 rounded-xl"></div>
              )}
              <div className="flex flex-col items-center">
                {images.map((image, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <p className="mr-2">
                      {image.name} ({image.size})
                    </p>
                    <button onClick={() => handleDeleteImage(index)}>
                      <Image src={DeleteButton} alt={"deleteButton"}></Image>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute mt-56 ml-[300px]">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <div className="ml-[500px] items-cente">
                <SubmitButton title="파일 찾기" onClick={handleButtonClick} />
              </div>
            </div>
          </div>
        </div>
        {
          //건든 흔적 있는 거 추가 (이거 설마 전부 하나씩 추가해야됨?)
          <div className="flex items-center justify-center space-x-5 mt-24">
            <FixButton title="취소하기" onClick={handleUpload} />
            <SubmitButton title="등록하기" onClick={handleUpload} />
          </div>
        }
      </div>
    </main>
  );
};

export default RegisterProject;
