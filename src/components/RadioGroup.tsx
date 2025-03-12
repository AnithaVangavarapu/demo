import React, { useState } from "react";
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
const Radio = ({
  label,
  options,
  updateRadioValue,
  initialRadioValue,
}: RadioProps) => {
  const [radioValue, setRadioValue] = useState<string>(initialRadioValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
    updateRadioValue(e.target.value);
  };

  return (
    <div>
      <p>{label}</p>
      {options.map((option: option, index: number) => {
        return (
          <div key={index}>
            <input
              type="radio"
              name={option.label}
              value={option.value}
              checked={radioValue === option.value}
              onChange={handleChange}
            />
            {option.label}
          </div>
        );
      }, [])}
    </div>
  );
};

export default Radio;
