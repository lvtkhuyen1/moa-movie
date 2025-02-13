import React from "react";
import Image, { StaticImageData } from "next/image";

interface ArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  currentIndex: number;
  totalMovies: number;
  visibleCount: number;
  iconSrc: string | StaticImageData;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  currentIndex,
  totalMovies,
  visibleCount,
  iconSrc,
}) => {
  const isPrev = direction === "prev";
  const isDisabled = isPrev
    ? currentIndex === 0
    : currentIndex >= totalMovies - visibleCount;

  const handleClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`absolute opacity-90 focus:opacity-60 top-1/2 ${
        isPrev ? "left-0" : "right-0"
      } transform -translate-y-1/2 px-2 py-1 rounded-full ${
        isDisabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-gray-600 hover:bg-gray-700"
      }`}
    >
      <Image height={20} alt="" src={iconSrc} />
    </button>
  );
};

export default ArrowButton;
