"use client";

import { useEffect, useState } from "react";

interface Information {
  title: string;
  description: string;
  createdAt: string;
  url1: string;
  url2: string;
  nickname: string;
  thumbnail: string;
  otherImages: string[];
}

interface ApiResponse {
  check: boolean;
  information: Information;
  message: null | string;
}

const GetClubDetail = (id: number) => {
  const [clubData, setClubData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchclubData = async () => {
      try {
        const response = await fetch(
          `https://ideacampus.site:8080/api/club/${id}`
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

export default GetClubDetail;
