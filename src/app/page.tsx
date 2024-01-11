"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import HomeBackground from "public/HomeBackground.svg";
import Logo from "public/Logo.svg";
import StudentCard from "public/Home/StudentCard.svg";
import Light from "public/Home/Light.svg";
import Puzzle from "public/Home/Puzzle.svg";
import Speaker from "public/Home/Speaker.svg";
import IdeaContent from "./_components/IdeaZone/IdeaContent";
import Content from "./_components/Gallery/Content";
import StudentGrouplistItem from "./studentGroups/_components/StudentGroupListItem";

import splitKeywords from "./_utils/seperateKeword";
import getIdeaHome from "./_api/Home/GetIdeaHome";
import getProjectHome from "./_api/Home/GetProjectHome";
import { NavBar } from "./_components/components/naviBar";

interface Idea {
  title: string;
  simpleDescription: string;
  keyword: string;
  nickName: string;
  color: string;
}

interface ApiResponse {
  check: boolean;
  information: Idea[];
  message: string | null;
}

const page: React.FC = () => {
  const ideaData = getIdeaHome();
  const ideaList = ideaData?.information;
  const projectData = getProjectHome();
  const projectList = projectData?.information;

  console.log(projectList);

  const chunkSize = 3;
  const ideaContents = Array.from(
    { length: Math.ceil((ideaList?.length || 0) / chunkSize) },
    (_, index) => ideaList?.slice(index * chunkSize, (index + 1) * chunkSize)
  );
  const projectContents = Array.from(
    { length: Math.ceil((projectList?.length || 0) / chunkSize) },
    (_, index) => projectList?.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return (
    <main className="bg-white h-auto w-full text-black flex flex-col items-center mx-auto">
      <NavBar />
      <div className="w-[1600px]">
        <Image src={HomeBackground} alt="HomeBackground" />
      </div>
      <div className="mt-[-4250px] w-[1204px] h-[400px] bg-gray-300">
        banner
      </div>
      <div className="mt-24 flex flex-col items-center justify-center">
        <Image src={Logo} alt="Logo" height={100} />
        <p className="mt-4 text-xl">
          아이디어 캠퍼스 카피 한 줄 어쩌구 길이는 이 정도
        </p>
      </div>

      <div className="mt-24 flex  items-center justify-center bg-opacity-20 mb-20 w-[1200px] h-auto rounded-2xl shadow-lg bg-white">
        <div className="flex flex-col items-center justify-center ">
          <div className="mt-64 flex">
            <div className="ml-24">
              <Image src={Logo} alt="Logo" height={50} />
              <div className="flex mt-4 items-center text-xl space-x-2 border-l-4 border-solid h-auto border-[#B034F7]">
                <p className="ml-2 font-bold text-xl">캠퍼스 목표</p>
              </div>
              <p className="ml-2 mt-4 text-lg">
                우리 아이디어 캠퍼스는 <br />
                대학생의 아이디어가 성장하는 순간을 함께합니다 . <br />
                대학생의 다양한 프로젝트를 구경해보세요 어쩌구.. <br />
                당신의 아이디어를 마음껏 펼쳐주세요!{" "}
              </p>
            </div>
            <div className="ml-[-64px] mt-[-70px]">
              <Image src={StudentCard} alt="StudentCard" height={400} />
            </div>
          </div>
          <div className="mt-[200px]">
            <div className="flex">
              <div>
                <p className="ml-2 font-bold text-[#B034F7] text-xl">
                  메뉴 소개
                </p>
                <p className="ml-2 font-bold text-3xl">아이디어 존</p>
                <p className="ml-2 mt-4 text-lg">
                  아이디어를 등록 및 전시하는 공간입니다.
                  <br />
                  멋진 아이디어를 등록하고 함께 프로젝트를 진행할 팀원을
                  모아봅시다.
                  <br />
                  당신과 딱 맞는 아이디어를 발견했다면 적극적으로 협업을
                  제안해봅시다!
                </p>
              </div>
              <div className="mt-[-100px]">
                <Image src={Light} alt="light" />
              </div>
            </div>

            {ideaContents.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="flex space-x-5">
                {chunk?.map((content, contentIndex) => (
                  <IdeaContent
                    key={contentIndex}
                    title={content.title}
                    image={content.color}
                    keyword1={
                      (splitKeywords(
                        content.keyword[0]
                      ) as unknown as string) || ""
                    }
                    keyword2={
                      (splitKeywords(
                        content.keyword[1]
                      ) as unknown as string) || ""
                    }
                    keyword3={
                      (splitKeywords(
                        content.keyword[2]
                      ) as unknown as string) || ""
                    }
                    name={content.nickName}
                    explain={content.simpleDescription}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-[120px]">
            <div className="flex">
              <div>
                <p className="ml-2 font-bold text-[#B034F7] text-xl">
                  메뉴 소개
                </p>
                <p className="ml-2 font-bold text-3xl">프로젝트 갤러리</p>
                <p className="ml-2 mt-4 text-lg">
                  완성된 프로젝트를 등록 및 전시하는 공간입니다. <br />
                  프로젝트를 다른 사람과 공유해 봅시다.
                  <br />
                  어쩌면 또 다른 성장의 기회가 찾아올지도 모르죠!
                  <br />
                </p>
              </div>
              <div className="mt-[-180px]">
                <Image src={Puzzle} alt="Puzzle" />
              </div>
            </div>
            {projectContents.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="flex mt-[-50px] space-x-5">
                {chunk?.map((content, contentIndex) => (
                  <Content
                    key={contentIndex}
                    booleanWeb={content.booleanApp}
                    booleanApp={content.booleanApp}
                    booleanAi={content.booleanAi}
                    title={content.title}
                    thumbnail={content.thumbnail}
                    team={content.team}
                    simpleDescription={content.simpleDescription}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-[50px] w-[1050px]">
            <div className="flex">
              <div>
                <p className="ml-2 font-bold text-[#B034F7] text-xl">
                  메뉴 소개
                </p>
                <p className="ml-2 font-bold text-3xl">동아리 학회</p>
                <p className="ml-2 mt-4 text-lg">
                  동아리나 학회를 홍보하는 공간입니다. <br />
                  함께 성장하고 싶은 팀의 공고에 적극적으로 지원해봅시다.
                </p>
              </div>
              <div className="mt-[-50px]">
                <Image src={Speaker} alt="Speaker" width={300} />
              </div>
            </div>
            <div className="mt-[-80px] mb-20">
              <StudentGrouplistItem />
              <StudentGrouplistItem />
              <StudentGrouplistItem />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
