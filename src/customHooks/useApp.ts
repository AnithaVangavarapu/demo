import { useState, useEffect } from "react";
import axios from "axios";
export type option = {
  label: string;
  value: string;
};
export interface DataItem {
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
export const useApp = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [checkboxValues, setCheckboxValues] = useState<
    Record<string, string[]>
  >({});
  const [radioValue, setRadioValue] = useState<Record<string, string>>({});
  let initialCheckboxValue: string[] = [];
  let initialRadioValue: string = "";

  useEffect(() => {
    axios.get<DataItem[]>("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);
  const updateCheckboxValues = (id: string, value: string[]) => {
    setCheckboxValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const updateRadioValue = (id: string, value: string) => {
    setRadioValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = () => {
    const submitData: { [key: string]: string | string[] } = {};

    data.forEach((item) => {
      if (item.type === "radio") {
        submitData[item.id] = radioValue[item.id] || item.options[0].value;
      } else {
        submitData[item.id] =
          checkboxValues[item.id] && checkboxValues[item.id].length > 0
            ? checkboxValues[item.id]
            : [item.options[0].value];
      }
    });

    console.log(submitData);
  };

  return {
    data,
    initialRadioValue,
    updateRadioValue,
    initialCheckboxValue,
    updateCheckboxValues,
    handleSubmit,
    checkboxValues,
    radioValue,
  };
};
