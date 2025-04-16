"use client";
import { UseFormRegister } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { updateInputField } from "@/redux/feature/input/InputSlice";

interface InputFieldProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validation?: object;
  error?: string;
  placeholder?: string;
  type?: string;
}

const ResuableInput: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  validation,
  error,
  placeholder,
  type = "text",
}) => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.inputSlice[name] || "");

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-base font-medium text-color">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="w-full input-bg focus-within:border-blue-500 focus-within:ring-blue-500 border border-[#E6EBEE] dark:border-gray-700 px-3.5 py-4 rounded-md mt-2"
        placeholder={placeholder}
        {...register(name, {
          ...validation,
          onChange: (e) => {
            dispatch(updateInputField({ name, value: e.target.value }));
          },
        })}
        value={inputValue}
      />
      {error && <p className="text-red-500 text-xs font-bold mt-1.5">{error}</p>}
    </div>
  );
};

export default ResuableInput;
