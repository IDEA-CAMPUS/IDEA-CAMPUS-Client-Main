"use client";

import React, { useState, ChangeEvent, useRef } from "react";

import projectGalleryRegisterBackGround from "public/projectgallery/projectGalleryRegisterBackGround.svg";
import Image from "next/image";
import deleteButton from "public/projectgallery/deleteButton.svg";
import SubmitButton from "@/app/components/gallery/SubmitButton";
import FixButton from "@/app/components/gallery/FixButton";
import KeywordButton from "@/app/components/gallery/KeywordButton";
import { NavBar } from "@/app/components/components/naviBar";
import { useRouter } from "next/navigation";
import PostProject from "@/app/api/gallery/PostProject";

// const a = {
//   "title": "asdf",
//   "simpleDescription": "asdf설명02",
//   "detailedDescription": "asdf설명02",
//   "teamInformation": "팀asdf정보02",
//   "githubUrl": "https://github.com/project/02",
//   "webUrl": "https://project.com/02",
//   "googlePlayUrl": "https://play.google.com/store/apps/details?id=com.project/02",
//   "booleanWeb": 1,
//   "booleanApp": 1,
//   "booleanAi": 0
// }

interface ProjectFormData {
  title: string;
  booleanWeb: boolean;
  booleanApp: boolean;
  booleanAi: boolean;
  simpleDescription: string;
  detailedDescription: string;
  teamInformation: string;
  githubUrl: string;
  webUrl: string;
  googlePlayUrl: string;
}

