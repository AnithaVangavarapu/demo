import React, { useState } from "react";
interface RadioProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  radioValue: string;
}
const Radio = ({ label, value, updateValue, radioValue }: RadioProps) => {
  const handleChange = () => {
    updateValue(value);
  };

  return (
    <div>
      <input
        type="radio"
        value={value}
        onChange={handleChange}
        checked={radioValue === value}
      />
      <label>{label}</label>
    </div>
  );
};

export default Radio;
