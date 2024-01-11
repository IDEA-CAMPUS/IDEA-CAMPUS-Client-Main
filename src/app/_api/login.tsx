interface Idea {
  title: string;
  simpleDescription: string;
  keyword: string;
  nickName: string;
  color: string;
}

interface ServerResponse {
  timestamp: string;
  message: string;
  code: string;
  status: number;
  class: string;
  errors: [
    {
      field: string;
      value: {};
      reason: string;
    }
  ];
  check: boolean;
  information: Idea[];
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const resp = await fetch(
      "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/auth/sign-in",
      {
        method: "POST", // 여기를 POST로 변경
        headers: {
          "Content-Type": "application/json",
          // 여기에 필요한 다른 헤더 추가
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }), // 만약 POST 요청에 데이터를 보내려면 body에 데이터를 추가
      }
    );

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data: ServerResponse = await resp.json();

    if (data.check) {
      console.log("Data received:", data.information);
      return true;
    } else {
      console.error("Error occurred:", data.message || "Unknown error");
      return false;
    }
  } catch (error) {
    console.error("Error:", error || "Unknown error");
  }
}

export async function findID({
  name,
  phoneNumber,
}: {
  name: string;
  phoneNumber: string;
}) {
  try {
    const resp = await fetch(
      "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/auth/find-id",
      {
        method: "Get", // 여기를 POST로 변경
        headers: {
          "Content-Type": "application/json",
          // 여기에 필요한 다른 헤더 추가
        },
        body: JSON.stringify({
          name: name,
          phoneNumber: phoneNumber,
        }), // 만약 POST 요청에 데이터를 보내려면 body에 데이터를 추가
      }
    );

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data: ServerResponse = await resp.json();

    if (data.check) {
      console.log("Data received:", data.information);
      return true;
    } else {
      console.error("Error occurred:", data.message || "Unknown error");
      return false;
    }
  } catch (error) {
    console.error("Error:", error || "Unknown error");
  }
}

export async function findPW({
  email,
  number,
}: {
  email: string;
  number: string;
}) {
  try {
    const resp = await fetch(
      "http://ec2-3-34-14-75.ap-northeast-2.compute.amazonaws.com:8080/mail/send-email",
      {
        method: "POST", // 여기를 POST로 변경
        headers: {
          "Content-Type": "application/json",
          // 여기에 필요한 다른 헤더 추가
        },
        body: JSON.stringify({
          email: email,
          phoneNumber: number,
        }), // 만약 POST 요청에 데이터를 보내려면 body에 데이터를 추가
      }
    );

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data: ServerResponse = await resp.json();

    if (data.check) {
      console.log("Data received:", data.information);
      return true;
    } else {
      console.error("Error occurred:", data.message || "Unknown error");
      return false;
    }
  } catch (error) {
    console.error("Error:", error || "Unknown error");
  }
}
