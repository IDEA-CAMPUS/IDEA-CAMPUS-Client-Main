import { useEffect, useState } from "react";

interface Project {
  booleanWeb: boolean;
  booleanApp: boolean;
  booleanAi: boolean;
  title: string;
  thumbnail: string;
  team: string;
  simpleDescription: string;
}

interface ApiResponse {
  check: boolean;
  information: Project[];
  message: string | null;
}

const GetProjectHome = () => {
  const [projectData, setProjectData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchprojectData = async () => {
      try {
        const response = await fetch(
          "https://ideacampus.site:8080/api/home/project"
        );
        const result: ApiResponse = await response.json();
        setProjectData(result);
      } catch (error) {
        console.error("Error fetching projectData:", error);
      }
    };

    fetchprojectData();
  }, []);

  return projectData;
};

export default GetProjectHome;
