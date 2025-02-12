'use client';

import { useState } from "react";
import { CategoryType } from "../libs/type";
import Header from "../components/component/Header";
import NavBar from "../components/component/NavBar";
import Content from "../components/component/Content";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  return (
    <>
      <Header />
      <div className="flex">
        <NavBar onCategorySelect={setSelectedCategory} />
        <Content selectedCategory={selectedCategory} />
      </div>
    </>
  );
}