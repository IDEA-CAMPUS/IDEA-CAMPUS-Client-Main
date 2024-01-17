"use client";

import { useEffect, useState } from "react";

interface Option {
  value: string;
  name: string;
}

export const SelectBox = ({
  options,
  defaultValue,
  className,
  selectHandle,
}: {
  options: Option[];
  defaultValue: string;
  className?: string;
  selectHandle: (selectedValue: string) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState("직접입력");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    selectHandle(selectedValue);
  }, [selectedValue]);

  return (
    <select
      className={`border bg-[#f5f5f5] ${className}`}
      value={selectedValue}
      onChange={handleSelectChange}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          // selected={defaultValue === option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};
