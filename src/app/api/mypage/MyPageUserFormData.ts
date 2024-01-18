interface UserFormData {
  name: string;
  nickname: string;
  email: string;
  phoneNumber: string;
  organization: string;
  color: string;
}

const MyPageUserFormData = async (userData: UserFormData | undefined) => {
  try {
    const response = await fetch(
      `https://ideacampus.site:8080/api/my-page/user-info`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
        body: JSON.stringify({
          name: userData?.name,
          nickname: userData?.nickname,
          email: userData?.email,
          phoneNumber: userData?.phoneNumber,
          organization: userData?.organization,
          color: userData?.color,
        }),
      }
    );
  } catch (error) {
    console.error("Error fetching userFormData :", error);
  }
};

export default MyPageUserFormData;
