import { useEffect, useState } from "react";

interface Content {
  title: string;
  description: string;
  createdAt: string;
  nickname: string;
  thumbnail: string;
}

interface Information {
  content: Content[];
}

interface ApiResponse {
  check: true;
  information: Information;
  message: null;
}

const GetClub = () => {
  const [clubData, setClubData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchclubData = async () => {
      try {
        const response = await fetch(
          "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/club"
        );
        const result: ApiResponse = await response.json();
        setClubData(result);
      } catch (error) {
        console.error("Error fetching clubData:", error);
      }
    };

    fetchclubData();
  }, []);

  return clubData;
};

export default GetClub;
