"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import GradientBackgroundmyPage from "public/myPage/graidentBackgroundmyPage.png";
// import AlertModal from "@/app/myPage/_components/AlertModal";
import { NavBar } from "@/app/components/components/naviBar";
import { ColorChangeModal } from "@/app/components/myPage/colorChangeModal";
import { MyPageUserInfo } from "@/app/api/mypage/getUserInfo";
import { UserInfoType } from "@/app/api/mypage/getUserInfo";
import profileImage from "@/../public/profileImage.png";
import { editUserInfo } from "@/app/api/mypage/editUserInfo";

const ProfileChange = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    color: "",
    name: "",
    nickname: "",
    email: "",
    phoneNumber: "",
    organization: "",
  });

  const handleChangeInput = (e: { target: { value: any; name: any } }) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleColorChange = (color: string) => {
    setUserInfo({
      ...userInfo,
      color: color,
    });
  };

  console.log(userInfo.color);

  // 폼이 현재 편집 모드인지 여부를 관리하는 상태
  const [editMode, setEditMode] = useState<boolean>(false);

  const handlefixUser = () => {
    setEditMode(!editMode);
    console.log("Test");
  };

  const [isShow, setIsShow] = useState<boolean>(false);

  const handleModalToggle = () => {
    setIsShow((prev) => !prev);
  };

  useEffect(() => {
    MyPageUserInfo({ setter: setUserInfo });
  }, []);

  const handleSaveUser = () => {
    // 여기에 사용자 정보를 업데이트하는 로직 추가    API
    // const formData = new FormData();
    // formData.append("name", userInfo.name);
    // formData.append("color", userInfo.color);
    // formData.append("nickname", userInfo.nickname);
    // formData.append("organization", userInfo.organization);
    // formData.append("phoneNumber", userInfo.phoneNumber);

    const bodyData = {
      name: userInfo.name,
      color: userInfo.color,
      nickname: userInfo.nickname,
      organization: userInfo.organization,
      phoneNumber: userInfo.phoneNumber,
      email: userInfo.email,
    };

    editUserInfo(bodyData);
    // 성공적인 업데이트 이후, 폼을 초기화하고 편집 모드를 비활성화할 수 있습니다.
    setEditMode(false);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="fixed w-full">
        <NavBar />
      </div>
      <div className="flex flex-col w-[100vw] items-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center justify-center mt-44 mb-10 z-30">
          <div
            style={{
              backgroundColor: `${userInfo.color}`,
            }}
            className={`w-36 h-36 rounded-[100%] relative`}
          >
            <Image src={profileImage} alt="프로필이미지" className="mt-3" />
          </div>
          <button
            onClick={handleModalToggle}
            className="bg-[#F9F9f9] hover:bg-purple-600 active:bg-purple-700 border-2 border-[#B034F7] text-[#262626] px-4 py-1 rounded-2xl shrink-0 m-6"
          >
            배경색 변경
          </button>
          {isShow && (
            <>
              <div className="fixed top-0 left-0 w-full bg-black opacity-50 z-30"></div>
              <div className="w-[400px] h-[600px] bg-white mt-[-200px] text-black z-40 shadow-xl rounded-xl">
                <ColorChangeModal
                  userInfoData={userInfo}
                  onChange={handleColorChange}
                  onToggle={handleModalToggle}
                />
              </div>
            </>
          )}
          <div className="flex flex-col w-[32vw] text-black">
            <div className="flex w-full justify-between py-5">
              <p className="text-purple-600">이름</p>
              <input
                name="name"
                value={userInfo.name}
                className="bg-transparent w-80 outline-none"
                onChange={handleChangeInput}
                readOnly={!editMode}
              />
            </div>
            <div className="flex w-full justify-between py-5 border-b-2 border-purple-600">
              <p className="text-purple-600">닉네임</p>
              <input
                name="nickname"
                onChange={handleChangeInput}
                value={userInfo.nickname}
                className="bg-transparent w-80 outline-none"
                readOnly={!editMode}
              />
            </div>
            <div className="flex w-full justify-between py-5">
              <p className="text-purple-600">아이디(이메일)</p>
              <input
                name="email"
                onChange={handleChangeInput}
                value={userInfo.email}
                className="bg-transparent w-80 outline-none"
                readOnly
              />
            </div>
            <div className="flex w-full justify-between py-5">
              <p className="text-purple-600">휴대폰</p>
              <input
                name="phoneNumber"
                onChange={handleChangeInput}
                value={userInfo.phoneNumber}
                className="bg-transparent w-80 outline-none"
                readOnly={!editMode}
              />
            </div>
            <div className="flex w-full justify-between py-5">
              <p className="text-purple-600">소속동아리</p>
              <input
                onChange={handleChangeInput}
                value={userInfo.organization}
                className="bg-transparent w-80 outline-none"
                readOnly={!editMode}
              />
            </div>
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
                  onClick={handlefixUser}
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
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileChange;
