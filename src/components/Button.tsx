import React from "react";
interface ButtonProps {
  label: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="border rounded-md border-blue-200 bg-blue-300 p-0.5 hover:bg-amber-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
