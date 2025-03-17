import React, { useState } from "react";
import styles from "../app.module.css";
import { Radio } from ".";
export type option = {
  label: string;
  value: string;
};
interface RadioProps {
  label?: string;
  options: option[];
  updateRadioValue: (value: string) => void;
  initialRadioValue: string;
  error?: string;
}
const RadioGroup = ({
  label,
  options,
  updateRadioValue,
  initialRadioValue,
  error,
}: RadioProps) => {
  const [radioValue, setRadioValue] = useState<string>(initialRadioValue);

  const updateValue = (value: string) => {
    setRadioValue(value);
    updateRadioValue(value);
  };

  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      {options.map((option: option, index: number) => {
        return (
          <div key={index}>
            <Radio
              label={option.label}
              value={option.value}
              updateValue={updateValue}
              isSelected={radioValue === option.value}
            />
          </div>
        );
      }, [])}
      {error && <p className={styles.label}>{error}</p>}
    </div>
  );
};

export default RadioGroup;
