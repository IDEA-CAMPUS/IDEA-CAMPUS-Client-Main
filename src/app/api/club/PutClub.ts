import { useEffect } from "react";

const PutClub = async (formData: FormData, id: number) => {
  try {
    const response = await fetch(
      `https://ideacampus.site:8080/api/club/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
        body: formData,
      }
    );
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default PutClub;
