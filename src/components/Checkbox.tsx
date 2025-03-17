import React, { useState, useEffect } from "react";

interface CheckboxProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  isChecked: boolean;
}

const Checkbox = ({ label, value, updateValue, isChecked }: CheckboxProps) => {
  const [isCheckedState, setIsCheckedState] = useState<boolean>(isChecked);

  const toggleCheck = () => {
    setIsCheckedState(!isCheckedState);
    updateValue(value);
  };
  useEffect(() => {
    setIsCheckedState(isChecked);
  }, [isChecked]);
  return (
    <div>
      <input
        type="checkbox"
        value={value}
        checked={isCheckedState}
        onChange={toggleCheck}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
