"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import IdeaZoneBackground from "public/IdeaZone/IdeaZoneBackground.svg";
import FlowerGray from "public/IdeaZone/FlowerGray.svg";
import Flower from "public/IdeaZone/Flower.svg";
import IdeaZoneIcon from "public/IdeaZone/IdeaZoneIcon.svg";

import TextButton from "@/app/_components/IdeaZone/TextButotn";
import SubmitButton from "@/app/_components/IdeaZone/SubmitButton";
import IdeaContent from "@/app/_components/IdeaZone/IdeaContent";
import { NavBar } from "@/app/_components/components/naviBar";
import getIdea from "@/app/_api/IdeaZone/GetIdea";
import splitKeywords from "@/app/_utils/seperateKeword";

interface Idea {
  id: number;
  title: string;
  simpleDescription: string;
  keyWord: string;
  nickName: string;
  color: string;
  hits: number;
  createdAt: string;
}

const IdeaZone = () => {
  const [currentSort, setCurrentSort] = useState<"new" | "view">("new");
  const ideaData = getIdea();
  const ideaList = ideaData?.information;

  const chunkSize = 3;
  // 최신순 또는 조회순으로 정렬된 아이디어 리스트
  const sortedIdeaList = useMemo(() => {
    if (currentSort === "new") {
      return ideaList
        ?.slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    } else if (currentSort === "view") {
      return ideaList?.slice().sort((a, b) => b.hits - a.hits);
    }
    return ideaList; // 기본값은 그대로 반환
  }, [currentSort, ideaList]);

  const ideaContents = useMemo(
    () =>
      Array.from(
        { length: Math.ceil((sortedIdeaList?.length || 0) / chunkSize) },
        (_, index) =>
          sortedIdeaList?.slice(index * chunkSize, (index + 1) * chunkSize)
      ),
    [sortedIdeaList, chunkSize]
  );

  const handleTextButtonClick = (sortType: "new" | "view") => {
    setCurrentSort(sortType);
  };

  return (
    <main className="bg-white h-auto w-full text-black flex flex-col items-center mx-auto">
      <NavBar />
      <div className="items-start">
        <Image
          className="flex-shrink-0"
          src={IdeaZoneBackground}
          alt="ideaZoneBackground"
        />
      </div>
      <div className="mt-[-900px] ">
        <div className="w-[1204px] h-[400px] bg-gray-300">banner</div>
        <div className="mt-24 text-center text-black">
          <div className="flex items-center justify-center">
            <p className="ml-8 text-3xl font-bold">아이디어 존</p>
            <Image
              src={IdeaZoneIcon}
              alt={"projectGalleryIcon"}
              className="ml-2 mt-5 mb-5"
            />
          </div>
          <p className="mt-8 text-xl">
            새로운 아이디어가 당신을 기다리고 있어요. <br />
            아이디어 캠퍼스에 입학한 여러 글을 둘러보고
            <br />
            참신한 아이디어를 작성해보세요!
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

      <div className="mx-24 mt-60">
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
            <SubmitButton title="등록 하기" url="/RegisterIdea" />
          </div>
        </div>
        <div className="mt-10 ml-10 mr-10">
          {ideaContents.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="flex space-x-5">
              {chunk?.map((content, contentIndex) => (
                <IdeaContent
                  key={contentIndex}
                  id={content.id}
                  title={content.title}
                  image={content.color}
                  keyword1={
                    (splitKeywords(content.keyword)[0] as unknown as string) ||
                    ""
                  }
                  keyword2={
                    (splitKeywords(content.keyword)[1] as unknown as string) ||
                    ""
                  }
                  keyword3={
                    (splitKeywords(content.keyword)[2] as unknown as string) ||
                    ""
                  }
                  name={content.nickName}
                  explain={content.simpleDescription}
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
