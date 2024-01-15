import { useEffect, useState } from "react";

type IdeaInformation = {
  id: number;
  title: string;
  simpleDescription: string;
  keyword: string[];
  nickName: string;
  color: string;
  hits: number;
  createdAt: string;
};

type ApiResponse = {
  check: boolean;
  information: IdeaInformation[];
};

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
