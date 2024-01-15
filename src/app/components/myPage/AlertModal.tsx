"use client";
import { useState } from "react";

function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-80 p-6 rounded-md">
          {/* 모달 내용 */}
          <p className=" text-black text-md text-center font-bold mb-4">
            회원 탈퇴가 완료되었습니다.
          </p>

          {/* 확인 버튼 */}
          <div className="flex justify-center mt-6">
            <button className="bg-white text-purple-700 font-semibold px-2 py-2 rounded-md ">
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
