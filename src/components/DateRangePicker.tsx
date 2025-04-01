import React, { useState } from "react";
import CustomCalendar from "./Calendar/CustomCalendar";
import dayjs from "dayjs";

const DateRangePicker = () => {
  const [rangeStartDate, setRangeStartDate] = useState<Date>();
  const [rangeEndDate, setRangeEndDate] = useState<Date>();
  const [openStartCalendar, setOpenStartCalendar] = useState<boolean>(false);
  const [openEndCalendar, setOpenEndCalendar] = useState<boolean>(false);

  const handleCloseCalendar = () => {
    if (openStartCalendar) {
      setOpenStartCalendar(false);
    } else if (openEndCalendar) {
      setOpenEndCalendar(false);
    } else {
      return;
    }
  };
  return (
    <div>
      <div className="flex flex-row m-10">
        <div className="">
          <label>RangeStartDate:</label>
          <input
            value={
              rangeStartDate ? dayjs(rangeStartDate).format("DD/MMM/YYYY") : ""
            }
            className="border m-10 mb-0 rounded-md border-blue-400"
            onClick={() => setOpenStartCalendar(!openStartCalendar)}
            onChange={() => setOpenStartCalendar(false)}
          />
          {openStartCalendar && (
            <CustomCalendar
              value={rangeStartDate}
              onChange={setRangeStartDate}
              setCalendarOpen={setOpenEndCalendar}
              closeCalendar={handleCloseCalendar}
            />
          )}
        </div>
        <div className="">
          <label>RangeEndDate:</label>
          <input
            value={
              rangeEndDate ? dayjs(rangeEndDate).format("DD/MMM/YYYY") : ""
            }
            className="border m-10 mb-0 rounded-md border-blue-400"
            onClick={() => setOpenEndCalendar(!openEndCalendar)}
          />
          {openEndCalendar && (
            <CustomCalendar
              value={
                rangeEndDate
                  ? rangeEndDate
                  : rangeStartDate
                  ? dayjs(rangeStartDate).add(1, "day").toDate()
                  : undefined
              }
              onChange={setRangeEndDate}
              setCalendarOpen={setOpenEndCalendar}
              minDate={rangeStartDate}
              closeCalendar={handleCloseCalendar}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
