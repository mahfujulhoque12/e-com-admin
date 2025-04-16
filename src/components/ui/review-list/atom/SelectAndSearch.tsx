"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";

interface GenericOption {
  name: string;
  email?: string;
  img: string;
}

interface SelectAndSearchProps<T extends GenericOption> {
  name?: string;
  label?: string;
  errorMessage?: string;
  onSelect: (value: T) => void;
  value?: T | null;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  options?: T[];
  isLoading: boolean;
}

const SelectAndSearch = <T extends GenericOption>({
  label,
  errorMessage,
  onSelect,
  placeholder,
  options,
  isLoading,
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = (options || []).filter((opt) =>
    opt.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={dropdownRef}>
      <div className="w-full flex flex-col">
        {label && (
          <p className="text-base font-medium mb-2 text-gray-800 dark:text-gray-100">
            {label}
          </p>
        )}

        <div className="w-full relative focus-within:border-blue-500 border border-[#E6EBEE] bg-background dark:border-gray-700 px-5 py-4 rounded-md">
          <div
            className={`flex items-center justify-between cursor-pointer ${
              selectedOption ? "text-black dark:text-gray-100" : "text-gray-500"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption
              ? selectedOption.name
              : placeholder
              ? `${placeholder} ${label || ""}`
              : label}
            <span className="text-blue-500">
              <FaCaretDown />
            </span>
          </div>

          <ul
            className={`absolute z-10 w-full bg-white dark:bg-gray-800 border mt-2 rounded-lg shadow-lg transition-all duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-4 outline-none border-b border-gray-300 dark:border-gray-600"
              value={searchTerm}
              onChange={handleSearch}
            />

            {!isLoading &&
              filteredOptions.map((option, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => handleSelect(option)}
                >
                  <Image src={option.img} alt="img" width={40} height={40} />
                  <div className="flex flex-col">
                    <span>{option.name}</span>
                    {option.email && (
                      <span className="text-gray-600 dark:text-gray-200 text-sm">
                        {option.email}
                      </span>
                    )}
                  </div>
                </li>
              ))}

            {!isLoading && filteredOptions.length === 0 && (
              <li className="px-4 py-2 text-gray-400 dark:text-gray-500">
                No options found
              </li>
            )}
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
