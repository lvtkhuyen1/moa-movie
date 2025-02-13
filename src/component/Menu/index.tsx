import Image from "next/image";
import React from "react";
import home from "@/assets/icons/home.png";
import drama from "@/assets/icons/drama.png";
import show from "@/assets/icons/show.png";
import movie from "@/assets/icons/movie.png";
import more from "@/assets/icons/more.png";

export default function Menu() {
  const menus = [
    { image: home, title: "홈" },
    { image: drama, title: "드라마" },
    { image: show, title: "예능" },
    { image: movie, title: "영화" },
    { image: more, title: "기타" },
  ];
  return (
    <>
      <div className="fixed bottom-0 left-0 z-10 w-full bg-black text-white flex justify-around py-3 md:hidden">
        {menus.map((menu, index) => (
          <div className=" justify-items-center" key={index}>
            <Image src={menu.image} alt="" />
            <span>{menu.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
