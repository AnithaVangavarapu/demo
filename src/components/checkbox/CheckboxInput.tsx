import React from "react";
import { SquareCheck, Square } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export type ClassNamesProps = {
  sqareCheck: string;
  square: string;
  checkedLabel: string;
  uncheckedLabel: string;
  container: string;
};
interface CheckboxProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isChecked: boolean;
  classnames?: ClassNamesProps;
}

const CheckboxInput = ({
  label,
  value,
  updateValue,
  isChecked,
  classnames,
}: CheckboxProps) => {
  return (
    <div
      className={twMerge(
        clsx("flex flex-row items-center", classnames?.container)
      )}
    >
      {isChecked ? (
        <SquareCheck
          className={twMerge(clsx(` w-4 h-4`, classnames?.sqareCheck))}
        />
      ) : (
        <Square className={twMerge(clsx(`w-4 h-4`, classnames?.square))} />
      )}

      <label
        className={twMerge(
          clsx(
            `text-base mx-2 ${isChecked ? "text-lg" : "text-sm"}`,
            isChecked ? classnames?.checkedLabel : classnames?.uncheckedLabel
          )
        )}
        onClick={() => {
          updateValue(value);
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
