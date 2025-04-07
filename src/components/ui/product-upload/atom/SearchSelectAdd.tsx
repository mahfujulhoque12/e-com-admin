"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

import { FaCaretDown, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addMadeInOneOption } from "@/redux/feature/product-upload/product-details/productDetailsSlice";
import { useForm, Controller } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface SearchSelectProps {
  options: Option[];
  onSelect: (option: Option) => void;
  onAdd?: (newOption: string) => void;
  placeholder?: string;
  className?: string;
  label: string;
  labelClassName?: string;
  value?: string;
  name: string;
}

export default function SearchSelectAdd({
  options,
  onSelect,
  onAdd,
  placeholder,
  className = "",
  value,
  label,
  labelClassName,
  name,
}: SearchSelectProps) {
  const { control, setValue, getValues, register } = useForm();

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState<Option[]>([
    ...options,
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const filteredOptions = dropdownOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    setValue(name, option);
    setIsOpen(false);
    setSearchTerm("");
    onSelect(option);
  };

  const dispatch = useDispatch();

  const handleAddOption = () => {
    const newOption = getValues("newOption");
    if (newOption.trim() !== "") {
      const newEntry = {
        label: newOption,
        value: newOption.toLowerCase().replace(/\s+/g, "-"),
      };
      setDropdownOptions((prevOptions) => [...prevOptions, newEntry]);
      setValue(name, newEntry);
      onSelect(newEntry);

      if (onAdd) {
        onAdd(newOption);
      }

      dispatch(addMadeInOneOption(newEntry));
      setIsModalOpen(false);
    }
  };

  return (
    <div className={cn(`relative w-full`, className)} ref={dropdownRef}>
      <label
        htmlFor={label}
        className={cn(
          `absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-[#f7fafc]`,
          labelClassName
        )}
      >
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        defaultValue={value ? options.find((opt) => opt.value === value) : null}
        render={({ field }) => (
          <input
            type="text"
            required
            placeholder={placeholder}
            value={field.value?.label || ""}
            onFocus={() => setIsOpen(true)}
            readOnly
            className="w-full p-4 border border-gray-300 bg-[#f7fafc] h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer pr-10"
          />
        )}
      />
      <FaCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1768D0]" />

      {isOpen && (
        <div className="absolute w-full animate-slide-down bg-[#f7fafc] dark:bg-darkPrimaryBg border dark:border-gray-600 border-gray-300 rounded-lg shadow-md mt-1 z-50">
          <div className="p-2 border-b border-gray-300">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="p-2 border-t border-gray-300 dark:border-gray-900 flex items-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-normal flex items-center gap-2"
            >
              Add New Items <FaPlus />
            </button>
          </div>

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[12000]">
          <div className="bg-white dark:bg-darkButtonBg p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Add New Option
            </h2>
            <input
              type="text"
              placeholder="Enter new option..."
              {...register("newOption")}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="mr-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 text-sm font-normal"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddOption}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-normal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
