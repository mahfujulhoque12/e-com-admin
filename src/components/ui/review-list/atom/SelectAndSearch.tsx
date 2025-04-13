import { useState, useEffect, useRef, ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaCaretDown } from "react-icons/fa";
import img from "/public/product/customer.png";
import Image from "next/image";

interface SelectAndSearchProps<T> {
  name?: string;
  label?: string;
  options: T[];
  errorMessage?: string;
  onSelect: (value: T) => void;
  value?: T | null;
  register?: UseFormRegisterReturn;
  placeholder?: string;
}

const SelectAndSearch = <T extends string>({
  label,
  options,
  errorMessage,
  onSelect,
  placeholder,
  value,
}: SelectAndSearchProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<T | null>(value || null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedOption(value || null);
  }, [value]);

  const handleSelect = (option: T) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={dropdownRef}>
      <div className="w-full flex flex-col">
        <p className="text-base font-medium mb-2 text-gray-800 dark:text-gray-100">
          {" "}
          {label}
        </p>

        <div className="w-full relative focus-within:border-blue-500 border border-[#E6EBEE] bg-background dark:border-gray-700 px-5 py-3 rounded-md">
          <div
            className={`flex items-center justify-between cursor-pointer ${
              selectedOption
                ? "text-black dark:text-gray-100"
                : "text-gray-500 dark:text-gray-500"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption ||
              (placeholder ? `${placeholder} ${label}` : label)}
            <span className="text-blue-500">
              <FaCaretDown />
            </span>
          </div>

          <ul
            className={`absolute z-10 w-full bg-primary border border-[#E6EBEE] dark:border-gray-700 rounded-lg shadow-md mt-6 left-0 transition-all duration-300 transform overflow-hidden ${
              isOpen
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-95 invisible"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 outline-none border-b border-gray-300 dark:border-gray-600"
              value={searchTerm}
              onChange={handleSearch}
            />

            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.map((option) => (
                <li
                  key={option}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
                  onClick={() => handleSelect(option)}
                >
                  <Image src={img} alt="img" width={50} height={50} />
                  <div className="flex flex-col ">
                    <span> {option}</span>
                    <span className="text-gray-700 dark:text-gray-200">
                      custoemr@gamil.com
                    </span>
                  </div>
                </li>
              ))}
              {filteredOptions.length === 0 && (
                <li className="px-4 py-2 text-gray-400 dark:text-gray-500">
                  No options found
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-xs mt-1 font-bold">{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectAndSearch;
