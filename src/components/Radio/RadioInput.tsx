import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export type ClassNamesProps = {
  container: string;
  selectedLabel: string;
  notSelectedLabel: string;
};
interface RadioProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isSelected: boolean;
  classnames?: ClassNamesProps;
}
const RadioInput = ({
  label,
  value,
  updateValue,
  isSelected,
  classnames,
}: RadioProps) => {
  return (
    <div className={twMerge(clsx("flex flex-row", classnames?.container))}>
      <input
        type="radio"
        value={value}
        onChange={() => {
          updateValue(value);
        }}
        checked={isSelected}
      />
      <label
        className={twMerge(
          clsx(
            `text-base mx-2 `,
            isSelected
              ? classnames?.selectedLabel
              : classnames?.notSelectedLabel
          )
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
