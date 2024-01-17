interface resetPwProps {
  check: false;
  information: {
    timestamp: string;
    message: string;
    code: string;
    status: number;
    class: string;
    errors: ValidationError[];
  };
  message: null;
}

interface ValidationError {
  field: string;
  value: string;
  reason: string;
}

const resetPw = async (code: string, password: string, rePassword: string) => {
  try {
    const response = await fetch(
      `https://ideacampus.site:8080/auth/change-password/${code}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
        body: JSON.stringify({
          password: password,
          rePassword: rePassword,
        }),
      }
    );
    const result: resetPwProps = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching ideaData:", error);
  }
};

export default resetPw;
