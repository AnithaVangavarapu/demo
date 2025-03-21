import React from "react";

const Month = () => {
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
    <div className="grid grid-cols-4">
      {months.map((month, index) => (
        <button>{month}</button>
      ))}
    </div>
  );
};

export default Month;
