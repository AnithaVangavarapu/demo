import React, { useState, useCallback } from "react";

import { Radio } from ".";
import { CSSProperties } from "react";
export type option = {
  label: string;
  value: string;
};
export type customStylesProps = {
  [key: string]: CSSProperties;
};
interface RadioProps {
  label?: string;
  options: option[];
  updateRadioValue: (value: string) => void;
  initialRadioValue: string;
  error?: string;
  customRadio?: customStylesProps;
  key: number;
}

const customStyles: customStylesProps = {
  label: {
    color: "red",
  },
};
const RadioGroup = ({
  label,
  options,
  updateRadioValue,
  initialRadioValue,
  error,
  customRadio,
  key,
}: RadioProps) => {
  const [radioValue, setRadioValue] = useState<string>(initialRadioValue);

  const updateValue = useCallback((value: string) => {
    setRadioValue(value);
    updateRadioValue(value);
  }, []);

  const renderItem = useCallback(
    (option: option, index: number) => {
      return (
        <Radio
          label={option.label}
          value={option.value}
          updateValue={updateValue}
          isSelected={radioValue === option.value}
          key={index}
          customStyles={customStyles}
        />
      );
    },
    [radioValue]
  );
  return (
    <div key={key}>
      {label && <p style={customRadio?.label}>{label}</p>}
      {options.map((option: option, index: number) =>
        renderItem(option, index)
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RadioGroup;
