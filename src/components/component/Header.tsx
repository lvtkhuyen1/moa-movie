import React from 'react';
import Image from 'next/image';
import SearchIcon from '@/src/assets/icons/search-icon.png';
import logo from '@/src/assets/logo/logo.png';
import Input from './Base/Input';

export default function Header() {
  return (
    <div className="w-full flex justify-between gap-2 py-4">
      <div className="flex items-center aspect-[141/50]">
        <Image src={logo} alt="logo" width={141} height={50} />
      </div>
      <Input
        className="rounded-full bg-[#323232] md:w-[15%] w-[50%] mx-8 h-[50%] text-sm "
        secondEndContext={
          <Image src={SearchIcon} height={18} alt="" className="" />
        }
      />
    </div>
  );
}
