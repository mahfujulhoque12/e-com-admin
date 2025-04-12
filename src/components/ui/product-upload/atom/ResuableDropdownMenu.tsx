import { useState, useEffect, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaCaretDown } from "react-icons/fa";

interface ResuableDropdownMenuProps<T> {
  name: string;
  label?: string;
  options: T[];
  errorMessage?: string;
  onSelect: (value: T) => void;
  value?: T | null; // Accept the controlled value from the parent
  register?: UseFormRegisterReturn; // Correct type for register
}

const ResuableDropdownMenu = <T extends string>({
  name,
  label,
  options,
  errorMessage,
  onSelect,
  value, // Get value from form data
}: ResuableDropdownMenuProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<T | null>(value || null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedOption(value || null); // Update when `value` changes
  }, [value]);

  const handleSelect = (option: T) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div className="w-full  flex flex-col  ">
        <label htmlFor={name} className=" text-base font-medium text-color ">
          {label}
        </label>

        <div className="w-full relative input-bg  focus-within:border-blue-500  focus-within:ring-blue-500 border border-[#E6EBEE] dark:border-gray-700 px-3.5 py-4 rounded-md mt-2">
          <div
            className={`w-full text-sm  focus-within:border-blue-500 focus-within:ring-blue-500  flex items-center bg-transparent outline-none cursor-pointer transition-all duration-300 ease-in-out justify-between ${
              selectedOption ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption || `Please Select a ${label}`}

            <span className="text-blue-500">
              <FaCaretDown />
            </span>
          </div>

          {/* Keep the ul always in the DOM but animate it */}
          <ul
            className={`absolute z-10 w-full bg-background border border-[#E6EBEE] rounded-lg dark:border-gray-700 shadow-md mt-6 left-0 transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-95 invisible"
            }`}
          >
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Validation Error */}
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1 font-bold">{errorMessage}</p>
      )}
    </div>
  );
};

export default ResuableDropdownMenu;
