import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
interface YearProps {
  currentYear: number;
  onSelect: (year: number) => void;
  minYear?: number;
}
const Year = ({ currentYear, onSelect, minYear }: YearProps) => {
  const startYear = currentYear - 4;
  const [yearRangeStartWith, setYearRangeStartWith] =
    useState<number>(startYear);

  const years = Array.from(
    { length: 15 },
    (_, index) => yearRangeStartWith + index
  );
  const handlePreviousYears = () => {
    setYearRangeStartWith((prev) => prev - 15);
  };
  const handleNextYears = () => {
    setYearRangeStartWith((prev) => prev + 15);
  };
  return (
    <div className="m-10 rounded w-[300px] h-[200px] bg-white p-4 flex items-center justify-between ">
      <div className="flex justify-between items-center w-full mb-2 text-sm">
        <ChevronLeft onClick={handlePreviousYears} />

        <div className="grid grid-cols-5 gap-6 text-center w-full">
          {years.map((year) => {
            const isDisabled = minYear !== undefined && year < minYear;
            return (
              <button
                className={`p-0.5 rounded w-10 ${
                  year === currentYear
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300 rounded"
                } ${isDisabled ? "pointer-events-none text-gray-200" : ""}`}
                onClick={() => onSelect(year)}
              >
                {year}
              </button>
            );
          })}
        </div>

        <ChevronRight onClick={handleNextYears} className="ml-4" />
      </div>
    </div>
  );
};

export default Year;
