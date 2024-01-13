import { useEffect, useState } from "react";

interface Idea {
  keyword: string;
  title: string;
  simpleDescription: string;
  keyWord: string;
  nickName: string;
  color: string;
}

interface ApiResponse {
  check: boolean;
  information: Idea[];
  message: string | null;
}

const GetIdeaHome = () => {
  const [ideaData, setIdeaData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchIdeaData = async () => {
      try {
        const response = await fetch(
          "https://ideacampus.site:8080/api/home/idea"
        );
        const result: ApiResponse = await response.json();
        setIdeaData(result);
      } catch (error) {
        console.error("Error fetching ideaData:", error);
      }
    };

    fetchIdeaData();
  }, []);

  return ideaData;
};

export default GetIdeaHome;
