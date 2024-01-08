"use client";

import React, { useState } from "react";

import Image from "next/image";
import ProjectDetailBackgroundTop from "public/ProjectGallery/ProjectDetailBackgroundTop.png";
import ProjectGalleryIcon from "public/ProjectGallery/ProjectGalleryIcon.svg";
import PreviousButton from "public/ProjectGallery/PreviousButton.svg";
import NextButton from "public/ProjectGallery/NextButton.svg";
import IndexIcon from "public/ProjectGallery/IndexIcon.svg";
import IndexLine from "public/ProjectGallery/IndexLine.svg";

const ProjectDetail = () => {
  //이미지 배열
  const images = [
    ProjectGalleryIcon,
    PreviousButton,
    NextButton,
    PreviousButton,
    // ... 더 많은 이미지
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <main className="flex flex-col bg-white items-center justify-center relative">
      <div className="flex mx-40 w-[1000px] mt-20 h-full z-10">
        <Image
          src={ProjectDetailBackgroundTop}
          alt={"projectDetailBackground"}
        />
      </div>
      <div className="mt-[-800px] p-10 w-[1000px] mx-auto items-center justify-center flex flex-col text-center z-10">
        <div>
          <p className="text-white text-4xl font-bold">명지팅</p>
          <p className="mt-5 w-20 h-8 p-1 ml-1 text-sm border-2 border-[#B034F7] rounded-3xl bg-white text-black">
            웹
          </p>
        </div>

        <div className="flex items-center justify-center mt-10">
          <div className="flex">
            {/* Previous Image */}
            <div className="absolute left-[300px] mt-[150px] transform -translate-y-1/2 w-[250px] h-[250px] rounded-xl bg-white">
              <Image
                src={
                  images[
                    currentIndex === 0 ? images.length - 1 : currentIndex - 1
                  ]
                }
                alt={`Slide ${
                  currentIndex === 0 ? images.length - 1 : currentIndex - 1
                }`}
                width={250}
                height={250}
              />
            </div>
            {/* Current Image */}
            <div className="w-[300px] h-[300px] rounded-xl bg-white z-20">
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                width={300}
                height={300}
              />
            </div>

            {/* Next Image */}
            <div className="absolute right-[300px] mt-[150px] transform -translate-y-1/2 w-[250px] h-[250px] rounded-xl bg-white">
              <Image
                src={
                  images[
                    currentIndex === images.length - 1 ? 0 : currentIndex + 1
                  ]
                }
                alt={`Slide ${
                  currentIndex === images.length - 1 ? 0 : currentIndex + 1
                }`}
                width={250}
                height={250}
              />
            </div>
          </div>
          <div className="absolute flex items-center justify-between space-x-48 z-20">
            <button className="flex items-center p-4" onClick={goToPrevious}>
              <Image src={PreviousButton} alt="nextButton" />
            </button>
            <button className="flex items-center p-4" onClick={goToNext}>
              <Image src={NextButton} alt="nextButton" />
            </button>
          </div>
        </div>
        <p className="text-xl mt-10 text-white">
          프로젝트에 대한 간단한 설명입니다.
          <br />이 칸을 다 채우면 50자가 됩니다.제한설정ㄱㄱ
        </p>
      </div>
      {/*여기 반응형 어케함  */}
      {/* <Image
          src={ProjectDetailBackgroundIndex}
          alt="projectDetailBackgroundIndex"
        /> 
       <div className="flex mt-[-410px]">
          <div className="relative left-[-10px] mt-[-50px]">
            <div className="flex mt-10">
              <Image src={IndexIcon} alt="indexIcon" />
              <p className="text-2xl ml-5 font-bold">상세 설명</p>
            </div>
            <div className="flex mt-20">
              <Image src={IndexIcon} alt="indexIcon" />
              <p className="text-2xl ml-5 font-bold">팀 정보</p>
            </div>
            <div className="flex mt-10">
              <Image src={IndexIcon} alt="indexIcon" />
              <p className="text-2xl ml-5 font-bold">GitHub 링크</p>
            </div>
          </div>
      </div> */}
    </main>
  );
};

export default ProjectDetail;
