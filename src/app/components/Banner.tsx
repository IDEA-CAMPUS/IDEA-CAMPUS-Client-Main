import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface contentProps {
  title: string;
  saveFileUrl: string;
}
const Banner: React.FC<contentProps> = ({ title, saveFileUrl }) => {
  const router = useRouter();

  return (
    <div className="mt-[-4250px] w-[1204px] h-[400px] bg-gray-300">
      <Image src={saveFileUrl} alt="banner" width={1204} height={400} />)
    </div>
  );
};
export default Banner;
