import { useEffect, useState } from "react";

type BannerInformation = {
  title: string;
  saveFileUrl: string;
};

type ApiResponse = {
  check: boolean;
  information: BannerInformation[];
  message: null;
};

const GetBanner = () => {
  const [bannerData, setBannerData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchbannerData = async () => {
      try {
        const response = await fetch(
          "https://ideacampus.site:8080/api/banner?type=PROJECT"
        );
        const result: ApiResponse = await response.json();
        setBannerData(result);
      } catch (error) {
        console.error("Error fetching bannerData:", error);
      }
    };

    fetchbannerData();
  }, []);

  return bannerData;
};

export default GetBanner;
