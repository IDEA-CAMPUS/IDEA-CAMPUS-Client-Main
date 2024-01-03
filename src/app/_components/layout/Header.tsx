import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white text-black p-4">
      <div className="flex items-center">
        <Image src="/Logo.svg" width={108} height={40} alt="Logo" />
      </div>

      <div className="flex items-center">
        <div className="rounded-full overflow-hidden mr-5">
          <Image src="/Profile.svg" width={40} height={40} alt="Profile" />
        </div>
        <p className="mr-10">Your Nickname</p>
        <button className="bg-orange-300 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
