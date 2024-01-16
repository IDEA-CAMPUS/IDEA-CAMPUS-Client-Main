import { useEffect, useState } from "react";

const GetCheckClubId = (id: number) => {
  const [checkId, setCheckId] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchcheckId = async () => {
      try {
        const response = await fetch(
          `https://ideacampus.site:8080/api/club/check/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("login-token")}`,
            },
          }
        );
        const result: boolean = await response.json();
        setCheckId(Boolean(result));
      } catch (error) {
        console.error("Error fetching checkId:", error);
      }
    };

    fetchcheckId();
  }, []);

  return checkId;
};

export default GetCheckClubId;
