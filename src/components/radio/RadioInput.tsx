import React from "react";
import styles from "./radio.module.css";
import { CustomStylesProps } from "./RadioGroup";
import clsx from "clsx";
interface RadioProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isSelected: boolean;

  customStyles?: CustomStylesProps;
}
const RadioInput = ({
  label,
  value,
  updateValue,
  isSelected,

  customStyles,
}: RadioProps) => {
  return (
    <div className="flex flex-row">
      <input
        type="radio"
        value={value}
        onChange={() => {
          updateValue(value);
        }}
        checked={isSelected}
      />
      <label
        className={clsx(
          `${styles.label} ${
            isSelected ? `text-blue-500 ` : styles.notSelectedLabel
          }, ${customStyles?.label}`
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
