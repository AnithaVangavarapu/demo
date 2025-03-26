import React,{useState} from 'react'
import CustomCalendar from './Calendar/CustomCalendar';
import dayjs from 'dayjs';

const DateRangePicker=()=> {
     const [rangeStartDate,setRangeStartDate]=useState<Date>();
      const [rangeEndDate,setRangeEndDate]=useState<Date>()
      const [openStartCalendar,setOpenStartCalendar]=useState<boolean>(false)
     const [openEndCalendar,setOpenEndCalendar]=useState<boolean>(false)
  return (
    <div>
      <div className="flex flex-row m-10">
    <div className="">
      <label>RangeStartDate:</label>
      <input value={rangeStartDate?dayjs(rangeStartDate).format('DD/MMM/YYYY'):''} className="border m-10 mb-0" onClick={()=>setOpenStartCalendar(!openStartCalendar)} onChange={()=>setOpenStartCalendar(false)}/>
   {openStartCalendar && <CustomCalendar value={rangeStartDate} onChange={setRangeStartDate} setCalendarOpen={setOpenEndCalendar} />}
    
    </div>
    <div className="">
      <label>RangeEndDate:</label>
      <input value={rangeEndDate?dayjs(rangeEndDate).format('DD/MMM/YYYY'):''} className="border m-10 mb-0" onClick={()=>setOpenEndCalendar(!openEndCalendar)}/>
      {openEndCalendar && <CustomCalendar value={rangeStartDate?rangeStartDate:undefined} onChange={setRangeEndDate} setCalendarOpen={setOpenEndCalendar} minDate={rangeStartDate}/>}
    </div>
    </div>
    </div>
  )
}

export default DateRangePicker
