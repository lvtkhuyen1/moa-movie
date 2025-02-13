import React from "react";
import Spinner from "../Spinner";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

const Button = ({
  label,
  type = "button",
  onClick,
  className,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${className}`}
    >
      {loading ? <Spinner size="sm" /> : label}
    </button>
  );
};

export default Button;
