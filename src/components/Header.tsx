import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center bg-blue-950  justify-between w-[80%] py-3 fixed z-50 top-0 ">
      <Image src="/image/Logo.png" width={50} height={50} alt="logo" />
      <div className="flex items-center gap-5 ">
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default Header;
