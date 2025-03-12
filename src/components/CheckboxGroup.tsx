import React, { useState } from "react";

export type option = {
  label: string;
  value: string;
};
interface CheckboxProps {
  label: string;
  options: option[];
  updateCheckboxValues: (value: string[]) => void;
  initialCheckboxValue: string[];
}

const Checkbox = ({
  label,
  options,
  updateCheckboxValues,
  initialCheckboxValue,
}: CheckboxProps) => {
  const [checkboxValue, setCheckboxValue] =
    useState<string[]>(initialCheckboxValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (checkboxValue.includes(value)) {
      const newCheckboxValue = checkboxValue.filter((Value) => Value !== value);
      setCheckboxValue(newCheckboxValue);
      updateCheckboxValues(newCheckboxValue);
    } else {
      const newCheckboxValue = [...checkboxValue, value];
      setCheckboxValue(newCheckboxValue);
      updateCheckboxValues(newCheckboxValue);
    }
  };

  return (
    <div>
      <p>{label}</p>
      {options.map((option: option, index: number) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              name={option.label}
              value={option.value}
              checked={checkboxValue.includes(option.value)}
              onChange={handleChange}
            />
            {option.label}
          </div>
        );
      }, [])}
    </div>
  );
};

export default Checkbox;
