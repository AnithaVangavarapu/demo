import React, { useState, useEffect, useCallback } from "react";
import { CustomAppStylesProps } from "../../App";
import { CheckboxInput } from ".";
import clsx from "clsx";
import { ClassNamesProps } from "./CheckboxInput";
export type Option = {
  label: string;
  value: string;
};

interface CheckboxGroupProps {
  label?: string;
  options: Option[];
  updateCheckboxValue: (value: string[]) => void;
  initialCheckboxValue: string[];
  error?: string;
  customCheckboxGroup?: CustomAppStylesProps;
}

const checkboxInputClassNames: ClassNamesProps = {
  sqareCheck: "rounded-sm fill-blue-300 ",
  square: "",
  checkedLabel: "text-blue-400",
  uncheckedLabel: "text-blue-300",
  container: "",
};

const CheckboxGroup = ({
  label,
  options,
  updateCheckboxValue,
  initialCheckboxValue,
  error,
  customCheckboxGroup,
}: CheckboxGroupProps) => {
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
          classnames={checkboxInputClassNames}
          key={index}
        />
      );
    },
    [checkboxValue, updateValue]
  );
  return (
    <div className={clsx(`text-lg`, customCheckboxGroup?.container)}>
      {label && (
        <p className={clsx(`text-base`, customCheckboxGroup?.label)}>{label}</p>
      )}
      {options.map((option: Option, index: number) =>
        renderItem(option, index)
      )}
      {error && (
        <p className={clsx(`text-sm text-red-500`, customCheckboxGroup?.error)}>
          {error}
        </p>
      )}
    </div>
  );
};

export default CheckboxGroup;
