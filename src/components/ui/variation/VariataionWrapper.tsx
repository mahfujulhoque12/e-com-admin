import { variationsData } from "@/data/VariationListData";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";
import VaraitionModal from "./atom/VaraitionModal";
import { MdEdit } from "react-icons/md";

interface FormInput {
  color: string;
  attribute: string;
}

const VariataionWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggleDropdown = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = Object.values(dropdownRefs.current).every((ref) => {
      return ref && !ref.contains(event.target as Node);
    });
    if (isOutside) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    try {
      const response = await fetch("/api/variations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("data is ", result);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  return (
    <div>
      {/* add variation start */}
      <div className="flex flex-col sm:flex-row gap-5 bg-white p-5 shadow-md rounded-md mt-5">
        <div className="basis-full sm:basis-[35%]">
          <h2 className="font-semibold text-xl text-[#333B4E]">
            New Variation
          </h2>
          <p className="text-base font-medium text-[#333B4E] mt-4">
            Variation Name
          </p>
        </div>
        <div className="basis-full sm:basis-[65%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-4 bg-[#F9FBFC] border border-[#E6EBEE] px-4 py-1 rounded-md ">
              <div className="flex flex-col gap-2 w-full">
                <input
                  {...register("color", { required: true })}
                  type="text"
                  placeholder="color"
                  className="placeholder:text-[#8391A1] text-base font-medium w-full py-4 border-none focus:outline-none"
                />
                {errors.color && (
                  <p className="text-red-400 text-sm font-normal">
                    Color is required
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#0070FF] text-xs font-normal px-4 py-2 rounded-md shadow-sm text-white"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* add variation end */}

      {/* show data start */}
      <div className="gap-5 bg-white p-5 shadow-md rounded-md mt-5">
        <h2 className="text-[#0A0E1F] font-semibold text-xl">
          Variations List
        </h2>
        <div className="border border-gray-300 p-5 rounded-md mt-5">
          <p className="text-[#333B4E] text-base font-semibold flex items-center gap-2">
            Color{" "}
            <button className="cursor-pointer">
              <RiEditLine size={20} color="#0070FF" />
            </button>{" "}
            <button className="cursor-pointer">
              <RiDeleteBin5Line size={20} color="#FF2147" />
            </button>{" "}
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-4 items-start md:items-center  w-full px-4 py-2 ">
            {/* Scrollable variation buttons */}
            <div className="w-full md:w-auto ">
              <div className="grid grid-cols-2 sm:grid-cols-3  md:flex gap-4 whitespace-nowrap">
                {variationsData.map((variation) => (
                  <div
                    ref={(ref) => {
                      dropdownRefs.current[variation.id] = ref;
                    }}
                    key={variation.id}
                    className="relative flex-shrink-0"
                  >
                    <button
                      onClick={() => toggleDropdown(variation.id)}
                      className="bg-[#0070FF] px-3 py-2 cursor-pointer text-xs font-medium text-white rounded-md shadow-sm flex items-center gap-1"
                    >
                      {variation.title}
                      <variation.icon size={18} />
                    </button>

                    {openDropdown === variation.id && (
                      <div className="absolute left-0 top-10 bg-white shadow-md px-4 py-2 rounded-md transition-all duration-300 ease-in-out z-10">
                        <button className="cursor-pointer mr-4 text-[#333B4E] flex items-center text-sm font-medium gap-2">
                          <MdEdit size={20} color="#0070FF" />
                          Edit
                        </button>
                        <button className="cursor-pointer mr-4 text-[#333B4E] flex items-center text-sm font-medium mt-5 gap-2">
                          <RiDeleteBin5Line size={20} color="#FF2147" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Add More button */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-2 cursor-pointer text-xs font-medium text-[#333B4E] rounded-md shadow-sm flex items-center gap-1"
              >
                <IoIosAddCircleOutline size={18} />
                Add More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* show data end */}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-[10vh] max-h-[80vh] overflow-y-scroll inset-0 z-[100] flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          />
          <VaraitionModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default VariataionWrapper;
