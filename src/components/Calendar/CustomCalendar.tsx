import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import Month from "./Month";
import Year from "./Year";


interface CustomCalendarProps {
  value?: Date;
  onChange: (value: Date) => void;
  setCalendarOpen:(value:boolean)=>void
  minDate?:Date
}

const CustomCalendar = ({ value, onChange,setCalendarOpen,minDate }: CustomCalendarProps) => {
  console.log('minDate',minDate)
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

  const minDay=minDate?dayjs(minDate).date():undefined;
console.log('minDay',minDay)
const minMonth=minDate?dayjs(minDate).month():undefined;
console.log('minMonth',minMonth)
const minYear=minDate?dayjs(minDate).year():undefined;
console.log('minYear',minYear)
  const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 
  const handleSelectDay = (day: number) => {
       const newDate = selectedDate.date(day);
    setSelectedDate(newDate);
    setCalendarOpen(false)
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
        <button className="m-2 flex-1 bg-blue-500 text-white rounded hover:bg-white hover:text-black" onClick={handleShowMonth}>
          {selectedMonth}
        </button>
        <button className="m-2 flex-1 bg-blue-500 text-white rounded hover:bg-white hover:text-black" onClick={handleShowYear}>
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
                {Array.from({ length: totalDaysInMonth }).map((_, index) =>{
                  const isSameMonth= selectedDate.month()===minMonth
                  const isSameYear =selectedDate.year()===minYear
                 const isDisabled= minDay !== undefined && isSameMonth && isSameYear &&  index<minDay 
                 
                  return (
                  <div
                    key={`day-${index}`}
                    className={`p-2 text-center cursor-pointer ${
                      selectedDate.date() === index + 1
                        ? "bg-blue-400 text-white rounded"
                        : "hover:bg-gray-300"
                    } ${isDisabled?'pointer-events-none text-gray-200':''}`}
                    onClick={() => handleSelectDay(index + 1)}
                   
                  >
                    {index + 1}
                  </div>
                )})}
                {Array.from({ length: suffixDays }).map((_, idx) => (
                  <div key={`empty-end-${idx}`} />
                ))}
              </div>
            )}
          </div>
        )}
        {showMonth && <Month currentMonth={selectedDate.month()} onSelect={handleSelectMonth} minMonth={minMonth?minMonth:undefined} currentYear={selectedDate.year()} minYear={minDate?(minYear?minYear:undefined):undefined}/>}
        {showYear && <Year  currentYear={selectedDate.year()} onSelect={handleSelectYear} minYear={minYear?minYear:undefined}/>}
      </div>
    </div>
  );
};

export default CustomCalendar;
