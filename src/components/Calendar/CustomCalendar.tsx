import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import Month from "./Month";
import Year from "./Year";

interface CustomCalendarProps {
  value?: Date;
  onChange: (value: Date) => void;
}

const CustomCalendar = ({ value = new Date(), onChange }: CustomCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(value));
  const [showDays, setShowDays] = useState<boolean>(true);
  const [showMonth, setShowMonth] = useState<boolean>(false);
  const [showYear, setShowYear] = useState<boolean>(false);

  const totalDaysInMonth = selectedDate.daysInMonth();
  const startDayOfMonth = selectedDate.startOf("month").day();
  const endDayOfMonth = selectedDate.endOf("month").day();
  const suffixDays = 6 - endDayOfMonth;
  const selectedMonth = selectedDate.format("MMMM");
  const selectedYear = selectedDate.year();

  const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // ✅ Fixed: Use .date(day) instead of .day(day+1)
  const handleSelectDay = (day: number) => {
    const newDate = selectedDate.date(day);
    setSelectedDate(newDate);
    onChange(newDate.toDate());
  };

  const handleSelectMonth = (monthIndex: number) => {
    setSelectedDate(selectedDate.month(monthIndex));
    setShowMonth(false);
    setShowDays(true);
  };

  const handleSelectYear = (year: number) => {
    setSelectedDate(selectedDate.year(year));
    setShowYear(false);
    setShowDays(true);
  };
  const handleShowMonth=()=>{
    if(showMonth){
      setShowMonth(false)
      setShowDays(true)
      setShowYear(false)
      }else{
        setShowMonth(true)
        setShowDays(false)
        setShowYear(false)
      }
  }
const handleShowYear=()=>{
  if(showYear){
    setShowYear(false)
    setShowDays(true)
    setShowMonth(false)
  }else{
    setShowYear(true)
    setShowMonth(false)
    setShowDays(false)
  }
}
  return (
    <div className="mx-auto mt-2 w-[400px] p-2 bg-gray-200 flex flex-col">
      <div className="flex flex-row justify-between">
        {/* <button className="m-2">Clear</button> */}
        <button className="m-2" onClick={handleShowMonth}>
          {selectedMonth}
        </button>
        <button className="m-2" onClick={handleShowYear}>
          {selectedYear}
        </button>
      </div>
      <div>
        {showDays && (
          <div>
            {!showMonth&& !showYear && (
              <div className="mx-2 bg-gray-50 grid grid-cols-7 text-center">
                {daysOfWeek.map((day, index) => (
                  <div key={index}>{day}</div>
                ))}
                {Array.from({ length: startDayOfMonth }).map((_, idx) => (
                  <div key={`empty-start-${idx}`} />
                ))}
                {Array.from({ length: totalDaysInMonth }).map((_, index) => (
                  <div
                    key={`day-${index}`}
                    className={`p-2 text-center cursor-pointer ${
                      selectedDate.date() === index + 1
                        ? "bg-blue-400 text-white rounded"
                        : "hover:bg-gray-300"
                    }`}
                    onClick={() => handleSelectDay(index + 1)}
                    
                  >
                    {index + 1}
                  </div>
                ))}
                {Array.from({ length: suffixDays }).map((_, idx) => (
                  <div key={`empty-end-${idx}`} />
                ))}
              </div>
            )}
          </div>
        )}
        {showMonth && <Month currentMonth={selectedDate.month()} onSelect={handleSelectMonth} />}
        {showYear && <Year  currentYear={selectedDate.year()} onSelect={handleSelectYear}/>}
      </div>
    </div>
  );
};

export default CustomCalendar;
