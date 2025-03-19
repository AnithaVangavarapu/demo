import React, { useCallback } from "react";
import { DataItem, useApp } from "./customHooks/useApp";
import { Button, DatePickerComp } from "./components";
import { CheckboxGroup } from "./components/checkbox";
import { RadioGroup } from "./components/radio";
import styles from "./app.module.css";
import { CSSProperties } from "react";

export type customStylesProps = {
  [key: string]: CSSProperties;
};
const customCheckboxGroup: customStylesProps = {
  container: { textAlign: "left" },
  label: { color: "blue", fontSize: "16px" },
};
const customRadio: customStylesProps = {
  label: { color: "green", fontSize: "18PX" },
};
const App: React.FC = () => {
  const {
    data,
    updateRadioValue,
    updateCheckboxValues,
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
          updateRadioValue={(value: string) => updateRadioValue(item.id, value)}
          initialRadioValue={item.options[0].value}
          error={error}
          customRadio={customRadio}
          key={index}
        />
      );
    } else {
      return (
        <CheckboxGroup
          label={item.label}
          options={item.options}
          updateCheckboxValue={(value: string[]) =>
            updateCheckboxValues(item.id, value)
          }
          initialCheckboxValue={[item.options[0].value]}
          error={error}
          customCheckboxGroup={customCheckboxGroup}
          keyIndex={index}
        />
      );
    }
  }, []);

  return (
    <div className={styles.app}>
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
