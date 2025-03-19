import React, { useCallback } from "react";
import { DataItem, useApp } from "./customHooks/useApp";
import { Button, DatePickerComp } from "./components";
import { CheckboxGroup } from "./components/Checkbox";
import { RadioGroup } from "./components/Radio";
import styles from "./app.module.css";
import { CSSProperties } from "react";

export type CustomAppStylesProps = {
  container: CSSProperties;
  label: CSSProperties;
};
const customCheckboxGroup: CustomAppStylesProps = {
  container: { textAlign: "left" },
  label: { color: "blue", fontSize: "16px" },
};
const customRadio: CustomAppStylesProps = {
  container: { textAlign: "left" },
  label: { color: "green", fontSize: "18PX" },
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
      <Button label="submit" onClick={handleSubmit} />
    </div>
  );
};

export default App;
