export async function loginState() {
  console.log("login-token:", localStorage.getItem("login-token"));
  try {
    const resp = await fetch(
      "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/my-page/header/user-info",
      {
        method: "GET", // 여기를 POST로 변경
        headers: {
          "Content-Type": "application/json",
          // Authorization:
          //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNCIsImlhdCI6MTcwNDk3MDIwMCwiZXhwIjoxNzA0OTczODAwfQ.qdQqNWuo4RYMh3a1bF84bwwl4RJjx1ZBVkiSpC_KyKtHKEusrXug9Z00suoNmUBurV_f1Qzkj5x4xj3Sa7W9sQ",
          Authorization: localStorage.getItem("login-token"),
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

    const data =
      // : ServerResponse
      await resp.json();

    return data;

    // if (data.check) {
    //   console.log("Data received:", data.information);
    //   return true;
    // } else {
    //   // console.error("Error occurred:", data.message || "Unknown error");
    //   return false;
    // }
  } catch (error) {
    // console.error("Error:", error.message || "Unknown error");
  }
}
