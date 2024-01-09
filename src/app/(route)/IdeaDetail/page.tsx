"use client";

import React from "react";
import Image from "next/image";

import IdeaDetailBackground from "public/IdeaZone/IdeaDetailBackground.png";
import FixButton from "@/app/_components/IdeaZone/FixButton";
import Profile from "public/Profile.svg";

const exampleText =
  "죄송합니다, 저는 외부로 링크를 생성하거나 직접적인 외부 서비스에 접속하여 정보를 업데이트하는 기능을 지원하지 않습니다. 하지만 글을 위한 예시를 드릴게요.한 오래된 마을의 이야기를 담은 깃허브 레포지토리가 있다면, 그 곳에서는 마을 주민들의 삶과 문화를 소개하는 문서들과 사진들이 모여있을 것입니다. 이 마을은 옛 생활 방식을 유지하면서도 현대의 변화와 조화를 이루고 있습니다. 이 레포지토리 안에는 마을의 역사와 전설, 그리고 주변 자연 환경을 소개하는 파일들이 있을 것입니다. 사람들은 이를 통해 마을의 아름다움과 자연 속에서의 평화로운 삶을 감상할 수 있을 것입니다. 또한, 마을의 지역 행사나 문화 행사에 대한 정보도 담겨 있을 것입니다. 이 깃허브 레포지토리는 마을을 알리는 데 사용되며, 주민들은 이를 통해 마을에 대한 자부심을 느낄 것입니다. 마을에 관심 있는 사람들은 여기를 방문하여 다양한 정보와 이야기를 나누며, 마을을 더 깊이 이해하고 소통할 수 있을 것입니다. 이는 지역사회와 온라인 커뮤니티 간의 연결을 도모하는 데에 큰 도움이 될 것입니다. 죄송합니다, 저는 외부로 링크를 생성하거나 직접적인 외부 서비스에 접속하여 정보를 업데이트하는 기능을 지원하지 않습니다. 하지만 더 많은 글을 통해 이야기를 이어가겠습니다. 마을의 깃허브 레포지토리에는 마을 주변의 아름다운 자연 경관과 함께 주민들의 일상, 그들이 속한 공동체의 소식들이 담겨 있을 것입니다. 이곳은 주민들이 일상의 사진이나 행사 소식을 나누며 마을의 아름다움과 활기를 전하고 있는 곳입니다. 또한, 마을 주민들이 전해온 다양한 이야기와 전설들이 기록되어 있을 것입니다. 이들은 세대를 초월하여 전해져 온 마을의 문화와 역사를 반영합니다. 그리고 지난 날의 모습과 현재의 변화가 어우러져 마을의 아이덴티티를 형성하고 있습니다. 이 레포지토리는 마을에 관심 있는 이들에게 마을의 특별함과 매력을 전달하는 중요한 수단이 될 것입니다. 지역 사회와의 소통을 통해 다양한 혜택을 주민들에게 제공하며, 더 넓은 공동체와의 연결성을 높일 수 있는 좋은 기회가 될 것입니다. 마을의 아름다움과 따뜻한 이야기가 깃허브 레포지토리를 통해 세상과 소통하며 더 많은 이들에게 전달될 수 있기를 바랍니다.";

const exampleLink = "https://www.youtube.com/?hl=ko&gl=KR";

const IdeaDetail = () => {
  const handleUpload = () => {
    // 여기에 파일 업로드 로직 추가
    console.log("TEST");
  };

  const keyword1 = "test",
    keyword2 = "tset",
    keyword3 = "Test";

  return (
    <main className="flex flex-col bg-white items-center justify-center relative">
      <div className="mt-[100px] h-full z-10">
        <Image
          src={IdeaDetailBackground}
          alt="ideaDetailBackground"
          width={1005}
        />
      </div>
      <div className="mt-[-300px] mx-32 mb-20 w-[1000px] h-auto z-20">
        <div className="flex items-center justify-between">
          <div className="mx-32">
            <p className="mt-7 text-black text-md">n명 조회</p>
            <p className="text-black font-bold text-5xl">title</p>
            <p className="mt-3 text-black text-lg">설명들</p>
            <div className="flex mt-2 w-auto space-x-3">
              {keyword1 && (
                <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] shadow-lg flex items-center justify-center">
                  {keyword1}
                </p>
              )}
              {keyword2 && (
                <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] shadow-lg flex items-center justify-center">
                  {keyword2}
                </p>
              )}
              {keyword3 && (
                <p className="w-auto px-3 h-8 rounded-full bg-[#FFE292] border-2 border-[#FFCF4A] shadow-lg flex items-center justify-center">
                  {keyword3}
                </p>
              )}
            </div>
          </div>
          <div className="mr-24 items-center justify-center flex flex-col">
            <Image src={Profile} alt="profile" width={70} />
            <p className="mt-3 text-black text-lg">설명들</p>
          </div>
        </div>
      </div>
      <div className="mt-[-300px] mb-20 w-[1000px] h-auto border-2 border-gray-100 rounded-2xl shadow-lg bg-white">
        <div className="flex flex-col mx-32 mt-[400px]">
          <p className="text-black font-bold text-2xl">상세 설명</p>
          <p className="mt-7 text-black text-lg">{exampleText}</p>
          <p className="mt-20 text-black font-bold text-2xl">관련 링크</p>
          <p className="mt-7 text-black text-lg">{exampleLink}</p>
        </div>
        {/* 바뀐 거 있나 확인 */}
        <div className="items-center justify-center mb-20 mt-32 flex space-x-5">
          <FixButton title="취소하기" onClick={handleUpload} />
          <FixButton title="삭제하기" onClick={handleUpload} />
        </div>
      </div>
    </main>
  );
};
export default IdeaDetail;
