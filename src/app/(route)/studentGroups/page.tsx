"use client";

import "next/link";
import Header from "../../components/layout/Header";
import GradientBackground from "../../../../public/gradientBackground.png";
import Image from "next/image";
import StudentGrouplistItem from "../../components/studentGroups/StudentGroupListItem";
import { useRouter } from "next/navigation";
import GetClub from "../../api/club/GetClub";
import { NavBar } from "../../components/components/naviBar";

const StudentGroupts = () => {
  const clubData = GetClub();
  const clubList = clubData?.information.content;
  const router = useRouter();

  const handleonClick = () => {
    if (localStorage.getItem("login-token") !== null) {
      // 클릭 시 다음 페이지로 이동dd
      router.push("/registrationForms");
    } else {
      alert("로그인 후 이용해주세요");
      router.push("/login");
    }
  };

  // console.log(clubList[0].thumbnail);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col w-[100vw] items-center bg-[#FAFAFA]">
        <Image
          src={GradientBackground}
          alt="gradientBackground"
          className="h-3/5 absolute"
        />

        <div className="flex flex-col items-center mt-12 w-[71vw] z-20">
          <div className="flex w-full justify-between items-center">
            <div>
              <h5 className="text-5xl">동아리 학회</h5>
              <h1 className="text-lg mt-3">
                동아리 및 학회를 홍보할 수 있는 공간이에요.
                <br />
                함께 여러 이야기를 나누고 정보를 공유해요.
              </h1>
            </div>
            <button
              className="bg-purple-500 hover:bg-purple-600 active:bg-purple-800 text-white px-4 py-2 w-22 h-10 rounded-2xl shrink-0"
              onClick={handleonClick}
            >
              등록하기
            </button>
          </div>
          <div className="mt-40 w-full">
            {clubList?.map((content, contentIndex) => (
              <StudentGrouplistItem
                key={contentIndex}
                id={content.id}
                title={content.title}
                description={content.description}
                createdAt={content.createdAt}
                nickname={content.nickname}
                thumbnail={content.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentGroupts;