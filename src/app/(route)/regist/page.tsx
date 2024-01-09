"use client";

import { Input } from "@/app/_components/components/inputbox";
import { NextButton, TextButton } from "@/app/_components/components/buttons";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Regist() {
  const pathname = usePathname();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");

  const handleRegist = () => {
    if (router) {
      router.push("/login");
    }
  };

  const WrongMessage = ({
    text,
    visible,
  }: {
    text: string;
    visible?: () => void;
  }) => {
    return (
      <div className="w-full flex justify-start mt-[8px]">
        <div className="text-[18px] text-[#E11960] font-medium">{text}</div>
      </div>
    );
  };

  return (
    <div className="h-fit-content  bg-white flex flex-col justify-center items-center relative z-[10]">
      <div className="items-center flex flex-col justify-evenly box-border z-10">
        <div className="text-center text-[36px] font-bold mt-[183px]">
          회원가입
        </div>
        <form onSubmit={handleRegist} className="flex flex-col items-center">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="아이디(이메일)"
            placeholder="이메일 주소를 입력해주세요."
            className="mt-[49px]"
          />
          <WrongMessage
            text="이메일 형식을 확인해주세요"
            //   visible={handleEmail}
          />
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="이름"
            placeholder="2자 이상 입력해주세요."
            className="mt-[31px]"
          />
          <WrongMessage
            text="2자 이상 입력해주세요"
            //   visible={handleEmail}
          />
          <Input
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            className="mt-[31px]"
          />
          <WrongMessage
            text="이미 존재하는 닉네임입니다"
            //   visible={handleEmail}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="비밀번호"
            placeholder="영문, 숫자 포함 8~16자"
            className="mt-[31px]"
          />
          <WrongMessage
            text="8~16자 이내로 입력해주세요"
            //   visible={handleEmail}
          />
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            label="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            className="mt-[31px]"
          />
          <WrongMessage
            text="입력한 비밀번호가 서로 일치하지 않습니다"
            //   visible={handleEmail}
          />
          <Input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            label="전화번호"
            placeholder="‘-’ 빼고 숫자만 입력"
            className="mt-[31px]"
          />
          <WrongMessage
            text="휴대폰번호를 정확하게 입력해주세요"
            //   visible={handleEmail}
          />
          <NextButton
            text="회원가입"
            className="mt-[42px] "
            type="submit"
          ></NextButton>
        </form>
      </div>
      <div className="w-full h-[230px] bg-[url('/wave.svg')] bottom-0 z-[-1]"></div>
    </div>
  );
}
