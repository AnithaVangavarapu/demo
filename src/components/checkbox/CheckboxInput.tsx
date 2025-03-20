import React from "react";
import { SquareCheck, Square } from "lucide-react";
import clsx from "clsx";

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
    <div className={clsx("flex flex-row items-center", classnames?.container)}>
      {isChecked ? (
        <SquareCheck className={clsx(` w-4 h-4`, classnames?.sqareCheck)} />
      ) : (
        <Square className={clsx(`w-4 h-4`, classnames?.square)} />
      )}

      <label
        className={clsx(
          `text-base mx-2 ${isChecked ? "text-lg" : "text-sm"}`,
          isChecked ? classnames?.checkedLabel : classnames?.uncheckedLabel
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
