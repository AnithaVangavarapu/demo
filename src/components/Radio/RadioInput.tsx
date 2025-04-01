import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { CircleSmall, CircleDot } from "lucide-react";
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
    <div
      className={clsx("flex flex-row m-2 items-center", classnames?.container)}
      onClick={() => {
        updateValue(value);
      }}
    >
      {isSelected ? (
        <CircleDot
          className={clsx(
            twMerge("w-6 h-6 stroke-[2] mx-2 fill-blue-800 text-white")
          )}
        />
      ) : (
        <CircleSmall className={clsx(twMerge("w-10 h-8 stroke-[1]"))} />
      )}
      <label
        className={clsx(
          twMerge(
            `text-sm m-2 pl-2`,
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
