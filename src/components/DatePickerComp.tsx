import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs, { Dayjs } from "dayjs";
interface dateProps {
  label?: string;
  format?: string;
  type: string;
  updateDate: (date: Dayjs, type: string) => void;
  date: Date | null;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}
const DatePickerComp = (props: dateProps) => {
  const handleChange = (date: Date | null) => {
    const formattedDate = dayjs(date).format(
      props.format ? props.format.toUpperCase() : "DD/MM/YYYY"
    );
    console.log(formattedDate);
    props.updateDate(dayjs(date), props.type);
  };
  return (
    <div>
      <label>{props.label}</label>
      <DatePicker
        selected={props.date}
        onChange={handleChange}
        minDate={props.minDate?.toDate()}
        dateFormat={props.format ? props.format : "dd/MM/yyyy"}
        maxDate={props.maxDate?.toDate()}
        showMonthDropdown
        showYearDropdown
      />
    </div>
  );
};

export default DatePickerComp;
