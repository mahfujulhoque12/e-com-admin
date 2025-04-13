import { useState, useEffect, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaCaretDown } from "react-icons/fa";

interface ProductsDropdownProps<T> {
  name?: string;
  label?: string;
  options: T[];
  errorMessage?: string;
  onSelect: (value: T) => void;
  value?: T | null; // Accept the controlled value from the parent
  register?: UseFormRegisterReturn; // Correct type for register
  placeholder?: string;
}

const ProductsDropdown = <T extends string>({
  name,
  label,
  options,
  errorMessage,
  onSelect,
  placeholder,
  value, // Get value from form data
}: ProductsDropdownProps<T>) => {
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
        <div className="w-full relative   focus-within:border-blue-500  focus-within:ring-blue-500 border border-[#E6EBEE] dark:border-gray-700 px-5 py-3 rounded-md">
          <div
            key={name}
            className={`w-full focus-within:border-blue-500 focus-within:ring-blue-500  flex items-center bg-transparent outline-none cursor-pointer transition-all duration-300 ease-in-out justify-between ${
              selectedOption
                ? "text-black dark:text-gray-300"
                : "text-gray-500 dark:text-gray-200"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption ||
              (placeholder ? ` ${placeholder} ${label}` : label)}

            <span className="text-blue-500">
              <FaCaretDown />
            </span>
          </div>

          {/* Keep the ul always in the DOM but animate it */}
          <ul
            className={`absolute z-10 w-full bg-primary border border-[#E6EBEE] dark:border-gray-700 rounded-lg shadow-md mt-6 left-0 transition-all duration-300 ease-in-out transform ${
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

export default ProductsDropdown;
