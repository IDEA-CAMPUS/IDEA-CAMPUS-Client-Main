"use client";

import "next/link";
import Header from "@/app/components/layout/Header";
import GradientBackground from "@/assests/images/gradientBackground.png";
import Image from "next/image";
import DeleteButton from "public/projectgallery/deleteButton.svg";
import SubmitButton from "@/app/components/gallery/SubmitButton";
import FixButton from "@/app/components/gallery/FixButton";
import { ChangeEvent, useRef, useState } from "react";
import PostClub from "@/app/api/club/PostClub";
import { useRouter } from "next/navigation";

interface ClubPostRequest {
  title: string;
  description: string;
  url1: string;
  url2: string;
}

interface ClubPostData {
  clubPostReq: ClubPostRequest;
  images: string[];
}

const IdeaManage = () => {
  const [clubData, setClubData] = useState<ClubPostData>({
    clubPostReq: {
      title: "",
      description: "",
      url1: "",
      url2: "",
    },
    images: [],
  });
  const [images, setImages] = useState<
    Array<{ name: string; url: string; size: string }>
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setClubData((prevData) => ({
      ...prevData,
      clubPostReq: {
        ...prevData.clubPostReq,
        [name]: value,
      },
    }));
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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageSize = `${(file.size / 1024).toFixed(2)} KB`;
        setImages((prevImages) => [
          ...prevImages,
          { name: file.name, url: reader.result as string, size: imageSize },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const isFormValid = () => {
    // 필수 필드인 title, simpleDescription, detailedDescription, team이 모두 입력되었는지 검사
    return (
      clubData.clubPostReq.title.trim() !== "" &&
      clubData.clubPostReq.description.trim() !== ""
    );
  };

  const router = useRouter();

  const handleUpload = async () => {
    try {
      // 필수 필드가 모두 입력되었는지 확인
      if (isFormValid() && images) {
        console.log("Upload image:", images, clubData);
        // 이 부분에 실제로 서버로ㄴ 이미지를 업로드하는 로직을 추가할 수 있습니다.
        // 서버로의 업로드를 위해 fetch 또는 axios 등을 사용할 수 있습니다.
        await PostClub(clubData, images);
        // Additional logic after successful upload, if needed
        router.push("/studentGroups");
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
    <div>
      <Header />
      <div className="flex flex-col w-[100vw] items-center bg-[#FAFAFA]">
        {/* 등록폼 박스 만들기 */}
        <Image
          src={GradientBackground}
          alt="gradientBackground"
          className="h-3/5 absolute"
        />
        <div className="flex flex-col items-center mt-12 w-[71vw] z-20">
          {/* 텍스트 wrap */}
          <div className="flex w-full justify-center items-center">
            {/* 텍스트 */}
            <div>
              <h5 className="text-5xl text-center">홍보글 등록하기</h5>
              <h1 className="text-lg mt-3 text-center">
                당신의 아이디어를 마음껏 뽐내주세요
                <br />
                당신의 아이디어를 마음껏 뽑내주세요. 조금 더 긴 글씨
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center  mt-20 bg-white rounded-xl z-10 shadow-md">
          <div className="flex-col items-start w-[71vw] p-8 z-20">
            <p className="text-lg text-left font-semibold text-black">제목</p>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full  px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="10글자 이내의 아이디어 제목을 입력해주세요"
              value={clubData.clubPostReq.title}
              onChange={handleInputChange}
            />
            <p className="text-lg text-left font-semibold text-black mt-4 ">
              상세설명
            </p>
            <textarea
              id="description"
              name="description"
              className="w-full h-[342px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black place-content-start"
              placeholder="상세 설명을 입력해주세요"
              value={clubData.clubPostReq.description}
              onChange={handleInputChange}
            />
            <p className="text-lg font-semibold text-black inline-block mr-1 mt-4">
              관련링크
            </p>
            <p className="text-base text-gray-400 inline-block">(선택)</p>
            <input
              type="text"
              id="url1"
              name="url1"
              className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="홍보 관련 링크를 등록해주세요"
              value={clubData.clubPostReq.url1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="url2"
              name="url2"
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="홍보 관련 링크를 등록해주세요"
              value={clubData.clubPostReq.url2}
              onChange={handleInputChange}
            />
            <p className="text-lg text-left font-semibold text-black mt-4 ">
              사진등록
            </p>
            <hr className="my-2" />
            <p className="text-base text-left text-black">
              드래그 혹은 ‘파일 찾기’ 버튼을 통해 사진을 등록할 수 있습니다.
              <br />
              이미지는 1:1 사이즈로 업로드해주세요. 가장 상단의 이미지가
              썸네일로 등록됩니다
            </p>
            {/* 사진등록 폼 , 썸네일 미리보기 , 여러 개의 이미지 등록가능, 파일 찾기 기능 가능,*/}
            <div className="flex justify-between  bg-neutral-50 rounded-md mt-4 border border-gray-300">
              <div className="flex justify-start">
                <div className="relative">
                  {images.length === 0 ? (
                    <Image
                      src={GradientBackground}
                      alt="썸네일"
                      className="box-border h-32 w-32 m-4 rounded-md"
                    />
                  ) : (
                    <Image
                      src={images[0].url}
                      alt="썸네일"
                      className="box-border h-32 w-32 m-4 rounded-md"
                      width={50}
                      height={50}
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-4 text-center text-black text-sm">
                    썸네일 미리보기
                  </div>
                </div>

                <div className="flex-col items-start text-start mt-4 text-black">
                  {images.map((image, index) => (
                    <div key={index} className="flex items-center mt-2">
                      <p className="mr-2 overflow-hidden whitespace-nowrap overflow-ellipsis text-left">
                        {image.name.length > 15
                          ? `${image.name.slice(0, 15)}...`
                          : image.name}{" "}
                        ({image.size})
                      </p>
                      <button onClick={() => handleDeleteImage(index)}>
                        <Image src={DeleteButton} alt="deleteButton" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-end mb-4 mr-4">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer bg-[#EFD6FD] hover:bg-purple-400 active:bg-purple-800 text-white px-4 py-2 rounded-xl shrink-"
                  onClick={handleButtonClick}
                >
                  파일 찾기
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="flex flex-row justify-center gap-4 mt-4 ">
              <FixButton title="취소하기" url="/studentGroups" />
              <SubmitButton title="등록하기" onClick={handleUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaManage;
