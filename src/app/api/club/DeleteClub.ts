import { useEffect } from "react";

const PostClub = async (id: number) => {
  try {
    const response = await fetch(
      `https://ideacampus.site:8080/api/club/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
      }
    );
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default PostClub;
