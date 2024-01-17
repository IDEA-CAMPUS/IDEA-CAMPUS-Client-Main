"use client";

import { NextButton } from "@/app/components/components/buttons";
import { Input } from "@/app/components/components/inputbox";
import { useState } from "react";

const resetPW = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");
  const handleResetPW = () => {};
  return (
    <div className="h-screen  text-black  bg-white flex justify-center items-center relative z-[10]">
      <div className="w-full h-[230px] bg-[url('/wave.svg')] fixed bottom-0 z-[-1]"></div>
      <div className="items-center flex flex-col justify-center box-border z-10">
        <div className="text-center text-[36px] font-bold">
          비밀번호 재설정 하기
        </div>
        <form onSubmit={handleResetPW} className="flex flex-col items-center">
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            label="새로운 비밀번호"
            placeholder="새로운 비밀번호를 입력해주세요."
            className="mt-[24px]"
          />

          <Input
            value={reNewPassword}
            onChange={(e) => setReNewPassword(e.target.value)}
            label="새로운 비밀번호 확인"
            placeholder="새로운 비밀번호를 재입력해주세요."
            className="mt-[24px]"
          />
          {/* 
              매 입력시마다 reNewPassword에 저장 
              -> 매 입력시 newPassword와 reNewPassword 대조
              -> 차이없을 때 오류메시지 안보이게 or nextButton 활성화
              */}
          <NextButton
            text="비밀번호 재설정"
            type="submit"
            className="mt-[35px] "
            // onClick={() => setPage("")}
            //api작업시 onClick삭제
          ></NextButton>
        </form>
      </div>
    </div>
  );
};

export default resetPW;
