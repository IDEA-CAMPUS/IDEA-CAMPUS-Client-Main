import { useState, useEffect } from "react";

export const useToast = () => {
  const [toastConfig, setToastConfig] = useState<{
    message: string;
    show: boolean;
  }>({
    message: "",
    show: false,
  });

  const showToast = (message: string, duration = 3000) => {
    setToastConfig({ message, show: true });
    setTimeout(() => {
      setToastConfig({ message: "", show: false });
    }, duration);
  };

  return {
    ToastComponent: () => {
      return (
        <div
          className={`absolute top-[20px] right-[20px] ${
            toastConfig.show ? "visible" : "invisible"
          } `}
        >
          <div className="box-border px-[24px] py-[12px] rounded-[10px] bg-white border-b-4 border-[#E04F5F]">
            <div className="flex">
              <img src="/close.svg" className="w-[34px] h-[34px]"></img>
              <div className="text-[24px] font-bold ml-[14px]">
                {toastConfig.message}
              </div>
            </div>
          </div>
        </div>
      );
    },
    showToast,
  };
};
