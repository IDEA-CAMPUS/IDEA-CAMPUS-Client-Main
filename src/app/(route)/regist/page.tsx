"use client";

import { CheckBox, Input } from "@/app/components/components/inputbox";
import { NextButton, TextButton } from "@/app/components/components/buttons";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ChangeEvent } from "react";
import { useToast } from "@/app/class/tost";
import { doubleCheck, regist } from "@/app/api/regist";
import { SelectBox } from "@/app/components/components/select";
import AlertModal from "@/app/components/myPage/AlertModal";
import { ok } from "assert";

export default function Regist() {
  const pathname = usePathname();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const [organization, setOrganization] = useState("");

  const [allIsChecked, setAllIsChecked] = useState(false);

  const [selectedValue, setSelectedValue] = useState("직접입력");

  const [agreeMarketingSms, setAgreeMarketingSms] = useState<
    boolean | undefined
  >(false);

  const [idRight, setIdRight] = useState<boolean | undefined>(undefined);
  const [nickRight, setNickRight] = useState<boolean | undefined>(undefined);
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const inputStates = [
    email,
    password,
    phoneNumber,
    name,
    nickName,
    checkPassword,
    organization,
  ];

  const areAllInputsFilled = () => {
    return (
      allIsChecked &&
      inputStates.every((inputState) => inputState.trim() !== "")
    );
  };

  interface Option {
    value: string;
    name: string;
  }

  const OPTIONS: Option[] = [
    { value: "직접입력", name: "직접입력" },
    { value: "없음", name: "없음" },
    { value: "SOPT", name: "SOPT" },
    { value: "NEXTERS", name: "NEXTERS" },
    { value: "디프만", name: "디프만" },
    { value: "UMC", name: "UMC" },
    { value: "멋사", name: "멋사" },
    { value: "CMC", name: "CMC" },
    { value: "YAPP", name: "YAPP" },
    { value: "Mash-up", name: "Mash-up" },
    { value: "프로그라피", name: "프로그라피" },
    { value: "피로그래밍", name: "피로그래밍" },
    { value: "DND", name: "DND" },
    { value: "코테이토", name: "코테이토" },
    { value: "BOAZ", name: "BOAZ" },
    { value: "투빅스", name: "투빅스" },
    { value: "BITAmin", name: "BITAmin" },
  ];

  const { ToastComponent, showToast } = useToast();

  const selectHandle = (selectedValue: string) => {
    setSelectedValue(selectedValue);
    setOrganization(selectedValue);
  };

  const [smallCheckBoxs, setSmallCheckBoxs] = useState([
    {
      name: "agreement",
      value: "check1",
      label: "서비스 이용약관 (필수)",
      checked: false,
      className: "round small",
    },
    {
      name: "agreement",
      value: "check2",
      label: "개인정보 처리방침 (필수)",
      checked: false,
      className: "round small",
    },
  ]);

  const handleRegist = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await regist({
        email,
        name,
        nickName,
        password,
        checkPassword,
        phoneNumber,
        organization,
        agreeMarketingSms,
      });
      console.log("response", response);
      if (response?.check === true) {
        setIsAlert(true);
      } else {
        alert("오류가 발생했습니다.");
      }

      //정보저장
    } catch (error) {
      console.error("에러가 발생했습니다:", error);
    }
  };

  const WrongMessage = ({
    text,
    visible,
  }: {
    text: string;
    visible?: boolean;
  }) => {
    return (
      <div
        className={`w-full flex justify-start mt-[8px] ${
          visible ? "visible" : "invisible"
        }`}
      >
        <div className="text-[18px] text-[#E11960] font-medium">{text}</div>
      </div>
    );
  };

  const onSingleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value;
    setSmallCheckBoxs(
      smallCheckBoxs.map((item) =>
        targetValue === item.value
          ? { ...item, checked: !item.checked }
          : { ...item }
      )
    );
  };

  const onAllCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setAllIsChecked((prev) => !prev);
    // 각 약관 체크박스의 상태를 업데이트
    setSmallCheckBoxs(
      smallCheckBoxs.map((item) => ({
        ...item,
        checked: e.target.checked,
      }))
    );

    // "마케팅 수신 동의" 체크박스의 상태도 업데이트
    setAgreeMarketingSms(e.target.checked);
  };

  const handleAgreeMarketingSms = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    setAgreeMarketingSms(checked); // agreeMarketingSms 상태 업데이트
    console.log("allIsChecked", allIsChecked);
  };

  useEffect(() => {
    setAllIsChecked(smallCheckBoxs.every((item) => item.checked));
  }, [smallCheckBoxs]);

  const handleError = (text: string) => {
    const containsAlphaNumeric = (input: string): boolean => {
      const containsLetter = /[a-zA-Z]/.test(input); // 영문자 포함 여부 확인
      const containsNumber = /[0-9]/.test(input); // 숫자 포함 여부 확인

      return containsLetter && containsNumber; // 영문자와 숫자가 둘 다 포함되어 있어야 함
    };

    const pwLength = () => {
      if (password.length >= 8) {
        if (password.length < 17) return true;
      } else {
        return false;
      }
    };

    switch (text) {
      case "idEmail":
        if (idRight == undefined) {
          return false;
        } else if (idRight == true) {
          return true;
        } else {
          return true;
        }
      case "name":
        //자음만 있는 것이 아닌 올바른 한글인가를 검증하는 정규식
        const hasAlphabetOrHangul = /^(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣]+$/.test(
          name
        );
        if (name === "") {
          return true; // 빈 문자열이면 오류 상태 (true 반환)
        }

        if (name.length < 2) {
          return true; // 2글자 미만이면 오류 상태 (true 반환)
        }

        if (!hasAlphabetOrHangul) {
          return true; // 영어 또는 한글이 하나 이상 포함되지 않으면 오류 상태 (true 반환)
        }

        // 모든 조건을 통과하면 거짓 반환
        return false;

      case "nickName":
        if (nickRight == undefined) {
          return false;
        } else if (nickRight == true) {
          return false;
        } else {
          return true;
        }
      case "password":
        if (containsAlphaNumeric(password)) {
          if (pwLength()) {
            return false;
          } else {
            return true;
          }
        } else if (password === "") {
          return false;
        } else {
          return true;
        }
      case "checkPassword":
        if (password.localeCompare(checkPassword) == 0) {
          return false;
        } else {
          return true;
        }
      case "phoneNumber": {
        if (/[0-9]/.test(phoneNumber)) {
          if (phoneNumber.length === 11) {
            return false;
          }
        } else if (phoneNumber === "") {
          return false;
        } else {
          return true;
        }
      }
    }
  };

  const handleIDCheck = async () => {
    try {
      const response = await doubleCheck("email", email);

      if (response === true) {
        setIdRight(true);
        // showToast("사용 가능한 아이디입니다.", 2000);
      } else {
        setIdRight(false);
        // showToast("중복된 아이디입니다.", 2000);
      }

      //정보저장
    } catch (error) {
      console.error("에러가 발생했습니다:", error);
    }
  };

  const handleNickCheck = async () => {
    try {
      const response = await doubleCheck("", nickName);

      if (response === true) {
        setNickRight(true);
        alert("사용 가능한 닉네임입니다.");
        // showToast("사용 가능한 닉네임입니다.", 2000);
      } else {
        setNickRight(false);
      }

      //정보저장
    } catch (error) {
      console.error("에러가 발생했습니다:", error);
    }
  };

  return (
    <div className="h-fit-content text-black  bg-white flex flex-col justify-center items-center relative z-[10]">
      {/* <NavBar /> */}
      <div className="items-center flex flex-col justify-evenly box-border z-10">
        <ToastComponent />
        <div className="text-center text-[36px] font-bold mt-[183px]">
          회원가입
        </div>
        <form onSubmit={handleRegist} className="flex flex-col items-start">
          <div className="flex relative w-full items-end">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="아이디(이메일)"
              placeholder="이메일 주소를 입력해주세요."
              className="mt-[49px]"
              w="1"
              disabled={idRight}
            />
            <div
              className="w-[130px] h-[50px] box-border ml-[8px] px-[8px] py-[4px] rounded bottom-0 right-0 border flex justify-center items-center bg-[#f5f5f5] cursor-pointer"
              onClick={handleIDCheck}
            >
              중복확인
            </div>
          </div>
          <WrongMessage
            text={
              idRight ? "사용 가능한 아이디입니다." : "중복된 아이디입니다."
            }
            visible={handleError("idEmail")}
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
            visible={handleError("name")}
          />

          <div className="flex relative w-full items-end">
            <Input
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              label="닉네임"
              placeholder="닉네임을 입력해주세요."
              className="mt-[31px]"
              w="1"
              disabled={nickRight}
            />
            <div
              className="w-[130px] h-[50px] box-border ml-[8px] px-[8px] py-[4px] rounded bottom-0 right-0 border flex justify-center items-center bg-[#f5f5f5] cursor-pointer"
              onClick={handleNickCheck}
            >
              중복확인
            </div>
          </div>

          <WrongMessage
            text="이미 존재하는 닉네임입니다"
            visible={handleError("nickName")}
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
            visible={handleError("password")}
          />
          <Input
            type="password"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            label="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            className="mt-[31px]"
          />
          <WrongMessage
            text="입력한 비밀번호가 서로 일치하지 않습니다"
            visible={handleError("checkPassword")}
          />
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="휴대전화번호"
            placeholder="‘-’ 빼고 숫자만 입력"
            className="mt-[31px]"
          />
          <WrongMessage
            text="휴대전화번호를 정확하게 입력해주세요"
            visible={handleError("phoneNumber")}
          />
          <div className="flex relative w-full items-end">
            <Input
              type="text"
              value={selectedValue === "직접입력" ? undefined : selectedValue}
              onChange={(e) => {
                setOrganization(e.target.value),
                  console.log("organization:", organization);
              }}
              label="소속 동아리"
              placeholder="소속 동아리를 입력해주세요."
              className="mt-[31px] "
              w="1"
              disabled={selectedValue !== "직접입력" ? true : false}
            />
            <SelectBox
              options={OPTIONS}
              defaultValue="직접 입력"
              className="w-[130px] h-[50px] box-border ml-[8px] px-[8px] py-[4px] rounded bottom-0 right-0 border"
              selectHandle={selectHandle}
            />
          </div>

          <div className="flex flex-col items-start w-full mt-[150px]">
            {/* <CheckBox
              name="agreement"
              value="all"
              checked={allIsChecked}
              onCheck={onAllCheck}
              label="아래 약관에 모두 동의합니다."
            >
              모두 동의하기
            </CheckBox> */}
            <div className="flex flex-col gap-[8px] box-border pl-[12px] mt-[12px]">
              {smallCheckBoxs.map((item) => (
                <CheckBox
                  key={item.value}
                  name={item.name}
                  value={item.value}
                  checked={item.checked}
                  onCheck={onSingleCheck}
                  label={item.label}
                ></CheckBox>
              ))}
              {/* <CheckBox
                name="agreement"
                value="check3"
                checked={agreeMarketingSms}
                onCheck={handleAgreeMarketingSms}
                label="마케팅 수신 동의 (선택)"
                className="round small"
              ></CheckBox> */}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <NextButton
              text="회원가입"
              className="mt-[42px]"
              type="submit"
              disabled={!areAllInputsFilled()}
            ></NextButton>
          </div>
        </form>
        {isAlert && (
          <AlertModal text="아이디어 캠퍼스 입학을 축하드립니다!" url="login" />
        )}
      </div>
      <div className="w-full h-[230px] bg-[url('/wave.svg')] bottom-0 z-[-1]"></div>
    </div>
  );
}
