const PostClub = async (formData: FormData) => {
  try {
    const response = await fetch("https://ideacampus.site:8080/api/club", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
      body: formData,
    });
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default PostClub;
