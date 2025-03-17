import React from "react";
import { DataItem, useApp } from "./customHooks/useApp";
import { Button, RadioGroup, CheckboxGroup } from "./components";
import styles from "./app.module.css";
const App: React.FC = () => {
  const { data, updateRadioValue, updateCheckboxValues, handleSubmit } =
    useApp();
  return (
    <div className={styles.app}>
      {data.map((item: DataItem, index: number) => {
        if (item.type === "radio") {
          return (
            <div key={index} className={styles.wrapper}>
              <RadioGroup
                label={item.label}
                options={item.options}
                updateRadioValue={(value: string) =>
                  updateRadioValue(item.id, value)
                }
                initialRadioValue={item.options[0].value}
              />
            </div>
          );
        } else {
          return (
            <div key={index} className={styles.wrapper}>
              <CheckboxGroup
                label={item.label}
                options={item.options}
                updateCheckboxValue={(value: string[]) =>
                  updateCheckboxValues(item.id, value)
                }
                initialCheckboxValue={[item.options[0].value]}
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
