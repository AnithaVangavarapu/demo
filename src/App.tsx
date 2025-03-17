import React from "react";
import { DataItem, useApp } from "./customHooks/useApp";
import { Button, RadioGroup, CheckboxGroup } from "./components";

const App: React.FC = () => {
  const {
    data,
    initialRadioValue,
    updateRadioValue,
    initialCheckboxValue,
    updateCheckboxValues,
    handleSubmit,
  } = useApp();
  return (
    <div>
      {data.map((item: DataItem, index: number) => {
        if (item.type === "radio") {
          return (
            <div key={index}>
              <RadioGroup
                label={item.label}
                options={item.options}
                updateRadioValue={(value: string) =>
                  updateRadioValue(item.id, value)
                }
                initialRadioValue={initialRadioValue || item.options[0].value}
              />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <CheckboxGroup
                label={item.label}
                options={item.options}
                updateCheckboxValues={(value: string[]) =>
                  updateCheckboxValues(item.id, value)
                }
                initialCheckboxValue={
                  initialCheckboxValue || [item.options[0].value]
                }
              />
            </div>
          );
        }
      }, [])}
      <Button label="submit" onClick={handleSubmit} />
    </div>
  );
};

export default App;
