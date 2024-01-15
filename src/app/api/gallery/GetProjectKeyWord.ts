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
        const queryString = `?booleanWeb=${booleanWeb}&booleanApp=${booleanApp}&booleanAi=${booleanAi}`;
        const response = await fetch(
          `https://ideacampus.site:8080/api/project/keyword${queryString}`
        );
        const result: ApiResponse = await response.json();
        setProjectData(result);
        console.log("pro; " + projectData);
      } catch (error) {
        console.error("Error fetching ProjectData:", error);
      }
    };

    fetchProjectData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return projectData;
};

export default GetProjectKeyWord;
