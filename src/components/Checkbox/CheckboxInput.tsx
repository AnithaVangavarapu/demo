import React from "react";
import { SquareCheckBig, Square } from "lucide-react";
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
    <div
      className={clsx("flex flex-row items-center", classnames?.container)}
      onClick={() => {
        updateValue(value);
      }}
    >
      {isChecked ? (
        <SquareCheckBig className={clsx(`w-6 h-7 `, classnames?.sqareCheck)} />
      ) : (
        <Square className={clsx(`w-6 h-6 stroke-[1]`, classnames?.square)} />
      )}

      <label
        className={clsx(
          `text-base  pl-6 ${isChecked ? "text-md" : "text-sm"}`,
          isChecked ? classnames?.checkedLabel : classnames?.uncheckedLabel
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
