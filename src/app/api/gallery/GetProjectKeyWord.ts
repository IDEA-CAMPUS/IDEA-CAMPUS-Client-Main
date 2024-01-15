import { useEffect, useState } from "react";

interface Project {
  id: number;
  booleanWeb: boolean;
  booleanApp: boolean;
  booleanAi: boolean;
  team: string;
  title: string;
  simpleDescription: string;
  thumbnail: string;
  hits: number;
  createdAt: string;
}

interface Information {
  content: Project[];
}

interface ApiResponse {
  check: boolean;
  information: Information;
}

const GetProjectKeyWord = (
  booleanWeb: boolean,
  booleanApp: boolean,
  booleanAi: boolean
) => {
  const [projectData, setProjectData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const queryParams = `?booleanWeb=${booleanWeb}&booleanApp=${booleanApp}&booleanAi=${booleanAi}`;
        const response = await fetch(
          `https://ideacampus.site:8080/api/project/keyword?booleanWeb=true&booleanApp=true&booleanAi=true`
        );
        const result: ApiResponse = await response.json();
        setProjectData(result);
      } catch (error) {
        console.error("Error fetching ProjectData:", error);
      }
    };

    fetchProjectData();
  }, [booleanWeb, booleanApp, booleanAi]);

  return projectData;
};

export default GetProjectKeyWord;
