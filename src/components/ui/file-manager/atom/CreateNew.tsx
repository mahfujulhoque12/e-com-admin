import React, { ReactNode, useEffect, useRef, useState } from "react";

import {
  IoIosAddCircleOutline,
  IoIosFolder,
  IoIosDocument,
  IoIosStats,
  IoIosVideocam,
} from "react-icons/io";

interface DropdownItem {
  id: string;
  label: string;
  icon: ReactNode;
}

const dropdownItems: DropdownItem[] = [
  { id: "folder", label: "New Folder", icon: <IoIosFolder size={18} /> },
  {
    id: "document",
    label: "New Document",
    icon: <IoIosDocument size={18} />,
  },
  {
    id: "spreadsheet",
    label: "New Spreadsheet",
    icon: <IoIosStats size={18} />,
  },
  {
    id: "presentation",
    label: "New Presentation",
    icon: <IoIosVideocam size={18} />,
  },
];
const CreateNew = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemClick = (itemId: string) => {
    console.log(`Clicked: ${itemId}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative mt-3" ref={dropdownRef}>
      <button
        className="text-sm font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-md shadow-md cursor-pointer flex items-center gap-1"
        onClick={toggleDropdown}
      >
        <IoIosAddCircleOutline size={20} />
        Create New
      </button>

      {isDropdownOpen && (
        <div className="absolute left mt-2 w-48 bg-background rounded-md shadow-lg z-10 border border-gray-300 dark:border-gray-700">
          <div className="py-1">
            {dropdownItems.map((item) => (
              <button
                key={item.id}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                onClick={() => handleDropdownItemClick(item.id)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNew;
