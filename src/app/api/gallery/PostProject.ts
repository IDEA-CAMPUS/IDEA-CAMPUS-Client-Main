import { useEffect } from "react";

interface ProjectFormData {
  title: string;
  booleanWeb: boolean;
  booleanApp: boolean;
  booleanAi: boolean;
  simpleDescription: string;
  detailedDescription: string;
  team: string;
  githubUrl: string;
  webUrl: string;
  googlePlayUrl: string;
}

interface Images {
  name: string;
  url: string;
  size: string;
}
[];

// const dataToSend = {
//   postProjectReq: {
//     // 프로젝트 게시 Request에 대한 데이터를 여기에 추가
//   },
//   images: [
//     // images 배열에 대한 데이터를 여기에 추가
//   ],
// };

const PostProject = async (
  ideaData: ProjectFormData | undefined,
  images: { name: string; url: string; size: string }[]
) => {
  try {
    const response = await fetch(
      "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/project",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
        body: JSON.stringify({
          postProjectReq: ideaData,
          images: images,
        }),
      }
    );
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default PostProject;
