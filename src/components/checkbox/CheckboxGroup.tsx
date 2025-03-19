import React, { useState, useEffect, useCallback, CSSProperties } from "react";

import { Checkbox } from ".";
export type option = {
  label: string;
  value: string;
};
export type customStylesProps = {
  [key: string]: CSSProperties;
};
interface CheckboxProps {
  label?: string;
  options: option[];
  updateCheckboxValue: (value: string[]) => void;
  initialCheckboxValue: string[];
  error?: string;

  keyIndex: number;
  customCheckboxGroup?: customStylesProps;
}

const customStyles: customStylesProps = {
  checkIcon: {
    fill: "red",
    color: "black",
  },
  label: {
    color: "red",
    padding: "10px",
  },
};

const CheckboxGroup = ({
  label,
  keyIndex,
  options,
  updateCheckboxValue,
  initialCheckboxValue,
  error,
  customCheckboxGroup,
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
  const renderItem = useCallback(
    (option: option, index: number) => {
      return (
        <Checkbox
          label={option.label}
          value={option.value}
          updateValue={updateValue}
          isChecked={checkboxValue.includes(option.value)}
          customStyles={customStyles}
          uniqueKey={index}
        />
      );
    },
    [checkboxValue, updateValue]
  );
  return (
    <div key={keyIndex} style={customCheckboxGroup?.container}>
      {label && <p style={customCheckboxGroup?.label}>{label}</p>}
      {options.map((option: option, index: number) =>
        renderItem(option, index)
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CheckboxGroup;
