import React, { useState, useCallback } from "react";
import styles from "../app.module.css";
import { Radio } from ".";
import { CSSProperties } from "react";
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
  style?: CSSProperties;
}
const RadioGroup = ({
  label,
  options,
  updateRadioValue,
  initialRadioValue,
  error,
  style,
}: RadioProps) => {
  const [radioValue, setRadioValue] = useState<string>(initialRadioValue);

  const updateValue = (value: string) => {
    setRadioValue(value);
    updateRadioValue(value);
  };
  const renderItem = useCallback((option: option, index: number) => {
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
  }, []);
  return (
    <div className={styles.wrapper} style={style}>
      {label && <p className={styles.label}>{label}</p>}
      {options.map((option: option, index: number) =>
        renderItem(option, index)
      )}
      {error && <p className={styles.label}>{error}</p>}
    </div>
  );
};

export default RadioGroup;
