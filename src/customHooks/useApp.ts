import { useState, useEffect, useCallback } from "react";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";
export type Option = {
  label: string;
  value: string;
};
export interface DataItem {
  id: string;
  type: "radio" | "checkbox";
  label: string;
  options: Option[];
  validation: {
    required: {
      value: boolean;
      message: string;
    };
  };
}

type DatasetProps = {
  [key: string]: string | string[];
};
export const useApp = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [dataset, setDataset] = useState<DatasetProps>({});
  const [error, setError] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs>();
  const [endDate, setEndDate] = useState<Dayjs>();
  //fetch data from json file
  useEffect(() => {
    axios.get<DataItem[]>("/data.json").then((response) => {
      setData(response.data);
    });
  }, []);
  //update dataset before submit
  const updateDataset = useCallback((id: string, value: string | string[]) => {
    setDataset((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  }, []);
  //update date state
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
  //submit dataset
  const handleSubmit = () => {
    if (error) {
      return;
    } else {
      console.log(dataset);
    }
  };

  return {
    data,
    updateDataset,
    handleSubmit,
    error,
    startDate,
    updateDate,
    endDate,
  };
};
