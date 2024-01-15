"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import projectGalleryBackground1 from "public/projectgallery/projectGalleryBackground1.svg";
import projectGalleryBackground2 from "public/projectgallery/projectGalleryBackground2.svg";
import snowGray from "public/projectgallery/snowGray.svg";
import snow from "public/projectgallery/snow.svg";
import projectGalleryIcon from "public/projectgallery/projectGalleryIcon.svg";

import KeywordButton from "@/app/components/gallery/KeywordButton";
import TextButton from "@/app/components/gallery/TextButotn";
import SubmitButton from "@/app/components/gallery/SubmitButton";
import { NavBar } from "@/app/components/components/naviBar";
import GetProject from "@/app/api/gallery/GetProject";
import GetProjectKeyWord from "@/app/api/gallery/GetProjectKeyWord";
import Content from "@/app/components/gallery/Content";
import GetBanner from "@/app/api/GetBanner";

const ProjectGalley = () => {
  const [currentSort, setCurrentSort] = useState<"new" | "view">("new");
  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({
    booleanWeb: true,
    booleanApp: true,
    booleanAi: true,
  });
  // let projectData;

  // if (buttonStates[0] && buttonStates[1] && buttonStates[2]) {
  //   projectData = getProject();
  // } else {
  //   projectData = getProjectKeyWord(buttonStates);
  // }
  const bannerData = GetBanner();
  const bannerList = bannerData?.information;
  const projectData = GetProject();
  const projectList = projectData?.information.content;
  const projectDataKeword = GetProjectKeyWord(
    buttonStates.booleanWeb,
    buttonStates.booleanApp,
    buttonStates.booleanAi
  );
  const ProjectDataKewordList = projectDataKeword?.information.content;
  // console.log("pro: " + projectDataKeword);
  const chunkSize = 3;
  // 최신순 또는 조회순으로 정렬된 아이디어 리스트
  const sortedprojectList = useMemo(() => {
    if (currentSort === "new") {
      return projectList
        ?.slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    } else if (currentSort === "view") {
      return projectList?.slice().sort((a, b) => b.hits - a.hits);
    }
    return projectList; // 기본값은 그대로 반환
  }, [currentSort, projectList]);

  const projectContents = useMemo(
    () =>
      Array.from(
        { length: Math.ceil((sortedprojectList?.length || 0) / chunkSize) },
        (_, index) =>
          sortedprojectList?.slice(index * chunkSize, (index + 1) * chunkSize)
      ),
    [sortedprojectList, chunkSize]
  );

  const handleTextButtonClick = (sortType: "new" | "view") => {
    setCurrentSort(sortType);
  };

  //키워드 버튼 true여부 확인 함수
  const handleButtonClick = (isClicked: boolean, title: string) => {
    setButtonStates((prevStates) => ({ ...prevStates, [title]: isClicked }));
  };

  return (
    <main className="bg-white min-h-screen w-full text-black flex flex-col items-center mx-auto">
      <NavBar />
      <div className="items-start">
        <Image
          className="flex-shrink-0"
          src={projectGalleryBackground1}
          alt="projectgallerybackground1"
          layout="fixed"
          width={1400}
          height={50}
        />
        <Image
          src={projectGalleryBackground2}
          alt="projectgallerybackground2"
          className="my-0"
          layout="fixed"
          width={1400}
          height={50}
        />
      </div>
      <div className="mt-[-1200px]">
        <div className="relative w-[1204px] h-[400px] bg-gray-300">
          {" "}
          {bannerList && (
            <Image src={bannerList[0].saveFileUrl} alt="banner" layout="fill" />
          )}
          s
        </div>
        <div className="mt-24 text-center text-white">
          <div className="flex items-center justify-center">
            <p className="ml-8 text-3xl font-bold">프로젝트 갤러리</p>
            <Image
              src={projectGalleryIcon}
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
          <Image src={snowGray} alt={"snowGray"} />
        </div>
        <div className="flex-shrink-0 mr-80 mt-80">
          <Image src={snow} alt={"snow"} />
        </div>
      </div>

      <div className="mx-24 mt-12">
        <h1 className="font-bold text-3xl">완성 프로젝트</h1>
        <div className="mt-8 space-x-4">
          <KeywordButton
            title={"앱"}
            onButtonClick={(isClicked) => handleButtonClick(isClicked, "앱")}
          />
          <KeywordButton
            title={"웹"}
            onButtonClick={(isClicked) => handleButtonClick(isClicked, "웹")}
          />
          <KeywordButton
            title={"AI"}
            onButtonClick={(isClicked) => handleButtonClick(isClicked, "AI")}
          />
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
            <SubmitButton title="등록 하기" url="/RegisterProject" />
          </div>
        </div>
        <div className="mt-10 ml-10 mr-10">
          {projectContents.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="flex space-x-5">
              {chunk?.map((content, contentIndex) => (
                <Content
                  key={contentIndex}
                  id={content.id}
                  booleanWeb={content.booleanWeb}
                  booleanApp={content.booleanApp}
                  booleanAi={content.booleanAi}
                  team={content.team}
                  simpleDescription={content.simpleDescription}
                  thumbnail={content.thumbnail}
                  hits={content.hits}
                  createdAt={content.createdAt}
                  title={content.title}
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
