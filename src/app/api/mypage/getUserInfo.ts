import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export interface UserInfoType {
  color: string;
  name: string;
  nickname: string;
  email: string;
  phoneNumber: string;
  organization: string;
}

interface setterProps {
  setter: Dispatch<SetStateAction<UserInfoType>>;
}

export const MyPageUserInfo = async (props: setterProps) => {
  try {
    const result = await axios.get(
      `https://ideacampus.site:8080/api/my-page/user-info`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
      }
    );
    //@ts-ignore
    props.setter(result.data.information);
    return result.data.information;
  } catch (error) {
    throw error;
  }
};
