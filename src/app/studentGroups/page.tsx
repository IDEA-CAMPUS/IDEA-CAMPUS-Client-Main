import "next/link";
import Header from "../_components/layout/Header";
import GradientBackground from "@/assests/images/gradientBackground.png";
import Image from "next/image";
import StudentGrouplistItem from "./_components/StudentGroupListItem";

const IdeaManage = () => {
  const studentGroupList = Array.from({ length: 10 }, (_, index) => (
    <StudentGrouplistItem key={index} />
  ));

  return (
    <div>
      <Header />
      <div className="flex flex-c w-[100vw] items-center bg-[#FAFAFA]">
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
            <button className="bg-purple-500 hover:bg-purple-600 active:bg-purple-800 text-white px-4 py-2 w-22 h-10 rounded-2xl shrink-0">
              등록하기
            </button>
          </div>
          <div className="mt-40 w-full">{studentGroupList}</div>
        </div>
      </div>
    </div>
  );
};

export default IdeaManage;
