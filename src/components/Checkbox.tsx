import React from "react";
import { CheckSquare, Square } from "lucide-react";
import styles from "../app.module.css";
import { CSSProperties } from "react";
interface CheckboxProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isChecked: boolean;
  // iconstyle?: React.CSSProperties;
  shareStyles?: {
    checkIcon: CSSProperties;
    label: CSSProperties;
  };
}

const Checkbox = ({
  label,
  value,
  updateValue,
  isChecked,
  shareStyles,
}: // iconstyle,
CheckboxProps) => {
  return (
    <div>
      {isChecked ? (
        <CheckSquare
          size={18}
          className={styles.icon}
          style={shareStyles?.checkIcon}
        />
      ) : (
        <Square size={18} />
      )}

      <label
        className={isChecked ? styles.optionLabel : ""}
        style={shareStyles?.label}
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
