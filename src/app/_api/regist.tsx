interface Idea {
  title: string;
  simpleDescription: string;
  keyword: string;
  nickName: string;
  color: string;
}

interface ServerResponse {
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
  check: boolean;
  information?: boolean;
}

export async function doubleCheck(type: string, checkData: string) {
  const resp = await fetch(
    `http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/auth${
      type === "email" ? `/email/${checkData}` : `/nickname/${checkData}`
    }`
  );

  const data: ServerResponse = await resp.json();

  if (data.check) {
    console.log("Data received:", data.information);
  } else {
    console.error("Error occurred:", data.message || "Unknown error");
  }
  return data.information;
}

export async function regist({
  email,
  name,
  nickName,
  password,
  checkPassword,
  phoneNumber,
  organization,
  agreeMarketingSms,
}: {
  email: string;
  name: string;
  nickName: string;
  password: string;
  checkPassword: string;
  phoneNumber: string;
  organization: string;
  agreeMarketingSms: boolean | undefined;
}) {
  try {
    const resp = await fetch(
      "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/auth/sign-up",
      {
        method: "POST", // 여기를 POST로 변경
        headers: {
          "Content-Type": "application/json",
          // 여기에 필요한 다른 헤더 추가
        },
        body: JSON.stringify({
          idEmail: email,
          name: name,
          nickname: nickName,
          password: password,
          checkPassword: checkPassword,
          phoneNumber: phoneNumber,
          organization: organization,
          agreeMarketingSms: agreeMarketingSms,
        }), // 만약 POST 요청에 데이터를 보내려면 body에 데이터를 추가
      }
    );
    console.log(
      "request:",
      email,
      name,
      nickName,
      password,
      checkPassword,
      phoneNumber,
      organization,
      agreeMarketingSms
    );
    console.log("resp", resp);
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data: ServerResponse = await resp.json();

    return data;
    // if (data.check) {
    //   console.log("Data received:", data.information);

    // } else {
    //   console.error("Error occurred:", data.message || "Unknown error");

    // }
  } catch (error) {
    // console.error("Error:", error.message || "Unknown error");
  }
}
