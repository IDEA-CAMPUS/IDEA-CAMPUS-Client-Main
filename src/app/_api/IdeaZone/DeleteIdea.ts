import { useEffect, useState } from "react";

interface SubmitProps {
  props: IdeaFormData;
}

interface IdeaFormData {
  title: string;
  simpleDescription: string;
  keyword: string;
  detailedDescription: string;
  url1: string;
  url2: string;
}

interface ApiResponse {
  message: string;
}

const getIdea = () => {
  const [ideaData, setIdeaData] = useState<ApiResponse | undefined>();

  useEffect(() => {
    const fetchIdeaData = async () => {
      try {
        const response = await fetch(
          "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/idea",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // You may need to add other necessary headers
            },
          }
        );

        const result: ApiResponse = await response.json();
        setIdeaData(result);
      } catch (error) {
        console.error("Error fetching ideaData:", error);
      }
    };

    fetchIdeaData();
  }, []); // Include props in the dependency array

  return ideaData;
};

export default getIdea;
