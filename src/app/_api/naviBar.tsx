interface ServerResponse {
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  timestamp?: string;
  message?: string;
  code?: string;
  status?: number;
  class?: string;
  errors?: [
    {
      field: string;
      value: {};
      reason: string;
    }
  ];
  check?: boolean;
  information?: { nickName?: string; color?: string };
}

export async function loginState() {
  console.log("login-token:", localStorage.getItem("login-token"));
  try {
    const resp = await fetch(
      "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/api/my-page/header/user-info",
      {
        method: "GET", // 여기를 POST로 변경
        headers: {
          "Content-Type": "application/json",
          // Authorization:
          //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNCIsImlhdCI6MTcwNDk3MDIwMCwiZXhwIjoxNzA0OTczODAwfQ.qdQqNWuo4RYMh3a1bF84bwwl4RJjx1ZBVkiSpC_KyKtHKEusrXug9Z00suoNmUBurV_f1Qzkj5x4xj3Sa7W9sQ",
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
          // 여기에 필요한 다른 헤더 추가
        },
        //   body: JSON.stringify({
        //     email: email,
        //     password: password,
        //   }), // 만약 POST 요청에 데이터를 보내려면 body에 데이터를 추가
      }
    );

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data: ServerResponse = await resp.json();
    console.log("data", data);

    if (data.check) {
      console.log("Data received:", data.information);
      return data;
    } else {
      console.error("Error occurred:", data.message || "Unknown error");
    }
  } catch (error) {
    console.error("Error:", error || "Unknown error");
  }
}
