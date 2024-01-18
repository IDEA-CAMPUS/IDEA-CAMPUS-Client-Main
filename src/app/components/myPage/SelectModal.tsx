"use client";

import LogOut from "@/app/api/logout";
import { useRouter } from "next/navigation";
import React, { useState, FC } from "react";

interface AlertModalProps {
  text: string;
  url?: string;
  onClose: () => void;
  onClick: () => void;
}

const SelectModal: FC<AlertModalProps> = ({ text, onClose, onClick, url }) => {
  const router = useRouter();

  const handleConfirm = async () => {
    router.push("/");
    onClose();
    LogOut();
    onClick();

    localStorage.removeItem("login-token");
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-80 p-6 rounded-md">
          {/* 모달 내용 */}
          <p className="text-black text-md text-center font-bold mb-4">
            {text}
          </p>
          {/* 확인 버튼 */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleCancel}
              className="bg-white text-purple-700 font-semibold px-2 py-2 rounded-md"
            >
              취소
            </button>
            <button
              onClick={handleConfirm}
              className="bg-white text-purple-700 font-semibold px-2 py-2 rounded-md"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectModal;
