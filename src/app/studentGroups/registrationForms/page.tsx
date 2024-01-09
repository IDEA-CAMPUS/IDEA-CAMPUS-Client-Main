import "next/link";
import Header from "@/app/_components/layout/Header";
import GradientBackground from "@/assests/images/gradientBackground.png";
import Image from "next/image";

const IdeaManage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col w-[100vw] items-center bg-[#FAFAFA]">
        {/* 등록폼 박스 만들기 */}
        <Image
          src={GradientBackground}
          alt="gradientBackground"
          className="h-3/5 absolute"
        />
        <div className="flex flex-col items-center mt-12 w-[71vw] z-20">
          {/* 텍스트 wrap */}
          <div className="flex w-full justify-center items-center">
            {/* 텍스트 */}
            <div>
              <h5 className="text-5xl text-center">홍보글 등록하기</h5>
              <h1 className="text-lg mt-3 text-center">
                당신의 아이디어를 마음껏 뽐내주세요
                <br />
                당신의 아이디어를 마음껏 뽑내주세요. 조금 더 긴 글씨
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center  mt-20 bg-white rounded-xl z-10 shadow-md">
          <div className="flex-col items-start w-[71vw] p-8 z-20">
            <p className="text-lg text-left font-semibold text-black">제목</p>
            <input
              type="text"
              id="formInput1"
              name="formInput1"
              className="w-full  px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="10글자 이내의 아이디어 제목을 입력해주세요"
            />
            <p className="text-lg text-left font-semibold text-black mt-4 ">
              상세설명
            </p>
            <textarea
              id="formInput1"
              name="formInput1"
              className="w-full h-[342px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black place-content-start"
              placeholder="상세 설명을 입력해주세요"
            />
            <p className="text-lg font-semibold text-black inline-block mr-1 mt-4">
              관련링크
            </p>
            <p className="text-base text-gray-400 inline-block">(선택)</p>
            <input
              type="text"
              id="formInput1"
              name="formInput1"
              className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="홍보 관련 링크를 등록해주세요"
            />
            <input
              type="text"
              id="formInput1"
              name="formInput1"
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="홍보 관련 링크를 등록해주세요"
            />
            <p className="text-lg text-left font-semibold text-black mt-4 ">
              사진등록
            </p>
            <hr className="my-2" />
            <p className="text-base text-left text-black">
              드래그 혹은 ‘파일 찾기’ 버튼을 통해 사진을 등록할 수 있습니다.
              <br />
              이미지는 1:1 사이즈로 업로드해주세요. 가장 상단의 이미지가
              썸네일로 등록됩니다
            </p>
            {/* 사진등록 폼 , 썸네일 미리보기 , 여러 개의 이미지 등록가능, 파일 찾기 기능 가능,*/}
            <div className="flex justify-between  bg-neutral-50 rounded-md mt-4 border border-gray-300">
              <div className="flex justify-start">
                <div className="relative">
                  <Image
                    src={GradientBackground}
                    alt="썸네일"
                    className="box-border h-32 w-32 m-4 rounded-md"
                  />
                  <div className="absolute inset-x-0 bottom-4 text-center text-black text-sm">
                    썸네일 미리보기
                  </div>
                </div>

                <div className="flex-col items-start text-start mt-4 ">
                  <div className="flex m-1 text-sm text-gray-400">000.jpg</div>
                  <div className="flex m-1 text-sm text-gray-400">000.jpg</div>
                </div>
              </div>

              <div className="flex flex-col justify-end mb-4 mr-4">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer bg-[#EFD6FD] hover:bg-purple-400 active:bg-purple-800 text-white px-4 py-2 rounded-xl shrink-"
                >
                  파일 찾기
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="hidden"
                  accept="image/*"
                  // Add an onChange event handler if you want to handle file selection
                />
              </div>
            </div>

            <div className="flex flex-row justify-center gap-4 mt-4 ">
              <button className="bg-gray-400 hover:bg-gray-500 active:bg-gray-800 text-white px-4 py-2 w-22 h-10 rounded-2xl shrink-0">
                취소하기
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 active:bg-purple-800 text-white px-4 py-2 w-22 h-10 rounded-2xl shrink-0">
                등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaManage;
