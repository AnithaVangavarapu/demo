import React, { useState, useEffect } from "react";
import styles from "../app.module.css";
import { Checkbox } from ".";
export type option = {
  label: string;
  value: string;
};
interface CheckboxProps {
  label: string;
  options: option[];
  updateCheckboxValue: (value: string[]) => void;
  initialCheckboxValue: string[];
}

const CheckboxGroup = ({
  label,
  options,
  updateCheckboxValue,
  initialCheckboxValue,
}: CheckboxProps) => {
  const [checkboxValue, setCheckboxValue] =
    useState<string[]>(initialCheckboxValue);

  const updateValue = (value: string) => {
    let newCheckboxValue: string[];
    setCheckboxValue((prevValue) => {
      if (prevValue.includes(value)) {
        newCheckboxValue = prevValue.filter((val) => val !== value);
      } else {
        newCheckboxValue = [...prevValue, value];
      }
      updateCheckboxValue(newCheckboxValue);
      return newCheckboxValue;
    });
  };
  useEffect(() => {
    if (checkboxValue.length === 0) {
      setCheckboxValue(initialCheckboxValue);
      updateCheckboxValue(initialCheckboxValue);
    }
  }, [checkboxValue, initialCheckboxValue]);
  return (
    <div>
      <p className={styles.label}>{label}</p>
      {options.map((option: option, index: number) => {
        return (
          <div key={index}>
            <Checkbox
              label={option.label}
              value={option.value}
              updateValue={updateValue}
              isChecked={checkboxValue.includes(option.value)}
            />
          </div>
        );
      }, [])}
    </div>
  );
};

export default CheckboxGroup;
