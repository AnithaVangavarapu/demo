import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  label: string;
  onClick: () => void;
  classname?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  classname,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        clsx(
          "mt-2 border rounded-md border-blue-200 bg-blue-950 p-0.5 text-fuchsia-50 hover:bg-amber-50 hover:text-blue-950 ",
          classname
        )
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
