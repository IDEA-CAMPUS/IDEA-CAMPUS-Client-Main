"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { findID, findPW, login } from "@/app/api/login";
import { useToast } from "@/app/class/tost";
import { NextButton, TextButton } from "@/app/components/components/buttons";
import { Input } from "@/app/components/components/inputbox";

export default function Login() {
  // const [findID, setFindID] = useState(false);
  const [page, setPage] = useState("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");

  const pathname = usePathname();
  const router = useRouter();

  const { ToastComponent, showToast } = useToast();

  useEffect(() => {
    window.scrollTo();
  }, [page]);

  switch (page) {
    case "":
      const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //토스트로직 만들기

        try {
          const response = await login({
            email,
            password,
          });
          console.log("response", response);

          if (response?.accessToken) {
            localStorage.setItem("login-token", response.accessToken);
            console.log(response.tokenType);
            if (router) {
              router.push("/");
            }
          } else {
            showToast("올바르지 않은 아이디 혹은 비밀번호입니다", 2000);
          }

          //정보저장
        } catch (error) {
          console.error("에러가 발생했습니다:", error);
        }
      };
      return (
        <div className="h-screen text-black bg-white flex justify-center items-center relative z-[10]">
          <div className="w-full h-[230px] bg-[url('/wave.svg')] fixed bottom-0 z-[-1]"></div>
          <ToastComponent />
          <div className="flex flex-col items-center box-border justify-evenly z-10">
            <Image
              src="/logo.svg"
              alt="logo"
              width={404}
              height={145}
              className="mb-[50px] cursor-pointer"
            ></Image>

            <form onSubmit={handleLogin} className="flex flex-col items-center">
              <Input
                type="email"
                placeholder="아이디(이메일)을 입력해주세요."
                label="아이디(이메일)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type="password"
                placeholder="영문, 숫자 포함 8~16자"
                label="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-[24px]"
              />
              <NextButton
                text="로그인"
                className="mt-[42px] "
                type="submit"
              ></NextButton>
            </form>

            <div className="flex flex-row items-center justify-center mt-[41px]">
              <TextButton
                text="아이디 찾기"
                onClick={() => setPage("findID")}
              ></TextButton>
              <div className="mx-[11px]">|</div>
              <TextButton
                text="비밀번호 찾기"
                onClick={() => setPage("findPW")}
              ></TextButton>
              <div className="mx-[11px]">|</div>
              <TextButton
                text="회원가입"
                onClick={() => router.push("/regist")}
              ></TextButton>
            </div>

            <Image
              src="/google.svg"
              alt="google"
              width={80}
              height={45}
              className="mt-[50px] cursor-pointer z-10"
              // onClick={() => googleLogin}
            ></Image>
          </div>
        </div>
      );

    case "findID":
      const handleFindID = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("name:", name, "number", number);
        try {
          const response = await findID({
            name,
            number,
          });
          console.log("response", response);
          if (response?.check == true) {
            setPage("returnID");
            if (router) {
              // router.push("/");
            }
          } else {
            showToast("존재하는 아이디가 없습니다.", 2000);
          }

          //정보저장
        } catch (error) {
          console.error("에러가 발생했습니다:", error);
        }
        //api 받아와서 저장
        //   if(nameWrong){
        //     에러메시지토스트
        //   }else if(numberWrong){
        //     에러메시지토스트
        //   }else{
        //     onClick={() => setPage("returnID")}
        //   }
      };
      return (
        <div className="h-screen text-black  bg-white flex justify-center items-center relative z-[10]">
          <div className="w-full h-[230px] bg-[url('/wave.svg')] fixed bottom-0 z-[-1]"></div>
          <div className="items-center flex flex-col justify-evenly box-border z-10">
            <div className="text-center text-[36px] font-bold">아이디 찾기</div>
            <form
              onSubmit={handleFindID}
              className="flex flex-col items-center"
            >
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="이름"
                placeholder="가입하신 이름을 입력해주세요."
                className="mt-[49px]"
              />
              <Input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                label="전화번호"
                placeholder="가입하신 전화번호를 입력해주세요."
                className="mt-[24px]"
              />
              <NextButton
                text="아이디 찾기"
                className="mt-[42px] "
                // onClick={() => setPage("returnID")}
                //api작업시 온클릭 삭제
                type="submit"
              ></NextButton>
            </form>
            <div className="flex flex-row items-center justify-center mt-[78px]">
              <TextButton
                text="비밀번호를 잊으셨나요?"
                onClick={() => setPage("findPW")}
                textStyle="underline"
              ></TextButton>
            </div>
          </div>
        </div>
      );

    case "findPW":
      const handleFindPW = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
          const response = await findPW({
            email,
            number,
          });

          if (response?.check) {
            alert("이메일이 전송 되었습니다.");
            if (router) {
              // router.push("/");
            }
          } else {
            alert("error");
            showToast("존재하는 계정이 없습니다.", 2000);
          }

          //정보저장
        } catch (error) {
          console.error("에러가 발생했습니다:", error);
        }

        //api 받아옴
        //   if(emailWrong){
        //     에러메시지토스트
        //   }else if(numberWrong){
        //     에러메시지토스트
        //   }else{
        //     onClick={() => setPage("returnPW")}
        //     sendEmail
        //   }
      };
      return (
        <div className="h-screen text-black  bg-white flex justify-center items-center relative z-[10]">
          <div className="w-full h-[230px] bg-[url('/wave.svg')] fixed bottom-0 z-[-1]"></div>
          <div className="items-center flex flex-col justify-center box-border z-10">
            <div className="text-center text-[36px] font-bold">
              비밀번호 찾기
            </div>
            <form
              onSubmit={handleFindPW}
              className="flex flex-col items-center"
            >
              <Input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label="이메일"
                placeholder="가입하신 이메일을 입력해주세요."
                className="mt-[49px]"
              />
              <Input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                label="전화번호"
                placeholder="가입하신 전화번호를 입력해주세요."
                className="mt-[24px]"
              />
              <NextButton
                text="비밀번호 찾기"
                type="submit"
                className="mt-[35px] "
                // onClick={() => setPage("returnPW")}
                //api작업시 onClick삭제
              ></NextButton>
            </form>
          </div>
        </div>
      );

    case "returnID":
      return (
        <div className="h-screen text-black bg-white flex justify-center items-center relative z-[10]">
          <div className="w-full h-[230px] bg-[url('/wave.svg')] fixed bottom-0 z-[-1]"></div>
          <div className="items-center flex flex-col justify-center box-border z-10">
            <div className="text-center text-[36px]">아이디 찾기</div>
            <div className="mt-[49px] font-medium">
              가입하신 아이디를 찾아왔어요!
            </div>
            <div className="text-center text-[36px] mt-[30px] w-[304px] h-fit-content box-border py-[5px] border-b-2 border-[#6b6b6b]">
              {email}
              이메일
            </div>

            <NextButton
              text="로그인하러 가기"
              onClick={() => setPage("")}
              className="mt-[49px]"
            ></NextButton>
            <TextButton
              text="비밀번호를 잊으셨나요?"
              onClick={() => setPage("findPW")}
              className="mt-[77px]"
              textStyle="underline"
            ></TextButton>
          </div>
        </div>
      );

    case "returnPW":
      return (
        <div className="h-screen  text-black bg-white flex justify-center items-center relative z-[10]">
          <div className="w-full h-[230px] bg-[url('/wave.svg')] fixed bottom-0 z-[-1]"></div>
          <div className="items-center flex flex-col justify-center box-border z-10">
            <div className="text-center text-[36px] font-bold">
              비밀번호 찾기
            </div>
            <div className="mt-[49px] max-w-[420px] text-center font-medium">
              가입하신 이메일로 비밀번호 재설정 링크를 보냈어요!
            </div>
            <div className="text-center text-[36px] w-[304px] h-fit-content box-border py-[5px] border-b-2 border-[#6b6b6b] mb-[49px]">
              {email}
              이메일
            </div>
            <NextButton
              text="로그인하러 가기"
              onClick={() => setPage("")}
            ></NextButton>
          </div>
        </div>
      );

    case "resetPW":
      const handleResetPW = () => {
        //api 받아옴
        //   if(emailWrong){
        //     에러메시지토스트
        //   }else if(numberWrong){
        //     에러메시지토스트
        //   }else{
        //     onClick={() => setPage("returnPW")}
        //     sendEmail
        //   }
      };
      return (
        <div className="h-screen  text-black  bg-white flex justify-center items-center relative z-[10]">
          <div className="w-full h-[230px] bg-[url('/wave.svg')] fixed bottom-0 z-[-1]"></div>
          <div className="items-center flex flex-col justify-center box-border z-10">
            <div className="text-center text-[36px] font-bold">
              비밀번호 재설정 하기
            </div>
            <form
              onSubmit={handleResetPW}
              className="flex flex-col items-center"
            >
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
                onClick={() => setPage("")}
                //api작업시 onClick삭제
              ></NextButton>
            </form>
          </div>
        </div>
      );
  }
}
