import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface dateProps {
  label?: string;
  format?: string;
  type: string;
  updateDate: (date: Date | null, type: string) => void;
  date: Date | null;
  minDate?: Date;
}
const DatePickerComp = (props: dateProps) => {
  return (
    <div>
      <label>{props.label}</label>
      <DatePicker
        selected={props.date}
        onChange={(date) => props.updateDate(date, props.type)}
        minDate={props.minDate}
      />
    </div>
  );
};

export default DatePickerComp;
