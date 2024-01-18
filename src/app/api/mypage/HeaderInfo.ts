import { useEffect, useState } from "react";


interface informationItem {
    nickname : string;
    color : string;
}

interface ApiResponse {
    check : boolean;
    information: informationItem[];
    message : string | null;
}


const GetHeaderInfo = () => {
  const [ headerInfo, setHeaderInfo] = useState<ApiResponse | null>(null)
  
  useEffect(() => {
    const fetchHeaderInfo = async () => {
        try {
            const response = await fetch(
                "https://ideacampus.site:8080/api/my-page/header/user-info",
                {
                    headers: {
                        "Content-Type" : "application/json",
                        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
                    
                    }
                }
            );
            const result: ApiResponse = await response.json();
            setHeaderInfo(result);
        } catch(error) {
            console.error("Error fetching user-info:", error);
        }
    };
    fetchHeaderInfo();
  })

  return headerInfo;
};

export default GetHeaderInfo;