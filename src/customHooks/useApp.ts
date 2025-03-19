import { useState, useEffect, useCallback } from "react";
import dayjs, { Dayjs } from "dayjs";
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
type radioProps = {
  [key: string]: string;
};
type checkboxProps = {
  [key: string]: string[];
};

export const useApp = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [checkboxValues, setCheckboxValues] = useState<checkboxProps>({});
  const [radioValue, setRadioValue] = useState<radioProps>({});
  const [error, setError] = useState<string>("");
  // const [startDate, setStartDate] = useState<Date | null>();
  // const [endDate, setEndDate] = useState<Date | null>();

  const [startDate, setStartDate] = useState<Dayjs>();
  const [endDate, setEndDate] = useState<Dayjs>();
  useEffect(() => {
    axios.get<DataItem[]>("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);
  const updateCheckboxValues = useCallback((id: string, value: string[]) => {
    setCheckboxValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }, []);
  const updateRadioValue = useCallback((id: string, value: string) => {
    setRadioValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }, []);
  const updateDate = useCallback((date: Dayjs, type: string) => {
    if (type === "start") {
      console.log("startDate:", dayjs(date).format("DD/MMM/YYYY"));
      console.log("StartDate", date);
      setStartDate(date);
    } else {
      console.log("endDate:", date);
      setEndDate(date);
    }
  }, []);

  const handleSubmit = () => {
    const submitData: { [key: string]: string } = {};

    data.forEach((item) => {
      if (item.type === "radio") {
        submitData[item.id] = radioValue[item.id] || item.options[0].value;
      } else {
        submitData[item.id] =
          checkboxValues[item.id] && checkboxValues[item.id].length > 0
            ? checkboxValues[item.id].toString()
            : [item.options[0].value].toString();
      }
    });
    if (error) {
      return;
    } else {
      console.log(submitData);
    }
  };

  return {
    data,
    updateRadioValue,
    updateCheckboxValues,
    handleSubmit,
    error,
    startDate,
    updateDate,
    endDate,
  };
};
