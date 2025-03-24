import React, { useCallback } from "react";
import { DataItem, useApp } from "./customHooks/useApp";
import { Button, DatePickerComp } from "./components";
import { CheckboxGroup } from "./components/Checkbox1";
import { RadioGroup } from "./components/Radio1";
import CustomCalendar from "./components/Calendar/CustomCalendar";
export type CustomAppStylesProps = {
  container: string;
  label: string;
  error: string;
};
const customCheckboxGroup: CustomAppStylesProps = {
  container: "bg-gray-100 mb-2",
  label: "text-blue-500",
  error: "text-lg text-blue-500",
};
const customRadio: CustomAppStylesProps = {
  container: "mb-2",
  label: "",
  error: "text-lg",
};
const App: React.FC = () => {
  const {
    data,
    updateDataset,
    handleSubmit,
    error,
    startDate,
    updateDate,
    endDate,
    currentDate,
    setCurrentDate,
  } = useApp();
  const renderItem = useCallback((item: DataItem, index: number) => {
    if (item.type === "radio") {
      return (
        <RadioGroup
          label={item.label}
          options={item.options}
          updateRadioValue={(value: string) => updateDataset(item.id, value)}
          initialRadioValue={item.options[0].value}
          error={error}
          customRadio={customRadio}
          key={index}
        />
      );
    } else if (item.type === "checkbox") {
      return (
        <CheckboxGroup
          label={item.label}
          options={item.options}
          updateCheckboxValue={(value: string[]) =>
            updateDataset(item.id, value)
          }
          initialCheckboxValue={[item.options[0].value]}
          error={error}
          customCheckboxGroup={customCheckboxGroup}
          key={index}
        />
      );
    } else {
      return null;
    }
  }, []);

  return (
    <div className="container mx-auto mt-10">
      {data.map((item: DataItem, index: number) => renderItem(item, index))}
      <DatePickerComp
        label="Start Date"
        type="start"
        updateDate={updateDate}
        date={startDate ? startDate.toDate() : null}
        format="dd/MMM/YYYY"
        maxDate={endDate !== null ? endDate : undefined}
      />
      <DatePickerComp
        label="End Date"
        type="end"
        updateDate={updateDate}
        date={endDate ? endDate.toDate() : null}
        minDate={startDate !== null ? startDate : undefined}
      />
      <Button
        label="Submit"
        onClick={handleSubmit}
        // classname="border-red-500"
      />
      <CustomCalendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};

export default App;
