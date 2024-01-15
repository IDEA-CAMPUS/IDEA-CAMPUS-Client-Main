"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import ideaZoneBackground from "public/ideazone/ideaZoneBackground.svg";
import flowerGray from "public/ideazone/flowerGray.svg";
import flower from "public/ideazone/flower.svg";
import ideaZoneIcon from "public/ideazone/ideaZoneIcon.svg";

import TextButton from "@/app/components/ideazone/TextButotn";
import SubmitButton from "@/app/components/ideazone/SubmitButton";
import IdeaContent from "@/app/components/ideazone/IdeaContent";
import { NavBar } from "@/app/components/components/naviBar";
import GetIdea from "@/app/api/ideazone/GetIdea";
import splitkeyWords from "@/app/utils/seperateKeword";
import GetBanner from "@/app/api/GetBanner";

const IdeaZone = () => {
  const [currentSort, setCurrentSort] = useState<"new" | "view">("new");
  const ideaData = GetIdea();
  const ideaList = ideaData?.information;
  const bannerData = GetBanner();
  const bannerList = bannerData?.information;

  // const chunkSize = 3;
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

  const chunkSize = 3;
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
    <main className="relative bg-white h-auto w-full text-black flex flex-col items-center mx-auto">
      <NavBar />
      <div className="items-start">
        <Image
          className="flex-shrink-0"
          src={ideaZoneBackground}
          alt="ideaZoneBackground"
          layout="fixed"
          width={1400}
          height={50}
        />
      </div>
      <div className="mt-[-900px] ">
        <div className="relative w-[1204px] h-[400px] bg-gray-300">
          {bannerList && (
            <Image src={bannerList[0].saveFileUrl} alt="banner" layout="fill" />
          )}
        </div>
        <div className="mt-24 text-center text-black">
          <div className="flex items-center justify-center">
            <p className="ml-8 text-3xl font-bold">아이디어 존</p>
            <Image
              src={ideaZoneIcon}
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
          <Image src={flowerGray} alt={"snowGray"} />
        </div>
        <div className="flex-shrink-0 mr-80 mt-80">
          <Image src={flower} alt={"snow"} />
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
                  keyWord1={content.keyword[0]}
                  keyWord2={content.keyword[1]}
                  keyWord3={content.keyword[2]}
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
