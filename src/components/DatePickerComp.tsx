import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";
export type ClassNamesProps = {
  label: string;
  datePicker: string;
  container: string;
};
interface DateProps {
  label?: string;
  format?: string;
  type: string;
  updateDate: (date: Dayjs, type: string) => void;
  date: Date | null;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  classnames?: ClassNamesProps;
}
const DatePickerComp = (props: DateProps) => {
  const { classnames } = props;
  const handleChange = (date: Date | null) => {
    const formattedDate = dayjs(date).format(
      props.format ? props.format.toUpperCase() : "DD/MM/YYYY"
    );
    console.log(formattedDate);
    props.updateDate(dayjs(date), props.type);
  };
  return (
    <div
      className={clsx(
        "flex flex-row gap-4 items-center",
        classnames?.container
      )}
    >
      <label className={clsx(`text-sm w-[70px]`, classnames?.label)}>
        {props.label}
      </label>
      <DatePicker
        className={clsx(
          "border rounded-md my-1 border-blue-300",
          classnames?.datePicker
        )}
        selected={props.date}
        onChange={handleChange}
        minDate={props.minDate?.toDate()}
        dateFormat={props.format ? props.format : "dd/MM/yyyy"}
        maxDate={props.maxDate?.toDate()}
        showMonthDropdown
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
      />
    </div>
  );
};

export default DatePickerComp;
