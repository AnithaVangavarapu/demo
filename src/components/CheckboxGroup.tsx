import React, { useState } from "react";
import { Checkbox } from ".";
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

const CheckboxGroup = ({
  label,
  options,
  updateCheckboxValues,
  initialCheckboxValue,
}: CheckboxProps) => {
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]);

  const updateValue = (value: string) => {
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
            <Checkbox
              label={option.label}
              value={option.value}
              updateValue={updateValue}
            />
          </div>
        );
      }, [])}
    </div>
  );
};

export default CheckboxGroup;
