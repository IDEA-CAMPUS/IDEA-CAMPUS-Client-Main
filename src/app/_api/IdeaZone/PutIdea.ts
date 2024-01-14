import { useEffect, useState } from "react";

interface Idea {
  id: string;
  hits: any;
  keyWord: any;
  title: string;
  thumbnail: string;
  nickName: string;
  simpleDescription: string;
  detailedDescription: string;
  color: string;
  url1: string;
  url2: string;
  createdAt: string;
}

interface ApiResponse {
  message: string;
}

const PutIdea = (ideaDate: Idea | undefined) => {
  useEffect(() => {
    const fetchIdeaData = async () => {
      try {
        const response = await fetch(
          `http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/idea/${ideaDate?.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              // You may need to add other necessary headers
            },
            body: JSON.stringify({
              title: ideaDate?.title,
              keyWord: ideaDate?.keyWord,
              simpleDescription: ideaDate?.simpleDescription,
              detailedDescription: ideaDate?.detailedDescription,
              url1: ideaDate?.url1,
              url2: ideaDate?.url2,
            }),
          }
        );
        const result: ApiResponse = await response.json();
      } catch (error) {
        console.error("Error fetching ideaData:", error);
      }
    };
    fetchIdeaData();
  }, []); // Include props in the dependenZcy array
};

export default PutIdea;
