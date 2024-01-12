import { useEffect, useState } from "react";

interface ProjectInformation {
  title: string;
  simpleDescription: string;
  detailedDescription: string;
  teamInformation: string;
  githubUrl: string;
  webUrl: string;
  googlePlayUrl: string;
  hits: number;
  booleanWeb: boolean;
  booleanApp: boolean;
  booleanAi: boolean;
  thumbnail: string;
  otherImages: string[];
  createdAt: string;
}

interface ApiResponse {
  check: boolean;
  information: ProjectInformation;
  message: null | string;
}

const GetProjectDetail = (id: string) => {
  const [projectData, setProjectData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchprojectData = async () => {
      try {
        const response = await fetch(
          `http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/project/${id}`
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

export default GetProjectDetail;
