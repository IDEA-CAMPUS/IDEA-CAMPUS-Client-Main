"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectGalleryBackground1 from "public/ProjectGallery/ProjectGalleryBackground1.svg";
import ProjectGalleryBackground2 from "public/ProjectGallery/ProjectGalleryBackground2.svg";
import SnowGray from "public/ProjectGallery/SnowGray.svg";
import Snow from "public/ProjectGallery/Snow.svg";
import ProjectGalleryIcon from "public/ProjectGallery/ProjectGalleryIcon.svg";

import KeywordButton from "@/app/_components/Gallery/KeywordButton";
import TextButton from "@/app/_components/Gallery/TextButotn";
import SubmitButton from "@/app/_components/Gallery/SubmitButton";
import Content from "@/app/_components/Gallery/Content";

const ProjectGalley = () => {
  const [currentSort, setCurrentSort] = useState<"new" | "view">("new");

  const handleTextButtonClick = (sortType: "new" | "view") => {
    setCurrentSort(sortType);
  };

  const contents = [
    {
      title: "test1",
      image: "/Profile.svg",
      keyword: "앱",
      team: "test",
      explain:
        "이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다이 글자는 50자가 넘습니다",
    },
    {
      title: "test",
      image: "/Profile.svg",
      keyword: "앱",
      team: "없음",
      explain: "test",
    },
    {
      title: "test",
      image: "/Profile.svg",
      keyword: "앱",
      team: "test",
      explain: "test",
    },
    {
      title: "test",
      image: "/Profile.svg",
      keyword: "앱",
      team: "test",
      explain: "test",
    },
  ];

  const chunkSize = 3;
  const chunkedContents = Array.from(
    { length: Math.ceil(contents.length / chunkSize) },
    (_, index) => contents.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return (
    <main className="bg-white w-fit text-black flex flex-col items-center mx-auto">
      <div className="items-start">
        <Image
          className="flex-shrink-0"
          src={ProjectGalleryBackground1}
          alt="projectgallerybackground1"
        />
        <Image
          src={ProjectGalleryBackground2}
          alt="projectgallerybackground2"
          className="my-0"
        />
      </div>
      <div className="absolute mt-12 ">
        <div className="w-[1204px] h-[400px] bg-gray-300">banner</div>
        <div className="mt-24 text-center text-white">
          <div className="flex items-center justify-center">
            <p className="ml-8 text-3xl font-bold">프로젝트 갤러리</p>
            <Image
              src={ProjectGalleryIcon}
              alt={"projectGalleryIcon"}
              className="mb-5"
            />
          </div>
          <p className="mt-8 text-xl">
            제작이 완료된 프로젝트가 당신을 기다리고 있어요.
            <br />
            아이디어 캠퍼스의 졸업을 앞둔 여러 프로젝트를 둘러보지 않을 수
            없겠죠?
            <br />더 넓은 곳으로 나아갈 멋진 프로젝트의 앞날을 응원해주세요!
          </p>
        </div>
      </div>
      <div className="absolute mt-[370px] flex items-center justify-between w-full">
        <div className="flex-shrink-0 ml-80">
          <Image src={SnowGray} alt={"snowGray"} />
        </div>
        <div className="flex-shrink-0 mr-80 mt-80">
          <Image src={Snow} alt={"snow"} />
        </div>
      </div>

      <div className="mx-24 mt-12">
        <h1 className="font-bold text-3xl">완성 프로젝트</h1>
        <div className="mt-8 space-x-4">
          <KeywordButton title={"앱"} />
          <KeywordButton title={"웹"} />
          <KeywordButton title={"AI"} />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex">
            <TextButton
              title={"최신순"}
              isHover={currentSort === "new"}
              onClick={() => handleTextButtonClick("new")}
            />
            <p className="text-[#B034F7] text-lg font-bold mt-1">|</p>
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
                <Content
                  key={contentIndex}
                  title={content.title}
                  image={content.image}
                  keyword={content.keyword}
                  team={content.team}
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

export default ProjectGalley;
