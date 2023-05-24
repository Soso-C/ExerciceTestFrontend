import React from "react";
import { CgProfile } from "react-icons/cg/index";
import { AiOutlineMenu } from "react-icons/ai/index";

export default function Navbar() {
  return (
    <nav className="h-[100px] bg-white w-full">
      <div className="flex flex-col justify-center h-full">
        <div className="flex items-center justify-between px-4 w-full">
          <div className="flex items-center">
            <AiOutlineMenu className="text-red-500 w-7 h-7 pr-2" />
            <span className="block text-black uppercase">Menu</span>
            <h1 className=" text-black pl-20 text-3xl tracking-widest">
              L'effet pappilon
            </h1>
          </div>
          <div className="flex px-4">
            <div className="flex flex-col justify-center">
              <p className="text-red-500 uppercase text-sm font-medium">
                Mon compte
              </p>
              <p className="text-gray-400 text-xs font-light">
                Bonjour Charly-Gandhi
              </p>
            </div>
            <CgProfile className="ml-4 w-6 h-6 text-red-500" />
          </div>
        </div>
      </div>
    </nav>
  );
}
