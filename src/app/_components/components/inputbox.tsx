import { ChangeEvent, useEffect, useState } from "react";

export const Input = ({
  placeholder,
  label,
  className,
  type,
  value,
  onChange,
  w,
  disabled,
}: {
  placeholder?: string;
  label: string;
  className?: string;
  type?: "text" | "password" | "email" | undefined;
  value: string; // 입력 필드의 값
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 변경 이벤트 핸들러
  w?: string;
  disabled?: boolean;
}) => {
  const [inputType, setInputType] = useState(type);

  const handleView = () => {
    inputType === "password"
      ? setInputType(undefined)
      : setInputType("password");
  };

  useEffect(() => {
    let width = "";
    {
      w ? (width = "360px") : "";
    }
  }, []);

  return (
    <div className={`flex flex-col ${className} relative`}>
      <label className="text-[18px] mb-[5px] font-[500]">{label}</label>
      <input
        type={inputType}
        value={value} // 외부에서 받은 값
        onChange={onChange} // 외부에서 받은 onChange 핸들러
        placeholder={placeholder}
        className={`border rounded pl-[12px] py-[12px] box-border placeholder:font-[18px] placeholder:text-[#6b6b6b] h-[50px] bg-[#f5f5f5] ${
          w ? "w-[360px]" : "w-[500px]"
        }`}
        disabled={disabled}
      />
      {inputType !== "password" ? (
        <></>
      ) : (
        <img
          src="/view.svg"
          className="w-[24px] h-[24px] cursor-pointer absolute right-[12px] top-[43px]"
          onClick={handleView}
        ></img>
      )}
    </div>
  );
};

interface CheckBoxProps {
  name: string;
  value: string;
  checked: boolean;
  onCheck: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  checked,
  onCheck,
  value,
}) => {
  return (
    <div className="flex items-center">
      <input
        name={name}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onCheck}
      />
      <label className="ml-[15px]">{label}</label>
    </div>
  );
};
