import React, { useState, useEffect, useCallback, CSSProperties } from "react";
import { CustomAppStylesProps } from "../../App";
import { CheckboxInput } from ".";
export type Option = {
  label: string;
  value: string;
};
export type CustomStylesProps = {
  checkIcon: CSSProperties;
  label: CSSProperties;
};
interface CheckboxProps {
  label?: string;
  options: Option[];
  updateCheckboxValue: (value: string[]) => void;
  initialCheckboxValue: string[];
  error?: string;
  customCheckboxGroup?: CustomAppStylesProps;
}

const customStyles: CustomStylesProps = {
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
    (option: Option, index: number) => {
      return (
        <CheckboxInput
          label={option.label}
          value={option.value}
          updateValue={updateValue}
          isChecked={checkboxValue.includes(option.value)}
          customStyles={customStyles}
          key={index}
        />
      );
    },
    [checkboxValue, updateValue]
  );
  return (
    <div style={customCheckboxGroup?.container}>
      {label && <p style={customCheckboxGroup?.label}>{label}</p>}
      {options.map((option: Option, index: number) =>
        renderItem(option, index)
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CheckboxGroup;
