import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type ClassNamesProps = {
  label: string;
  datePicker: string;
  container: string;
};
interface DateProps {
  label?: string;
  format?: string;
  type: string;
  updateDate: (date: Date | null, type: string) => void;
  date: Date | null;
  minDate?: Date;
  maxDate?: Date;
  classnames?: ClassNamesProps;
}
const DatePickerComp = (props: DateProps) => {
  const { classnames } = props;

  const handleChange = (date: Date | null) => {
    console.log("choosen date", date);
    console.log("typeof choosen date", typeof date);

    props.updateDate(date, props.type);
  };
  return (
    <div
      className={twMerge(clsx("flex flex-row gap-4", classnames?.container))}
    >
      <label className={twMerge(clsx(`text-sm`, classnames?.label))}>
        {props.label}
      </label>
      <DatePicker
        className={twMerge(
          clsx(
            "border rounded-md my-1 border-blue-300 ",
            classnames?.datePicker
          )
        )}
        selected={props.date}
        minDate={props.minDate}
        dateFormat={props.format ? props.format : "dd/MM/yyyy"}
        onChange={handleChange}
        maxDate={props.maxDate}
        showMonthDropdown
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
        timeFormat="hh:mm a"
        showTimeSelect
        // timeIntervals={15}
      />
    </div>
  );
};

export default DatePickerComp;
