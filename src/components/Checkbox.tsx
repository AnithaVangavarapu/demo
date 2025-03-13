import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
}

const Checkbox = ({ label, value, updateValue }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheck = () => {
    setIsChecked(() => !isChecked);
    updateValue(value);
  };

  return (
    <div>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={toggleCheck}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
