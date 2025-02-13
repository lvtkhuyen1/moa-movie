import React from "react";
import Image from "next/image";
import search from "@/assets/icons/search-icon.png";
import logo from "@/assets/logo/logo.png";
import Input from "./Base/Input";

export default function Header() {
  return (
    <div className="w-full flex justify-between gap-2 py-4">
      <div className="flex items-center aspect-[141/50]">
        <Image src={logo} alt="logo" width={141} height={50} />
      </div>
      <div className="w-full flex gap-3 justify-end items-center mx-3">
        <Input className="w-full md:w-[270px] rounded-full bg-[#323232] text-center py-0 md:py-1"></Input>
        <Image
          src={search}
          alt="Search"
          className="object-cover w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
}
