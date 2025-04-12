import { Controller } from "react-hook-form";
import React from "react";
import { cn } from "@/lib/utils"; // Utility for styling

interface CustomTextAreaProps {
  label: string;
  labelClassName?: string;
  name: string;
  placeholder?: string;
  rules?: object; // ✅ Validation rules from React Hook Form
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any; // ✅ React Hook Form control
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  name,
  placeholder,
  rules,
  className,

  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className=" w-full">
          <div className={cn("flex flex-col", className)}>
            <label
              htmlFor={name}
              className=" text-base font-medium text-color "
            >
              {label}
            </label>
            <textarea
              {...field}
              placeholder={placeholder || `Enter Your ${label}`}
              className="w-full  outline-none p-2 resize-none input-bg border rounded-md mt-2 border-[#E6EBEE] dark:border-gray-700"
              rows={4}
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs mt-1 font-bold">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default CustomTextArea;
