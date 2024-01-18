import axios, { AxiosResponse } from "axios";

export interface informationItem {
  title: string;
  type: string;
  createdAt: string;
}

export const getUserPosts = async (): Promise<
  AxiosResponse<informationItem[]>
> => {
  try {
    const result = await axios.get(
      `https://ideacampus.site:8080/api/my-page/posts`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
      }
    );
    return result.data.information;
  } catch (error) {
    throw error;
  }
};
