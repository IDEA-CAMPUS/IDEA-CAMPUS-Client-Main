import { useEffect, useState } from "react";

const DeleteProject = async (id: Number) => {
  try {
    const response = await fetch(
      `https://ideacampus.site:8080/api/project/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // You may need to add other necessary headers
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
      }
    );
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default DeleteProject;
