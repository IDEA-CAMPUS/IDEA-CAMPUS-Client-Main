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

const FixProject = async (
  projectData: ProjectFormData | undefined,
  id: number,
  images: Array<{ name: string; url: string; size: string }>
) => {
  try {
    const response = await fetch(
      `https://ideacampus.site:8080/api/project/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
        body: JSON.stringify({
          title: projectData?.title,
        }),
      }
    );
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default FixProject;
