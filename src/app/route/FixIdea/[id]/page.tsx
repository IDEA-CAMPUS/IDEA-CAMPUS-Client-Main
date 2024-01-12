"use client";

import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import Image from "next/image";

import registerIdeaZoneBackground from "public/ideazone/registerIdeaZoneBackground.svg";
import SubmitButton from "@/app/components/ideazone/SubmitButton";
import FixButton from "@/app/components/ideazone/FixButton";
import { NavBar } from "@/app/components/components/naviBar";

import { usePathname, useRouter } from "next/navigation";
import getIdeaDetail from "@/app/api/ideazone/GetIdeaDetail";
import fixIdea from "@/app/api/ideazone/FixIdea";

interface IdeaFormData {
  title: string;
  simpleDescription: string;
  keyWord: string;
  detailedDescription: string;
  url1: string;
  url2: string;
}
interface keyrwordFormData {
  keyWord1: string;
  keyWord2: string;
  keyWord3: string;
}

const FixIdea = () => {
  //id가져오는 문자열 함수 ddd
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [images, setImages] = useState<
    Array<{ name: string; url: string; size: string }>
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const response = getIdeaDetail(id);
  const ideaFixData = response?.information;

  useEffect(() => {
    if (ideaFixData) {
      setIdeaData({
        title: ideaFixData.title,
        simpleDescription: ideaFixData.simpleDescription,
        keyWord: ideaFixData.keyWord,
        detailedDescription: ideaFixData.detailedDescription,
        url1: ideaFixData.url1,
        url2: ideaFixData.url2,
      });
      setkeyWordData({
        keyWord1: "", // You can set these to ideaFixData.keyWord1 if needed
        keyWord2: "",
        keyWord3: "",
      });
    }
  }, [ideaFixData]);

  const [ideaData, setIdeaData] = useState<IdeaFormData>({
    title: "",
    simpleDescription: "",
    keyWord: "",
    detailedDescription: "",
    url1: "",
    url2: "",
  });

  const [keyWordData, setkeyWordData] = useState<keyrwordFormData>({
    keyWord1: "",
    keyWord2: "",
    keyWord3: "",
  });

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIdeaData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlekeyWordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setkeyWordData((prevData) => ({ ...prevData, [name]: value }));

    // 각각의 키워드 값이 비어있지 않은 경우에만 추가
    setIdeaData((prevData) => ({
      ...prevData,
      keyWord: [
        keyWordData.keyWord1,
        keyWordData.keyWord2,
        keyWordData.keyWord3,
      ]
        .filter(Boolean)
        .join(", "),
    }));
  };

  const isFormValid = () => {
    // 필수 필드인 title, simpleDescription, keyWord, detailedDescription이 모두 입력되었는지 검사
    return (
      ideaData.title.trim() !== "" &&
      ideaData.simpleDescription.trim() !== "" &&
      ideaData.keyWord.trim() !== "" &&
      ideaData.detailedDescription.trim() !== "" &&
      (keyWordData.keyWord1 !== "" ||
        keyWordData.keyWord2 !== "" ||
        keyWordData.keyWord3 !== "")
    );
  };

  const handleFormSubmit = async () => {
    try {
      // 필수 필드가 모두 입력되었는지 확인
      if (isFormValid()) {
        // 여기에 파일 업로드 로직 추가
        console.log("Upload image:", ideaData);
        await fixIdea(ideaData, id);
        // Additional logic after successful upload, if needed
        router.push("/IdeaZone");
      } else {
        // 필수 필드 중 하나라도 비어있다면 사용자에게 알림 등을 표시할 수 있습니다.
        alert("선택항목을 제외한 모든 항목을 입력해주세요.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // Display an error message to the user, e.g., using a toast or alert
      alert("이미지 업로드 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <form className="bg-[#FFFDF6] w-full text-black flex flex-col items-center mx-auto">
      <NavBar />
      <div className="items-start">
        <Image
          src={registerIdeaZoneBackground}
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
          name="title"
          value={ideaData.title}
          onChange={handleInputChange}
        />
        <p className="mt-5 text-black font-bold text-2xl">간단 설명</p>
        <textarea
          style={{ resize: "none" }}
          className="bg-[#F5F5F5] h-24 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          placeholder="50글자 이내의 간단 설명을 입력해주세요. 화면에 노출되는 설명입니다."
          name="simpleDescription"
          value={ideaData.simpleDescription}
          onChange={handleInputChange}
        />
        <p className="mt-12 text-black font-bold text-2xl">키워드</p>
        <div className="flex space-x-2">
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[100px] p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="5글자 이내."
            name="keyWord1"
            value={keyWordData.keyWord1}
            onChange={handlekeyWordChange}
          />
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[100px] p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="5글자 이내."
            name="keyWord2"
            value={keyWordData.keyWord2}
            onChange={handlekeyWordChange}
          />
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[100px] p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="5글자 이내."
            name="keyWord3"
            value={keyWordData.keyWord3}
            onChange={handlekeyWordChange}
          />
        </div>

        <p className="mt-12 text-black font-bold text-2xl">상세 설명</p>
        <textarea
          style={{ resize: "none" }}
          className="bg-[#F5F5F5] h-80 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          placeholder="상세 설명을 입력해주세요."
          name="detailedDescription"
          value={ideaData.detailedDescription}
          onChange={handleInputChange}
        />

        <div className="flex mt-12">
          <p className="text-black font-bold text-2xl">관련 링크</p>
          <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
        </div>
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          placeholder="해당 아이디어 관련 링크를 자유롭게 업로드 해주세요."
          name="url1"
          value={ideaData.url1}
          onChange={handleInputChange}
        />
        <input
          className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
          type="text"
          name="url2"
          value={ideaData.url2}
          onChange={handleInputChange}
        />

        {
          //건든 흔적 있는 거 추가 (이거 설마 전부 하나씩 추가해야됨?)
          <div className="flex items-center justify-center space-x-5 mt-24">
            <FixButton title="취소하기" url="/IdeaZone" />
            <SubmitButton title="등록하기" onClick={handleFormSubmit} />
          </div>
        }
      </div>
    </form>
  );
};

export default FixIdea;
