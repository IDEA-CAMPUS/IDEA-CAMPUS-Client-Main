import { useEffect } from "react";

const LogOut = async () => {
  try {
    const response = await fetch(
      "https://ideacampus.site:8080/api/user/sign-out",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
      }
    );
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default LogOut;
