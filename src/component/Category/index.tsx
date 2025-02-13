"use client";
import React from "react";
import Image from "next/image";
import material from "@/assets/icons/material-movies.png";
import MultiSlider from "../MultiSlider";
import { MovieType } from "@/libs/type";
import { useRouter } from "next/navigation";

interface CategoryProps {
  category: string;
  movies: MovieType[];
}

export default function Category({ category, movies }: CategoryProps) {
  const router = useRouter();
  return (
    <div className="mx-4">
      <div className="bg-black absolute left-0 w-10" />
      <div className=" mt-4 flex  justify-between">
        <div className="flex items-center ">
          <Image alt="" src={material} height={20} />
          <span className="font-bold">{category}</span>
        </div>
        <button
          className="bg-[#FFBB00] text-black px-3 py-1 rounded-sm text-xs md:text-xl font-semibold"
          onClick={() => router.push("/category-page")}
        >
          +더보기
        </button>
      </div>
      <div className="flex">
        <MultiSlider movies={movies} />
      </div>
    </div>
  );
}
