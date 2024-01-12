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

const GetProjectKeyWord = (buttonStates: { [key: string]: boolean }) => {
  const [projectData, setProjectData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/project/keyword",
          {
            body: JSON.stringify({
              booleanApp: buttonStates[0],
              booleanWeb: buttonStates[1],
              booleanAi: buttonStates[2],
            }),
          }
        );
        const result: ApiResponse = await response.json();
        setProjectData(result);
      } catch (error) {
        console.error("Error fetching ProjectData:", error);
      }
    };

    fetchProjectData();
  }, []);

  return projectData;
};

export default GetProjectKeyWord;