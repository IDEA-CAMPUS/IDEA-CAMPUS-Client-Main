"use client";

import { useState } from "react";
import { NextPage } from "next";

const YourPage: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0OSIsImlhdCI6MTcwNTQ1NDI0NiwiZXhwIjoxNzA1NDU3ODQ2fQ.n3P3PC5TmaTNprS8LtJ8wVSitYuHeIYBtovnBScInkbwDBJCU3iUTCqAhtuWTLhrmW3RuvREN9o6apcNo_fwvQ"; // Replace with your actual access token

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const formdata = new FormData();
    formdata.append("title", "test");
    formdata.append("simpleDescription", "test");
    formdata.append("detailedDescription", "test");
    formdata.append("teamInformation", "test");
    formdata.append("githubUrl", "test");
    formdata.append("webUrl", "test");
    formdata.append("googlePlayUrl", "test");
    formdata.append("booleanWeb", "true");
    formdata.append("booleanApp", "true");
    formdata.append("booleanAi", "true");

    if (file) {
      formdata.append(
        "images",
        file,
        "KakaoTalk_Image_2024-01-12-17-35-17.png"
      );
    }

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://ideacampus.site:8080/api/project",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YourPage;
