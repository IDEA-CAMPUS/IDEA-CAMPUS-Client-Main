import { useEffect, useState } from "react";

interface ApiResponse {
  message: string;
}

const DeleteProject = async (id: string) => {
  try {
    const response = await fetch(
      `http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/project/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // You may need to add other necessary headers
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
      }
    );
    const result: ApiResponse = await response.json();
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default DeleteProject;
