import React from "react";
import styles from "./radio.module.css";
import { customStylesProps } from "./RadioGroup";
interface RadioProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isSelected: boolean;
  key: number;
  customStyles?: customStylesProps;
}
const Radio = ({
  label,
  value,
  updateValue,
  isSelected,
  key,
  customStyles,
}: RadioProps) => {
  return (
    <div key={key}>
      <input
        type="radio"
        value={value}
        onChange={() => {
          updateValue(value);
        }}
        checked={isSelected}
      />
      <label
        className={`${styles.label} ${
          isSelected ? `${styles.selectedLabel} ` : styles.notSelectedLabel
        } `}
        style={customStyles?.label}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
