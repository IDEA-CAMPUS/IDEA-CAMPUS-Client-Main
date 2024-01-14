import { useEffect } from "react";

interface Idea {
  keyWord: any;
  title: string;
  simpleDescription: string;
  detailedDescription: string;
  url1: string;
  url2: string;
}

const fixIdea = async (ideaData: Idea | undefined, id: string) => {
  try {
    const response = await fetch(
      `http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/idea/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
        body: JSON.stringify({
          title: ideaData?.title,
          keyWord: ideaData?.keyWord,
          simpleDescription: ideaData?.simpleDescription,
          detailedDescription: ideaData?.detailedDescription,
          url1: ideaData?.url1,
          url2: ideaData?.url2,
        }),
      }
    );
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default fixIdea;
