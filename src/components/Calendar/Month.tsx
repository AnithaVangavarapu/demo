import React from "react";
import dayjs,{Dayjs} from "dayjs";

interface MonthProps{
 currentMonth:number,
  onSelect:(monthIndex:number)=>void
}
const Month = ({currentMonth,onSelect}:MonthProps) => {
 
console.log("month",currentMonth)
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
    <div className=" m-10
     w-[300px] h-[100px] bg-white ">
                      <div className="grid grid-cols-4 p-4">
                      {months.map((month, index) => (
        <button className={index===currentMonth?'bg-blue-500 text-white rounded':'hover:bg-gray-300 rounded'} onClick={()=>onSelect(index)}>{month}</button>
      ))}
                      </div>
     
    </div>
  );
};

export default Month;
