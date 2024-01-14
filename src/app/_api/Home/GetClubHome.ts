import { useEffect, useState } from "react";

interface InformationItem {
  title: string;
  description: string;
  createdAt: string;
  nickname: string;
  thumbnail: string | null;
}

interface ApiResponse {
  check: boolean;
  information: InformationItem[];
  message: null | string;
}

const GetClubHome = () => {
  const [clubData, setClubData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchclubData = async () => {
      try {
        const response = await fetch(
          "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/home/club"
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

export default GetClubHome;
