import React from "react";
import { CheckSquare, Square } from "lucide-react";
import styles from "./checkbox.module.css";
import { customStylesProps } from "./CheckboxGroup";
interface CheckboxProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isChecked: boolean;
  customStyles?: customStylesProps;
  uniqueKey: number;
}

const Checkbox = ({
  label,
  value,
  updateValue,
  isChecked,
  customStyles,
  uniqueKey,
}: CheckboxProps) => {
  return (
    <div key={uniqueKey}>
      {isChecked ? (
        <CheckSquare
          size={18}
          className={styles.icon}
          style={customStyles?.checkIcon}
        />
      ) : (
        <Square size={18} />
      )}

      <label
        className={`${styles.label} ${
          isChecked ? styles.checklabel : styles.unchecklabel
        }`}
        style={customStyles?.label}
        onClick={() => {
          updateValue(value);
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
