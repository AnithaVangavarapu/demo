import React from "react";
interface ButtonProps {
  label: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      style={{ borderRadius: "3px", cursor: "pointer" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
