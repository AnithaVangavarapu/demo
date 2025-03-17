import React from "react";
import styles from "../app.module.css";
interface RadioProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isSelected: boolean;
}
const Radio = ({ label, value, updateValue, isSelected }: RadioProps) => {
  return (
    <div>
      <input
        type="radio"
        value={value}
        onChange={() => {
          updateValue(value);
        }}
        checked={isSelected}
      />
      <label style={{ padding: "10px" }}>{label}</label>
    </div>
  );
};

export default Radio;
