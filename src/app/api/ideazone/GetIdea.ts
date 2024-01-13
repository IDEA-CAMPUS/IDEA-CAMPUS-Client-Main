import { useEffect, useState } from "react";

interface Idea {
  keyword: string;
  keyWord: string;
  id: string;
  hits: any;
  title: string;
  thumbnail: string;
  nickName: string;
  simpleDescription: string;
  color: string;
  createdAt: string;
}

interface ApiResponse {
  check: boolean;
  information: Idea[];
  message: string | null;
}

const GetIdea = () => {
  const [ideaData, setideaData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchideaData = async () => {
      try {
        const response = await fetch("https://ideacampus.site:8080/api/idea");
        const result: ApiResponse = await response.json();
        setideaData(result);
      } catch (error) {
        console.error("Error fetching ideaData:", error);
      }
    };

    fetchideaData();
  }, []);

  return ideaData;
};

export default GetIdea;
