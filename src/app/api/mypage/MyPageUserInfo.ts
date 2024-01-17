import { useEffect, useState } from "react";

interface informationItem {
    color : string;
    name : string;
    nickname : string;
    email : string;
    phoneNumber : string;
    organization : string;
}

interface ApiResponse {
    check : true;
    information : informationItem[];
    message : string | null;
}

const MyPageUserInfo = () => {
    const [MyPageUser, setMyPageUser] = useState<ApiResponse | null>(null)

    useEffect(()=> {
        const fetchMyPageUserInfo = async () => {
            try {
                const response = await fetch(
                    "https://ideacampus.site:8080/api/my-page/posts",
                    {
                        headers: {
                            "Content-Type" : "application/json",
                            Authorization: `Bearer ${localStorage.getItem("login-token")}`,
                          
                        }
                    }
                );
                const result: ApiResponse = await response.json();
                setMyPageUser(result);
            } catch(error) {
                console.log("Error fetching User-info: ",error);
            }
        };
        fetchMyPageUserInfo();
    })

    return MyPageUserInfo;
}

export default MyPageUserInfo
