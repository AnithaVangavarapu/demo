import React, { useState } from "react";
import { Radio } from ".";
export type option = {
  label: string;
  value: string;
};
interface RadioProps {
  label: string;
  options: option[];
  updateRadioValue: (value: string) => void;
  initialRadioValue: string;
}
const RadioGroup = ({
  label,
  options,
  updateRadioValue,
  initialRadioValue,
}: RadioProps) => {
  const [radioValue, setRadioValue] = useState<string>("");
  const updateValue = (value: string) => {
    setRadioValue(value);
    updateRadioValue(value);
  };

  return (
    <div>
      <p>{label}</p>
      {options.map((option: option, index: number) => {
        return (
          <div key={index}>
            <Radio
              label={option.label}
              value={option.value}
              updateValue={updateValue}
              radioValue={radioValue}
            />
          </div>
        );
      }, [])}
    </div>
  );
};

export default RadioGroup;
