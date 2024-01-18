"use client";

import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { NavBar } from "@/app/components/components/naviBar";

const YourPage: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    router.push("/");
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YourPage;
