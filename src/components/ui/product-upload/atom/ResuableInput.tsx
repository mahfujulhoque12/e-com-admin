import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validation?: object;
  error?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}

const ResuableInput: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  validation,
  error,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="  ">
        <label
          htmlFor={name}
          className=" text-base font-medium text-[#333B4E] "
        >
          {label}
        </label>
        <input
          id={name}
          type={type}
          className="w-full bg-[#F9FBFC]  focus-within:border-blue-500  focus-within:ring-blue-500 border border-[#E6EBEE] px-3.5 py-4 rounded-md mt-2"
          placeholder={placeholder}
          {...register(name, validation)}
          value={value}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs font-bold mt-1.5">{error}</p>
      )}
    </div>
  );
};

export default ResuableInput;
