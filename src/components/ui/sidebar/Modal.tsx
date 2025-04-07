// Updated Modal.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;

  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,

  className,
}) => {
  if (!isModalOpen) return null;

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-xl z-[101] w-full max-w-md ",
        className
      )}
    >
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-[#1768D0] text-white rounded hover:bg-blue-700"
      >
        Close
      </button>
      <h2 className="text-xl font-semibold">This is a modal!</h2>
      <p className="text-gray-600 mt-2">
        Here’s some content inside the modal.
      </p>
    </div>
  );
};

export default Modal;
