import dayjs, { Dayjs } from "dayjs";
import React from "react";

interface CustomCalendarProps {
  value?: Date;
  onChange: (value: Date) => void;
}
const CustomCalendar = ({
  value = new Date(),
  onChange,
}: CustomCalendarProps) => {
  const selectedDate: Dayjs = dayjs(value);
  const startDayOfMonth = selectedDate.startOf("month").day();
  console.log(startDayOfMonth);
  const totalDaysInMonth = selectedDate.startOf("month").daysInMonth();
  console.log(totalDaysInMonth);
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
      </div>
    </div>
  );
};

export default CustomCalendar;
