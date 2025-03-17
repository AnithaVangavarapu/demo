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
  const [isCheckedState, setIsCheckedState] = useState<boolean>(isChecked);

  const toggleCheck = () => {
    setIsCheckedState(() => !isCheckedState);
    updateValue(value);
  };
  useEffect(() => {
    setIsCheckedState(isChecked);
  }, [isChecked]);
  useEffect(() => {
    console.log(isCheckedState);
  }, [isCheckedState]);
  return (
    <div className="">
      {isCheckedState ? (
        <CheckSquare size={18} className={styles.icon} />
      ) : (
        <Square size={18} />
      )}

      <label
        className={isCheckedState ? styles.optionLabel : ""}
        style={{ padding: "10px" }}
        onClick={toggleCheck}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
