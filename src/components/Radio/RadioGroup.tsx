import React, { useState, useCallback } from "react";
import { CustomAppStylesProps } from "../../App";
import { RadioInput } from ".";
import clsx from "clsx";
import { ClassNamesProps } from "./RadioInput";
export type Option = {
  label: string;
  value: string;
};

interface RadioProps {
  label?: string;
  options: Option[];
  updateRadioValue: (value: string) => void;
  initialRadioValue: string;
  error?: string;
  customRadio?: CustomAppStylesProps;
}

const radioInputClassNames: ClassNamesProps = {
  selectedLabel: "text-blue-800 text-md",
  container: "",
  notSelectedLabel: "text-sm",
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
          classnames={radioInputClassNames}
          key={index}
        />
      );
    },
    [radioValue]
  );
  return (
    <div className={clsx(`bg-none`, customRadio?.container)}>
      {label && (
        <p className={clsx(`text-base`, customRadio?.label)}>{label}</p>
      )}
      {options.map((option: Option, index: number) =>
        renderItem(option, index)
      )}
      {error && (
        <p className={clsx(`text-red-400`, customRadio?.error)}>{error}</p>
      )}
    </div>
  );
};

export default RadioGroup;
