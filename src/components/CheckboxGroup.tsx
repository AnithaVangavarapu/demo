import React, { useState, useEffect } from "react";
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
  const [checkboxValue, setCheckboxValue] =
    useState<string[]>(initialCheckboxValue);
  useEffect(() => {
    setCheckboxValue(initialCheckboxValue);
  }, [initialCheckboxValue]);
  const updateValue = (value: string) => {
    let newCheckboxValue;
    if (checkboxValue.includes(value)) {
      newCheckboxValue = checkboxValue.filter((Value) => Value !== value);
    } else {
      newCheckboxValue = [...checkboxValue, value];
    }

    setCheckboxValue(newCheckboxValue);
    updateCheckboxValues(newCheckboxValue);
  };
  useEffect(() => {
    if (checkboxValue.length === 0) {
      setCheckboxValue(initialCheckboxValue);
      updateCheckboxValues(initialCheckboxValue); // Update parent state with the default value
    }
  }, []);

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
              isChecked={checkboxValue.includes(option.value)}
            />
          </div>
        );
      }, [])}
    </div>
  );
};

export default CheckboxGroup;
