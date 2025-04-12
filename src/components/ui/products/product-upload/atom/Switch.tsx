import React from "react";

type SwitchProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({ isChecked, onChange }) => {
  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      htmlFor="income-expense-switch"
    >
      <input
        id="income-expense-switch"
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-8 h-4 sm:w-11 sm:h-6 mt-2 bg-gray-200 peer-focus:outline-none  rounded-full dark:bg-gray-700 peer-checked:bg-blue-600"></div>
      <div className="absolute w-3 sm:w-4 h-3 sm:h-4 mt-2 bg-white rounded-full transition-all peer-checked:translate-x-5 translate-x-1"></div>
    </label>
  );
};

export default Switch;
