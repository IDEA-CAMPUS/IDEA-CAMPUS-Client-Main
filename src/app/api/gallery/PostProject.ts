const PostProject = async (formData: FormData) => {
  try {
    const response = await fetch("https://ideacampus.site:8080/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Successfully posted project:", responseData);
    } else {
      console.error("Failed to post project. Status:", response.status);
    }
  } catch (error) {
    console.error("Error posting project:", error);
  }
};

export default PostProject;
