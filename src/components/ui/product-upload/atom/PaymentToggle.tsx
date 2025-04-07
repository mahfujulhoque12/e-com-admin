import React from "react";
import Image, { StaticImageData } from "next/image";
import ResuableSwitch from "./ResuableSwitch";


interface PaymentToggleProps {
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  containerWidth?: string;
  isChecked: boolean; // Control state from parent
  onToggle: () => void; // Handle state update
}

const PaymentToggle: React.FC<PaymentToggleProps> = ({
  imageSrc,
  imageAlt,
  imageWidth = 250,
  imageHeight = 100,
  containerWidth = "md:w-1/3",
  isChecked,
  onToggle,
}) => {
  return (
    <div
      className={`mt-6 flex items-center justify-between w-full ${containerWidth}`}
    >
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt||"image"}
        className="h-[40px] w-auto"
      />
      <ResuableSwitch isChecked={isChecked} onChange={onToggle} />
    </div>
  );
};

export default PaymentToggle;
