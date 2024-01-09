import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w-full h-[60px] bg-white">
      <div className="flex gap-[64px]">
        <img src="/logo.svg"></img>
        <Link className="h-[full] flex ">아이디어 존</Link>
        <Link>프로젝트 갤러리</Link>
        <Link>동아리</Link>
      </div>
      <div className="flex justify-end gap-[42px]">
        <Link to="/login">로그인</Link>
        <Link to="/regist">회원가입</Link>
      </div>
    </div>
  );
};
