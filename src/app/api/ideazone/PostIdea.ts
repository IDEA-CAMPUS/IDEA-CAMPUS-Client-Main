import { useEffect } from "react";

interface Idea {
  keyWord: string;
  title: string;
  simpleDescription: string;
  detailedDescription: string;
  url1: string;
  url2: string;
}

const PostIdea = async (ideaData: Idea | undefined) => {
  try {
    const response = await fetch("https://ideacampus.site:8080/api/idea", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
      body: JSON.stringify({
        title: ideaData?.title,
        simpleDescription: ideaData?.simpleDescription,
        keyword: ideaData?.keyWord,
        detailedDescription: ideaData?.detailedDescription,
        url1: ideaData?.url1,
        url2: ideaData?.url2,
      }),
    });
    console.log("Upload image:", ideaData);
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default PostIdea;
