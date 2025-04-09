import React, { Suspense, useEffect, useState } from "react";

import visa from "/public/productUpload/visa.png";
import ssl from "/public/productUpload/ssl.png";
import master from "/public/productUpload/master.png";
import cod from "/public/productUpload/cod.png";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/redux-store/store";
import {
  setPaymentData,
  toggleGST,
  togglePaymentMethod,
} from "@/redux/feature/product-upload/payment/paymentSlice";
import { useGetPaymentQuery } from "@/redux/feature/api/product-upload/paymentApi/paymentSlice";
import { useSearchParams } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";
import { PaymentType, VariationInputs } from "@/types/VariationInput";
import PaymentToggle from "./atom/PaymentToggle";
import ResuableInput from "./atom/ResuableInput";
import ResuableSwitch from "./atom/ResuableSwitch";

const PaymentFormContent = () => {
  const dispatch = useDispatch();
  const paymentData = useSelector((state: RootState) => state.payment);
  const {
    register,

    formState: { errors },
    handleSubmit,
  } = useForm<PaymentType>({
    defaultValues: {
      gstPercent: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: PaymentType) => {
    console.log(data, "from data on react hooks");
  };
  const onError = (errors: FieldErrors<VariationInputs>) => {
    console.log(errors, "from errors on react hooks");
  };

  // RTK Query hooks
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [paymentID, setPaymentID] = useState<string | null>(null);

  // Fetch API data using RTK Query
  const { data, error, isLoading } = useGetPaymentQuery(id as string, {
    skip: !id, // Skip query if no ID
  });

  // Update Redux state when API data is available
  useEffect(() => {
    if (data) {
      dispatch(setPaymentData(data)); // Update Redux store
      setPaymentID(data.id);
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Payment Details</div>;

  return (
    <div className="p-5 mt-5 rounded-md shadow-md bg-white ">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Payment Type Section */}
        <h1 className="text-[#333B4E] font-semibold text-xl ">Payment Type</h1>

        <PaymentToggle
          imageSrc={cod}
          imageAlt="COD Payment"
          isChecked={paymentData.paymentMethods.COD}
          onToggle={() => dispatch(togglePaymentMethod("COD"))}
        />

        <PaymentToggle
          imageSrc={visa}
          imageAlt="Visa Payment"
          isChecked={paymentData.paymentMethods.Visa}
          onToggle={() => dispatch(togglePaymentMethod("Visa"))}
        />

        <PaymentToggle
          imageSrc={master}
          imageAlt="MasterCard Payment"
          isChecked={paymentData.paymentMethods.MasterCard}
          onToggle={() => dispatch(togglePaymentMethod("MasterCard"))}
        />

        <PaymentToggle
          imageSrc={ssl}
          imageAlt="SSL Payment"
          isChecked={paymentData.paymentMethods.SSL}
          onToggle={() => dispatch(togglePaymentMethod("SSL"))}
        />

        {/* GST Section */}
        <div className="mt-7 flex items-center gap-4">
          <h1 className="text-[#333B4E] font-semibold text-xl ">GST</h1>
          <ResuableSwitch
            isChecked={paymentData.GST.enabled}
            onChange={() => dispatch(toggleGST())}
          />
        </div>

        {/* GST Percent Input Field (Blurred when disabled) */}
        <div
          className={`w-full mt-5 transition-all duration-300 ${
            !paymentData.GST.enabled
              ? "blur-xs opacity-100 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <ResuableInput
            label="GST Percent"
            name="gstPercent"
            type="text"
            register={register}
            validation={{
              required: "GST Percent is required",
              minLength: { value: 3, message: "Minimum length is 3" },
            }}
            error={errors.gstPercent?.message}
            placeholder="GST Percent"
          />
        </div>

        {/* Form Buttons */}
        <div className="mt-6 flex justify-end items-center gap-3">
          {/* Cancel Button */}
          <button
            type="button"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-gray-700  border border-gray-300  rounded-md hover:bg-red-400  hover:text-white transition-all duration-300"
            onClick={() => console.log("Form cancelled")}
          >
            Cancel
          </button>

          {/* Save Button */}
          <button
            type="submit"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            {paymentID ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

const PaymentForm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PaymentFormContent />
  </Suspense>
);

export default PaymentForm;
