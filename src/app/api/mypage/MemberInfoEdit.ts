import { useEffect, useState } from "react";

interface informationItem {
    title : string;
    type : string;
    createdAt : string;
}


interface ApiResponse {
    check : true;
    information : informationItem[];
    message : string | null;
}


const MemberInfoEdit = () => {
  const [ memberInfo , setMemberInfo ] = useState<ApiResponse | null>(null)

  useEffect(()=> { 
    const fetchmemberInfo = async () => {
        try {
            const response = await fetch(
                "https://ideacampus.site:8080/api/my-page/posts",
                {
                    headers: {
                        "Content-Type" : "application/json",
                        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
                        //eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNCIsImlhdCI6MTcwNTMyMDE1NywiZXhwIjoxNzA1MzIzNzU3fQ.r83sK2F1T3zOicqEjVZLfHtOomjS0WrSjxXXPs67Zjqwv0-cMnhLBr1YcprYiqJnkkwrw2iQ8fTSoUHqQfjP-g
                    }
                }
            );
            const result: ApiResponse = await response.json();
            setMemberInfo(result);
        } catch(error) {
            console.error("Error fetching Member-info:",error);
        }
    };
    fetchmemberInfo();
  })

  return MemberInfoEdit;
}

export default MemberInfoEdit