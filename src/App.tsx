import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, RadioGroup, CheckboxGroup } from "./components";

export type option = {
  label: string;
  value: string;
};
interface DataItem {
  id: string;
  type: string;
  label: string;
  options: option[];
  validation: {
    required: {
      value: boolean;
      message: string;
    };
  };
}

const App: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  let initialCheckboxValue: string[] = [];
  let initialRadioValue: string = "";
  let checkboxvalues: string[] = [];
  let radiovalue: string = "";
  useEffect(() => {
    axios.get<DataItem[]>("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);
  const updateCheckboxValues = (value: string[]) => {
    checkboxvalues = value;
  };
  const updateRadioValue = (value: string) => {
    radiovalue = value;
  };
  const handleSubmit = () => {
    console.log(checkboxvalues);
    console.log(radiovalue);
  };

  return (
    <div>
      {data.map((item: DataItem, index: number) => {
        if (item.type === "radio") {
          initialRadioValue = item.options[0].value;
          return (
            <div key={index}>
              <RadioGroup
                label={item.label}
                options={item.options}
                updateRadioValue={updateRadioValue}
                initialRadioValue={initialRadioValue}
              />
            </div>
          );
        } else {
          initialCheckboxValue = [item.options[0].value];
          return (
            <div key={index}>
              <CheckboxGroup
                label={item.label}
                options={item.options}
                updateCheckboxValues={updateCheckboxValues}
                initialCheckboxValue={initialCheckboxValue}
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
