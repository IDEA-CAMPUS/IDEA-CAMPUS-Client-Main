import { useEffect } from "react";

interface ClubPostRequest {
  title: string;
  description: string;
  url1: string;
  url2: string;
}

interface ClubPostData {
  clubPostReq: ClubPostRequest;
  images: string[];
}

// const dataToSend = {
//   postProjectReq: {
//     // 프로젝트 게시 Request에 대한 데이터를 여기에 추가
//   },
//   images: [
//     // images 배열에 대한 데이터를 여기에 추가
//   ],
// };

const PostClub = async (formData: FormData) => {
  try {
    const response = await fetch("https://ideacampus.site:8080/api/club", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
      body: formData,
    });
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default PostClub;
