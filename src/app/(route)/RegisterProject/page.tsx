import ProjectGalleryRegisterBackGround from "public/ProjectGallery/ProjectGalleryRegisterBackGround.svg";
import Image from "next/image";

const RegisterProject = () => {
  return (
    <main className="bg-white w-fit text-black flex flex-col items-center mx-auto">
      <div className="items-start">
        <Image
          src={ProjectGalleryRegisterBackGround}
          alt="projectgallerybackground1"
        />
        <div className="bg-[#FCF6FF] h-screen"></div>
      </div>
      <div className="absolute mt-24 text-white">
        <p className="text-3xl text">프로젝트 등록하기</p>
      </div>
    </main>
  );
};

export default RegisterProject;
