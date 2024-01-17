const PostProject = async (formData: FormData) => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${localStorage.getItem("login-token")}`
  );
  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://ideacampus.site:8080/api/project",
      requestOptions
    );
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default PostProject;
