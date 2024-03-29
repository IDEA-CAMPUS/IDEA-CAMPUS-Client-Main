export const TextButton = ({
  text,
  className,
  onClick,
  textStyle,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  textStyle?: string;
}) => {
  return (
    <div className={`min-h-[26px]  box-border ${className}`} onClick={onClick}>
      <div
        className={`text-[#6B6B6B] font-[18px] cursor-pointer flex flex-row justify-center items-center ${textStyle} `}
      >
        {text}
      </div>
    </div>
  );
};

export const NextButton = ({
  text,
  className,
  onClick,
  textColor,
  type,
  disabled,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`cursor-pointer min-h-[26px] min-w-[99px] w-[430px] box-border py-[10px] rounded-[100px] border ${
        disabled ? "bg-[#F5F5F5]  rounded" : "bg-[#B034F7]  border-white"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div
        className={`font-[18px] cursor-pointer flex flex-row justify-center items-center ${
          disabled ? "text-black" : "text-white"
        } ${textColor}`}
      >
        {text}
      </div>
    </button>
  );
};
