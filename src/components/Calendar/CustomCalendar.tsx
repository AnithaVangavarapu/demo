import dayjs, { Dayjs } from "dayjs";
import React from "react";
import Month from "./Month";
interface CustomCalendarProps {
  value?: Date;
  onChange: (value: Date) => void;
}
const CustomCalendar = ({
  value = new Date(),
  onChange,
}: CustomCalendarProps) => {
  const currentDate: Dayjs = dayjs(value);
  // const startDayOfMonth = selectedDate.startOf("month").day();
  // console.log(startDayOfMonth);
  // const totalDaysInMonth = selectedDate.startOf("month").daysInMonth();
  // console.log(totalDaysInMonth);
  const totalDaysInMonth = currentDate.daysInMonth();
  console.log("total days in current month", totalDaysInMonth);
  const startDayOfMonth = currentDate.startOf("month").day();
  console.log(startDayOfMonth);
  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  return (
    <div className="mx-auto mt-2 w-[400px] p-2 bg-gray-200 flex flex-col">
      <div className="flex flex-row  justify-between">
        <button className="m-2">Clear</button>
        <button className="m-2">Month</button>
        <button className="m-2">Year</button>
      </div>
      <div className="mx-2  bg-gray-50 grid grid-cols-7 text-center">
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
        {Array.from({ length: startDayOfMonth }).map(() => (
          <div></div>
        ))}
        {Array.from({ length: totalDaysInMonth }).map((day, index) => (
          <div>{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default CustomCalendar;
