import React, { useState, useCallback } from "react";
import { CustomAppStylesProps } from "../../App";
import { RadioInput } from ".";

export type Option = {
  label: string;
  value: string;
};
export type CustomStylesProps = {
  label: string;
};
interface RadioProps {
  label?: string;
  options: Option[];
  updateRadioValue: (value: string) => void;
  initialRadioValue: string;
  error?: string;
  customRadio?: CustomAppStylesProps;
}

const customStyles: CustomStylesProps = {
  label: "text-blue-200",
};
const RadioGroup = ({
  label,
  options,
  updateRadioValue,
  initialRadioValue,
  error,
  customRadio,
}: RadioProps) => {
  const [radioValue, setRadioValue] = useState<string>(initialRadioValue);

  const updateValue = useCallback((value: string) => {
    setRadioValue(value);
    updateRadioValue(value);
  }, []);

  const renderItem = useCallback(
    (option: Option, index: number) => {
      return (
        <RadioInput
          label={option.label}
          value={option.value}
          updateValue={updateValue}
          isSelected={radioValue === option.value}
          customStyles={customStyles}
          key={index}
        />
      );
    },
    [radioValue]
  );
  return (
    <div>
      {label && <p style={customRadio?.label}>{label}</p>}
      {options.map((option: Option, index: number) =>
        renderItem(option, index)
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RadioGroup;
