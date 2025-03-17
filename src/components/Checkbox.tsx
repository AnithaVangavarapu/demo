import React, { useState, useEffect } from "react";
import { CheckSquare, Square } from "lucide-react";
import styles from "../app.module.css";
interface CheckboxProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isChecked: boolean;
}

const Checkbox = ({ label, value, updateValue, isChecked }: CheckboxProps) => {
  return (
    <div className="">
      {isChecked ? (
        <CheckSquare size={18} className={styles.icon} />
      ) : (
        <Square size={18} />
      )}

      <label
        className={isChecked ? styles.optionLabel : ""}
        style={{ padding: "10px" }}
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
