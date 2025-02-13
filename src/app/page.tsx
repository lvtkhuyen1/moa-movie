"use client";

import { useState } from "react";
import { CategoryType } from "../libs/type";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import Content from "../component/Content";
import HeaderCard from "@/component/HeaderCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  return (
    <div className="p-5">
      <Header />
      <div className="flex flex-col">
        <NavBar onCategorySelect={setSelectedCategory} />
        <HeaderCard />
        <Content selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
