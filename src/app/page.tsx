"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import HomeBackground from "public/homeBackground.svg";
import Logo from "public/logo.svg";
import StudentCard from "public/home/studentCard.svg";
import Light from "public/home/light.svg";
import Puzzle from "public/home/puzzle.svg";
import Speaker from "public/home/speaker.svg";
import IdeaContent from "./components/ideazone/IdeaContent";
import Content from "./components/gallery/Content";
import StudentGrouplistItem from "./components/studentGroups/StudentGroupListItem";

import splitkeyWords from "./utils/seperateKeword";
import getIdeaHome from "./api/home/GetIdeaHome";
import getProjectHome from "./api/home/GetProjectHome";
import { NavBar } from "./components/components/naviBar";
import getClubHome from "./api/home/GetClubHome";
import GetBanner from "./api/GetBanner";
import Banner from "./components/Banner";

const page: React.FC = () => {
  const bannerData = GetBanner();
  const bannerList = bannerData?.information;
  const ideaData = getIdeaHome();
  const ideaList = ideaData?.information;
  const projectData = getProjectHome();
  const projectList = projectData?.information;
  const clubData = getClubHome();
  const clubList = clubData?.information;

  const chunkSize = 3;
  const ideaContents = Array.from(
    { length: Math.ceil((ideaList?.length || 0) / chunkSize) },
    (_, index) => ideaList?.slice(index * chunkSize, (index + 1) * chunkSize)
  );
  const projectContents = Array.from(
    { length: Math.ceil((projectList?.length || 0) / chunkSize) },
    (_, index) => projectList?.slice(index * chunkSize, (index + 1) * chunkSize)
  );
  const clubContents = Array.from(
    { length: Math.ceil((clubList?.length || 0) / chunkSize) },
    (_, index) => clubList?.slice(index * chunkSize, (index + 1) * chunkSize)
  );
  if (bannerList) console.log("b " + bannerList[0].saveFileUrl);
  if (projectList) console.log("p " + projectList[1].thumbnail);
  console.log(bannerData?.information[0].saveFileUrl);
  return (
    <main className="text-black">
      <NavBar />
      <div className="bg-white text-black flex flex-col items-center mx-auto">
        <div className="relative">
          <Image
            src={HomeBackground}
            alt="HomeBackground"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="relative mt-10 mx-40" style={{ zIndex: 1 }}>
            <div className="relative mt-10 w-[1204px] h-[400px] bg-gray-300">
              {bannerList && (
                <Image
                  src={bannerList[0].saveFileUrl}
                  alt="banner"
                  layout="fill"
                />
              )}
            </div>
            <div>
              <div className="mt-12 flex flex-col items-center justify-center">
                <Image src={Logo} alt="Logo" height={100} />
                <p className="mt-4 text-xl">대학 연합 IT동아리 홍보 플랫폼</p>
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
                        각 팀의 작품을 구경하고, 나만의 아이디어를 펼쳐보세요.{" "}
                        <br />
                        동아리에 지원하여 협업을 경험해 보세요!{" "}
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
                          <br />
                          나만의 아이디어를 등록 및 홍보하는 공간입니다.
                          <br />
                          구현 되기를 바라는 마음으로 멋진 아이디어를
                          제안해보세요!
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
                            keyWord1={content.keyword[0]}
                            keyWord2={content.keyword[1]}
                            keyWord3={content.keyword[2]}
                            name={content.nickName}
                            explain={content.simpleDescription}
                            id={0}
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
                        <p className="ml-2 font-bold text-3xl">
                          프로젝트 갤러리
                        </p>
                        <p className="ml-2 mt-4 text-lg">
                          완성된 프로젝트를 등록 및 전시하는 공간입니다. <br />
                          당신의 멋진 작품을 갤러리에 전시해 보세요!
                        </p>
                      </div>
                      <div className="mt-[-180px]">
                        <Image src={Puzzle} alt="Puzzle" />
                      </div>
                    </div>
                    {projectContents.map((chunk, chunkIndex) => (
                      <div
                        key={chunkIndex}
                        className="flex mt-[-50px] space-x-5"
                      >
                        {chunk?.map((content, contentIndex) => (
                          <Content
                            key={contentIndex}
                            id={0}
                            booleanWeb={content.booleanWeb}
                            booleanApp={content.booleanApp}
                            booleanAi={content.booleanAi}
                            team={content.team}
                            simpleDescription={content.simpleDescription}
                            thumbnail={content.thumbnail}
                            hits={0}
                            createdAt={""}
                            title={content.title}
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
                          함께 성장하고 싶은 팀의 공고에 적극적으로
                          지원해봅시다.
                        </p>
                      </div>
                      <div className="mt-[-50px]">
                        <Image src={Speaker} alt="Speaker" width={300} />
                      </div>
                    </div>
                    <div className="mt-[-80px] mb-20">
                      {clubList?.map((content, contentIndex) => (
                        <StudentGrouplistItem
                          key={contentIndex}
                          id={1}
                          title={content.title}
                          description={content.description}
                          createdAt={content.createdAt}
                          nickname={content.nickname}
                          thumbnail={content.thumbnail}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
