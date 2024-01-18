// "use client";

import axios, { AxiosResponse } from "axios";

export interface informationItem {
    title : string;
    type : string;
    createdAt : string;
}


interface ApiResponse {
    check : true;
    information : informationItem[];
    message : string | null;
}


// const MemberInfoEdit = () => {
//   const [ memberInfo , setMemberInfo ] = useState<ApiResponse | null>(null)

//   useEffect(()=> { 
//     const fetchmemberInfo = async () => {
//         try {
//             const response = await fetch(
//                 "https://ideacampus.site:8080/api/my-page/posts",
//                 {
//                     headers: {
//                         // "Content-Type" : "application/json",
//                         Authorization: `Bearer ${localStorage.getItem("login-token")}`,
                        
//                     }
//                 }
//             );
//             const result: ApiResponse = await response.json();
//             setMemberInfo(result);
//             console.log(memberInfo);
//         } catch(error) {
//             console.error("Error fetching Member-info:",error);
//         }
//     };
//     fetchmemberInfo();
//   })

//   return memberInfo;
// }

// export default MemberInfoEdit

export const MemberInfoEdit = async (): Promise<AxiosResponse<informationItem[]>> => {
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