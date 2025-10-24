import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-20 shadow-lg fixed z-50 top-0 bg-purple-950/10">
      <Image src="/image/Logo.png" width={50} height={50} alt="logo" />
      <div className="flex items-center gap-5 ">
        <button>Signin</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
