import React from "react";
import dayjs, { Dayjs } from "dayjs";

interface MonthProps {
  currentMonth: number;
  currentYear?: number;
  onSelect: (monthIndex: number) => void;
  minMonth?: number;
  minYear?: number;
}
const Month = ({
  currentMonth,
  onSelect,
  minMonth,
  currentYear,
  minYear,
}: MonthProps) => {
  console.log("month", currentMonth);
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div
      className="rounded 
     w-[300px] h-[100px]
                    bg-white absolute inset-[50px] mt-20
                    "
    >
      <div className="grid grid-cols-4 p-4">
        {months.map((month, index) => {
          const isSameYear = currentYear === minYear;
          const isDisabled =
            minMonth !== undefined && isSameYear && index < minMonth;
          return (
            <button
              className={`${
                index === currentMonth ? "bg-blue-500 rounded text-white" : ""
              } ${isDisabled ? "pointer-events-none text-gray-200" : ""}`}
              onClick={() => onSelect(index)}
            >
              {month}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
