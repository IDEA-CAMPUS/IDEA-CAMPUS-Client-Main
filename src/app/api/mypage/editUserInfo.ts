import axios, { AxiosResponse } from "axios";

export const editUserInfo = async (bodyData: {}) => {
  try {
    await axios.put(
      `https://ideacampus.site:8080/api/my-page/user-info`,
      bodyData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
      }
    );
    // location.reload();
  } catch (error) {
    alert(error);
  }
};
