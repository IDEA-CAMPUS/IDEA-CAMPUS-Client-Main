"use client";

import React, { useState } from "react";
import Image from "next/image";
import IdeaZoneBackground from "public/IdeaZone/IdeaZoneBackground.svg";
import FlowerGray from "public/IdeaZone/FlowerGray.svg";
import Flower from "public/IdeaZone/Flower.svg";
import IdeaZoneIcon from "public/IdeaZone/IdeaZoneIcon.svg";

import KeywordButton from "@/app/_components/Gallery/KeywordButton";
import TextButton from "@/app/_components/IdeaZone/TextButotn";
import SubmitButton from "@/app/_components/IdeaZone/SubmitButton";
import IdeaContent from "@/app/_components/IdeaZone/IdeaContent";

const IdeaZone = () => {
  const [currentSort, setCurrentSort] = useState<"new" | "view">("new");

  const handleTextButtonClick = (sortType: "new" | "view") => {
    setCurrentSort(sortType);
  };

  const contents = [
    {
      title: "test1",
      image: "/Profile.svg",
      keyword2: "동아리",
      keyword3: "it",
      name: "test",
      explain:
        "이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다",
    },
    {
      title: "test2",
      image: "/Profile.svg",
      keyword1: "앱",
      keyword2: "앱",
      keyword3: "앱",
      name: "test",
      explain:
        "이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다",
    },
    {
      title: "test1",
      image: "/Profile.svg",
      keyword1: "앱",
      keyword3: "앱",
      name: "test",
      explain:
        "이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다",
    },
    {
      title: "test1",
      image: "/Profile.svg",
      keyword1: "앱",
      keyword2: "앱",
      keyword3: "앱",
      name: "test",
      explain:
        "이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다",
    },
  ];

  const chunkSize = 3;
  const chunkedContents = Array.from(
    { length: Math.ceil(contents.length / chunkSize) },
    (_, index) => contents.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return (
    <main className="bg-white w-full text-black flex flex-col items-center mx-auto">
      <div className="items-start">
        <Image
          className="flex-shrink-0"
          src={IdeaZoneBackground}
          alt="ideaZoneBackground"
        />
      </div>
      <div className="absolute mt-12 ">
        <div className="w-[1204px] h-[400px] bg-gray-300">banner</div>
        <div className="mt-24 text-center text-black">
          <div className="flex items-center justify-center">
            <p className="ml-8 text-3xl font-bold">아이디어 존</p>
            <Image
              src={IdeaZoneIcon}
              alt={"projectGalleryIcon"}
              className="mb-5"
            />
          </div>
          <p className="mt-8 text-xl">
            새로운 아이디어가 당신을 기다리고 있어요. <br />
            아이디어 캠퍼스에 입학한 여러 글을 둘러보고
            <br />
            협업을 제안해보는 건 어떠세요?
          </p>
        </div>
      </div>
      <div className="absolute mt-[370px] flex items-center justify-between w-full">
        <div className="flex-shrink-0 ml-80">
          <Image src={FlowerGray} alt={"snowGray"} />
        </div>
        <div className="flex-shrink-0 mr-80 mt-80">
          <Image src={Flower} alt={"snow"} />
        </div>
      </div>

      <div className="mx-24 mt-12">
        <h1 className="font-bold text-3xl">추천 아이디어</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex">
            <TextButton
              title={"최신순"}
              isHover={currentSort === "new"}
              onClick={() => handleTextButtonClick("new")}
            />
            <p className="text-yellow-500 text-lg font-bold mt-1">|</p>
            <TextButton
              title={"조회순"}
              isHover={currentSort === "view"}
              onClick={() => handleTextButtonClick("view")}
            />
          </div>
          {/* 핸들러 구현 */}
          <div>
            <SubmitButton title="등록 하기" />
          </div>
        </div>
        <div className="mt-10 ml-10 mr-10">
          {chunkedContents.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="flex space-x-20">
              {chunk.map((content, contentIndex) => (
                <IdeaContent
                  key={contentIndex}
                  title={content.title}
                  image={content.image}
                  keyword1={content.keyword1 || ""}
                  keyword2={content.keyword2 || ""}
                  keyword3={content.keyword3 || ""}
                  name={content.name}
                  explain={content.explain}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default IdeaZone;