const RegisterProject = () => {
  const [images, setImages] = useState<
    Array<{ name: string; url: string; size: string }>
  >([]);
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const [projectData, setProjectData] = useState<ProjectFormData>({
    title: "",
    booleanWeb: true,
    booleanApp: true,
    booleanAi: true,
    simpleDescription: "",
    detailedDescription: "",
    teamInformation: "",
    githubUrl: "",
    webUrl: "",
    googlePlayUrl: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({
    앱: true,
    웹: true,
    AI: true,
  });
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      const newFiles: File[] = Array.from(file);

      if (e.target.files && e.target.files.length > 0) {
        setSelectedFile((prevFiles) => [...prevFiles, ...newFiles]);
      }
      const reader = new FileReader();

      reader.onload = () => {
        const imageSize = `${(file[0].size / 1024).toFixed(2)} KB`;
        setImages((prevImages) => [
          ...prevImages,
          { name: file[0].name, url: reader.result as string, size: imageSize },
        ]);
      };

      reader.readAsDataURL(file[0]);
    }
  };

  //키워드 버튼 true여부 확인 함수
  const handleKeywordButtonClick = (isClicked: boolean, title: string) => {
    setButtonStates((prevStates) => ({ ...prevStates, [title]: isClicked }));
    if (title === "앱") {
      setProjectData((prevData) => ({
        ...prevData,
        booleanApp: isClicked,
      }));
    } else if (title === "웹") {
      setProjectData((prevData) => ({
        ...prevData,
        booleanWeb: isClicked,
      }));
    } else if (title === "AI") {
      setProjectData((prevData) => ({
        ...prevData,
        booleanAi: isClicked,
      }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
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

  const isFormValid = () => {
    // 필수 필드인 title, simpleDescription, detailedDescription, team이 모두 입력되었는지 검사
    return (
      projectData.title.trim() !== "" &&
      projectData.simpleDescription.trim() !== "" &&
      projectData.teamInformation.trim() !== "" &&
      projectData.detailedDescription.trim() !== ""
    );
  };

  const handleUpload = async () => {
    try {
      if (isFormValid() && images) {
        const formdata = new FormData();
        formdata.append("title", projectData.title);
        formdata.append("simpleDescription", projectData.simpleDescription);
        formdata.append("detailedDescription", projectData.detailedDescription);
        formdata.append("teamInformation", projectData.teamInformation);
        formdata.append("githubUrl", projectData.githubUrl);
        formdata.append("webUrl", projectData.webUrl);
        formdata.append("googlePlayUrl", projectData.googlePlayUrl);
        formdata.append("booleanWeb", String(projectData.booleanWeb));
        formdata.append("booleanApp", String(projectData.booleanApp));
        formdata.append("booleanAi", String(projectData.booleanAi));

        if (selectedFile) {
          selectedFile.forEach((file, index) => {
            formdata.append(`images`, file, file.name);
          });
        }

        await PostProject(formdata);

        for (const key of formdata.keys()) {
          console.log(key, ":", formdata.get(key));
        }

        router.push("/ProjectGallery");
      } else {
        alert("선택항목을 제외한 모든 항목을 입력해주세요.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("이미지 업로드 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <NavBar />
      <main className="bg-[#FCF6FF] w-full text-black flex flex-col items-center mx-auto">
        <div className="items-start">
          <Image
            src={projectGalleryRegisterBackGround}
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
            <KeywordButton
              title={"앱"}
              onButtonClick={(isClicked) =>
                handleKeywordButtonClick(isClicked, "앱")
              }
            />
            <KeywordButton
              title={"웹"}
              onButtonClick={(isClicked) =>
                handleKeywordButtonClick(isClicked, "웹")
              }
            />
            <KeywordButton
              title={"AI"}
              onButtonClick={(isClicked) =>
                handleKeywordButtonClick(isClicked, "AI")
              }
            />
          </div>
          <p className="mt-10 text-black font-bold text-2xl">프로젝트 명칭</p>
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-[650px] p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            name="title"
            placeholder="15글자 이내의 프로젝트 제목을 입력해주세요."
            value={projectData.title}
            onChange={handleInputChange}
          />
          <p className="mt-5 text-black font-bold text-2xl">간단 설명</p>
          <textarea
            style={{ resize: "none" }}
            className="bg-[#F5F5F5] h-24 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
            name="simpleDescription"
            placeholder="50글자 이내의 간단 설명을 입력해주세요. 창의 메인 화면에 올라갈 글입니다."
            value={projectData.simpleDescription}
            onChange={handleInputChange}
          />
          <p className="mt-12 text-black font-bold text-2xl">상세 설명</p>
          <textarea
            style={{ resize: "none" }}
            className="bg-[#F5F5F5] h-80 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
            name="detailedDescription"
            placeholder="상세 설명을 입력해주세요."
            value={projectData.detailedDescription}
            onChange={handleInputChange}
          />
          <p className="mt-12 text-black font-bold text-2xl">팀 정보</p>
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            name="teamInformation"
            placeholder="팀과 팀원들을 소개해주세요."
            value={projectData.teamInformation}
            onChange={handleInputChange}
          />
          <div className="flex mt-12">
            <p className="text-black font-bold text-2xl">GitHub 링크</p>
            <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
          </div>
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            name="githubUrl"
            placeholder="해당 프로젝트의 GitHub 링크를 입력해주세요."
            value={projectData.githubUrl}
            onChange={handleInputChange}
          />
          <div className="flex mt-12">
            <p className="text-black font-bold text-2xl">웹 주소</p>
            <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
          </div>
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="해당 프로젝트의 웹 주소를 입력해주세요."
            name="webUrl"
            value={projectData.webUrl}
            onChange={handleInputChange}
          />
          <div className="flex mt-12">
            <p className="text-black font-bold text-2xl">구글플레이 주소</p>
            <p className="ml-2 text-[#A6A6A6] font-bold text-2xl">(선택)</p>
          </div>
          <input
            className="bg-[#F5F5F5] h-12 mt-3 flex focus:outline-none focus:border-2 focus:border-purple-500 w-full p-2 border-2 border-[#A6A6A6] rounded-xl"
            type="text"
            placeholder="해당 프로젝트의 구글플레이 주소를 입력해주세요."
            name="googlePlayUrl"
            value={projectData.googlePlayUrl}
            onChange={handleInputChange}
          />
          <p className="mt-20 text-black font-bold text-2xl">사진등록</p>
          <p className="mt-10 text-black text-xl">
            드래그 혹은 ‘파일 찾기’ 버튼을 통해 사진을 등록할 수 있습니다.{" "}
            <br />
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
                  <div className="bg-white m-5 h-64 w-64 rounded-xl">
                    <Image
                      src={images[0].url}
                      alt="miribogi"
                      width={250}
                      height={250}
                    />
                  </div>
                )}
                <div className="flex flex-col items-center">
                  {images.map((image, index) => (
                    <div key={index} className="flex items-center mt-2">
                      <p className="mr-2 overflow-hidden whitespace-nowrap overflow-ellipsis text-left">
                        {image.name.length > 15
                          ? `${image.name.slice(0, 15)}...`
                          : image.name}{" "}
                        ({image.size})
                      </p>
                      <button onClick={() => handleDeleteImage(index)}>
                        <Image src={deleteButton} alt="deleteButton" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute mt-56 ml-[700px]">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer bg-[#EFD6FD] hover:bg-purple-400 active:bg-purple-800 text-white px-4 py-2 rounded-xl shrink-"
                  onClick={handleButtonClick}
                >
                  파일 찾기
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          {
            //건든 흔적 있는 거 추가 (이거 설마 전부 하나씩 추가해야됨?)
            <div className="flex items-center justify-center space-x-5 mt-24">
              <FixButton title="취소하기" url="/ProjectGallery" />
              <SubmitButton title="등록하기" onClick={handleUpload} />
            </div>
          }
        </div>
      </main>
    </div>
  );
};

export default RegisterProject;
