import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleSharp } from "react-icons/io5";

interface FormInput {
  attribute: string;
}
interface ModalProps {
  onClose: () => void;
}
const VaraitionModal: React.FC<ModalProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    console.log(data, "modal data");
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full mx-5 max-w-[400px] relative">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#333B4E]">
            New Attributes
          </h2>
          <p className="text-[#666666] font-normal text-xs mb-3">
            Duplicate attributes not allowed
          </p>
        </div>
        <button className="cursor-pointer" type="button" onClick={onClose}>
          <IoCloseCircleSharp size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-xs font-medium text-[#333B4E]">
            Attribute Name
          </label>
          <input
            {...register("attribute", { required: true })}
            type="text"
            placeholder="Attribute"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
          />
          {errors.attribute && (
            <p className="text-red-500 text-sm mb-2">Attribute is required</p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-2 sm:px-4 py-1 sm:py-2 text-[#0070FF] text-sm sm:text-base font-medium rounded-md border border-[#0070FF] cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-2 sm:px-4 py-1 sm:py-2 bg-[#0070FF] text-sm sm:text-base font-medium text-white cursor-pointer rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VaraitionModal;
