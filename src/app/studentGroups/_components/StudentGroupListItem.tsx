import React from "react";
import Image from "next/image";
import GradientBackground from "@/assests/images/gradientBackground.png";

const StudentGrouplistItem = () => {
  return (
    <div className="bg-white flex w-full justify-between mt-5 p-6 rounded-xl shadow-lg">
      <div>
        <h5 className="text-2xl text-[#000000]">
          UMC 3기 동아리원을 모집합니다.
        </h5>
        <h3 className="text-lg text-[#6B6B6B] mt-2.5">
          저희 UMC는 IT동아리로 이러한 활동들을 진행합니다~
        </h3>
        <h1 className="text-sm text-[#A6A6A6] mt-5">00/00 | 사용자 닉네임</h1>
      </div>
      <Image
        src={GradientBackground}
        alt="gradientBackground"
        className="w-28 h-28"
      />
    </div>
  );
};

export default StudentGrouplistItem;
