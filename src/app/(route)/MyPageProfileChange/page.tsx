"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import GradientBackgroundmyPage from "public/myPage/graidentBackgroundmyPage.png";
// import AlertModal from "@/app/myPage/_components/AlertModal";
import { NavBar } from "@/app/components/components/naviBar";
import ColorChangeModal from "@/app/components/myPage/colorChangeModal";

const ProfileChange = () => {
  // Sample data for initial values
  const initialInfo = {
    이름: "홍길동",
    닉네임: "길동",
    아이디: "hong123",
    휴대폰: "010-1234-5678",
    소속동아리: "UMC",
  };

  // 편집 가능한 정보를 관리하는 상태
  const [editableInfo, setEditableInfo] = useState({ ...initialInfo });

  // 폼이 현재 편집 모드인지 여부를 관리하는 상태
  const [editMode, setEditMode] = useState<boolean>(false);

  console.log(editMode);

  // 폼 제출을 처리하는 함수
  const handleFormSubmit = () => {
    // 사용자 정보를 업데이트하는 로직 수행 (예: API 호출)
    // 성공적인 업데이트 이후, 폼을 초기화하고 편집 모드를 비활성화할 수 있습니다.
    setEditableInfo({ ...initialInfo });
  };

  const handlefixUser = () => {
    setEditMode(!editMode);
    console.log("Test");
  };

  const [isShow, setIsShow] = useState<boolean>(false);

  const handler = () => {
    setIsShow(!isShow);
  };

  const handleSaveUser = () => {
    // 여기에 사용자 정보를 업데이트하는 로직 추가
    console.log("User information saved!");
    // 성공적인 업데이트 이후, 폼을 초기화하고 편집 모드를 비활성화할 수 있습니다.
    setEditableInfo({ ...initialInfo });
    setEditMode(false);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="fixed w-full">
        <NavBar />
      </div>
      <div className="flex flex-col w-[100vw] h-screen items-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center justify-center mt-44 mb-10">
          <Image
            src="/Profile.svg"
            alt="프로필 이미지"
            width={80}
            height={80}
          ></Image>
          <button
            onClick={handler}
            className="bg-[#F9F9f9] hover:bg-purple-600 active:bg-purple-700 border-2 border-[#B034F7] text-[#262626] px-4 py-1 rounded-2xl shrink-0 m-6"
          >
            배경색 변경
          </button>
          {isShow && (
            <>
              <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"></div>
              <div className="w-[400px] h-[600px] bg-white mt-[-200px] text-black z-40 shadow-xl rounded-xl">
                <ColorChangeModal />
              </div>
              <div className="flex flex-row justify-center gap-4 mt-[-70px] z-50">
                <button
                  onClick={handler}
                  className="bg-white text-black hover:bg-gsssray-200 font-semibold px-4 py-2 rounded-md"
                >
                  취소
                </button>
                <button
                  onClick={handler}
                  className="bg-white text-purple-700 hover:bg-purple-200 font-semibold px-4 py-2 rounded-md"
                >
                  저장
                </button>
              </div>
            </>
          )}
          <div className="flex flex-col w-[30vw] text-black m-4">
            {/* Display information in a table */}
            <table className="w-full text-left">
              <tbody>
                {Object.entries(editableInfo).map(([key, value]) => (
                  <tr key={key}>
                    <td
                      className={
                        key === "닉네임"
                          ? "border-b w-32 border-purple-500 text-left font-bold text-purple-500 px-2 py-2"
                          : "text-left font-bold text-purple-500 py-2 px-2"
                      }
                    >
                      {key}
                    </td>
                    <td
                      className={
                        key === "닉네임"
                          ? "text-left border-b border-purple-500 py-2 px-2"
                          : "text-left py-2 px-2 "
                      }
                    >
                      {editMode ? (
                        <input
                          value={value}
                          onChange={(e) =>
                            setEditableInfo({
                              ...editableInfo,
                              [key]: e.target.value,
                            })
                          }
                        />
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-between">
            {/* Display the "정보수정하기" button */}
            {editMode ? (
              <button
                onClick={handleSaveUser}
                className="bg-purple-500 hover:bg-purple-600 active:bg-purple-800 text-white px-4 py-2 rounded-xl shrink-0 m-7"
              >
                저장하기
              </button>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={() => handlefixUser()}
                  className="bg-purple-500 hover:bg-purple-600 active:bg-purple-800 w-32 text-white px-4 py-2 rounded-xl shrink-0 m-7"
                >
                  정보수정하기
                </button>
                <div className="flex items-center justify-between w-[20vw]">
                  <button className="text-black text-center">회원탈퇴</button>
                  <button className="text-black text-center">로그아웃</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="fixed bottom-0 w-full z-10">
          <Image
            src={GradientBackgroundmyPage}
            alt="배경색"
            className="w-full bg-[#FAFAFA]"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default ProfileChange;
