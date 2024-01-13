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
          "https://ideacampus.site:8080/api/home/club"
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
