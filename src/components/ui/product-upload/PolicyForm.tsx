/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetpolicyFormQuery,
  useCreatePolicyProfileMutation,
  useUpdatePolicyProfileMutation,
} from "@/redux/feature/api/product-upload/policyApi/policySlice";
import {
  resetPolicy,
  setFormData,
  updatePolicy,
} from "@/redux/feature/product-upload/policy/policySlice";
import { RootState } from "@/redux/redux-store/store";
import {
  CookieEnum,
  DataEnum,
  PaymentEnum,
  PolicyTypes,
  PrivacyEnum,
  RefundEnum,
  RefurnEnum,
  ShippingEnum,
  WarrantyEunm,
} from "@/types/PolicyTypes";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ResuableDropdownMenu from "./atom/ResuableDropdownMenu";

const PolicyFormContent = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.policy);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PolicyTypes>({
    defaultValues: { ...formData },
    mode: "onSubmit",
  });

  // return registe
  register("return", {
    required: "Return Policy is Required",
  });

  // refund register
  register("refund", {
    required: "Refund Policy is Required",
  });

  // cookie register
  register("cookie", {
    required: "cookie Policy is Required",
  });

  // data register
  register("data", {
    required: "data Policy is Required",
  });

  // payment register
  register("payment", {
    required: "payment Policy is Required",
  });

  // privacy register
  register("privacy", {
    required: "privacy Policy is Required",
  });

  // shipping register
  register("shipping", {
    required: "shipping Policy is Required",
  });

  // warranty register
  register("warranty", {
    required: "warranty Policy is Required",
  });

  const onError = (errors: FieldErrors<PolicyTypes>) => {
    console.log(errors, "form errors");
  };

  // rtk query
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  // Local state for storing the data and Id
  const [policyId, setPolicyId] = useState<string | null>(null);

  // Call the RTK Query hook with the id; skip the query if no id is provided
  const { data, error, isLoading } = useGetpolicyFormQuery(id as string, {
    skip: !id,
  });

  // Update local state when new data is fetched
  // Update local state when new data is fetched
  useEffect(() => {
    if (data) {
      const updatedData = {
        return: data.return || "",
        refund: data.refund || "",
        warranty: data.warranty || "",
        data: data.data || "",
        payment: data.payment || "",
        shipping: data.shipping || "",
        privacy: data.privacy || "",
        cookie: data.cookie || "",
        youTube: data.youTube || "",
      };
      dispatch(setFormData(updatedData));
      setPolicyId(data.id);
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (formData) {
      Object.keys(formData).forEach((key) => {
        setValue(key as keyof PolicyTypes, formData[key as keyof PolicyTypes]);
      });
    }
  }, [formData, setValue]);

  // RTK Query muations
  const [createPolicyProfile] = useCreatePolicyProfileMutation();
  const [updatePolicyProfile] = useUpdatePolicyProfileMutation();

  const handleFieldChange = (field: keyof PolicyTypes, value: any) => {
    dispatch(updatePolicy({ field, value }));
    setValue(field, value as any, { shouldValidate: true, shouldTouch: true });
  };

  const onSubmit = async (data: PolicyTypes) => {
    try {
      let response;
      if (policyId) {
        response = await updatePolicyProfile({
          id: policyId,
          formData: data,
        }).unwrap();
      } else {
        response = await createPolicyProfile(data).unwrap();
      }

      console.log("Policy saved successfully:", response);

      if (!response || !response.id) {
        console.error("API did not return expected data:", response);
        return;
      }

      setPolicyId(response.id);
    } catch (error) {
      console.error("Error saving variations profile:", error);
    }
    console.log(data, "react-hook-form data get");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Product Details profile</div>;

  return (
    <div className="p-5 rounded-md shadow-md bg-white mt-5">
      <h1 className="text-[#333B4E] font-semibold text-xl ">Policy</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* First Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <ResuableDropdownMenu
            name="return"
            label="Return Policy"
            options={Object.values(RefurnEnum)}
            errorMessage={errors.return?.message}
            value={formData.return}
            onSelect={(value) => handleFieldChange("return", value)}
          />

          <ResuableDropdownMenu
            name="refund"
            label="Refund Policy"
            options={Object.values(RefundEnum)}
            errorMessage={errors.refund?.message}
            value={formData.refund}
            onSelect={(value) => handleFieldChange("refund", value)}
          />
        </div>

        {/* Second Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <ResuableDropdownMenu
            name="warranty"
            label="Warranty Policy"
            options={Object.values(WarrantyEunm)}
            value={formData.warranty}
            errorMessage={errors.warranty?.message}
            onSelect={(value) => handleFieldChange("warranty", value)}
          />

          <ResuableDropdownMenu
            name="data"
            label="Data Policy"
            options={Object.values(DataEnum)}
            value={formData.data}
            errorMessage={errors.data?.message}
            onSelect={(value) => handleFieldChange("data", value)}
          />
        </div>

        {/* 3rd Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <ResuableDropdownMenu
            name="payment"
            label="Payment Policy"
            options={Object.values(PaymentEnum)}
            value={formData.payment}
            errorMessage={errors.payment?.message}
            onSelect={(value) => handleFieldChange("payment", value)}
          />

          <ResuableDropdownMenu
            name="shipping"
            label="Shipping Policy"
            options={Object.values(ShippingEnum)}
            value={formData.shipping}
            errorMessage={errors.payment?.message}
            onSelect={(value) => handleFieldChange("shipping", value)}
          />
        </div>

        {/* 4th Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <ResuableDropdownMenu
            name="privacy"
            label="Privacy Policy"
            options={Object.values(PrivacyEnum)}
            value={formData.privacy}
            errorMessage={errors.privacy?.message}
            onSelect={(value) => handleFieldChange("privacy", value)}
          />

          <ResuableDropdownMenu
            name="cookie"
            label="cookie Policy"
            options={Object.values(CookieEnum)}
            value={formData.cookie}
            errorMessage={errors.privacy?.message}
            onSelect={(value) => handleFieldChange("cookie", value)}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-gray-700  border border-gray-300  rounded-md hover:bg-red-400  hover:text-white transition-all duration-300"
            onClick={() => dispatch(resetPolicy())} // Reset form
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
          >
            {policyId ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

const PolicyForm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PolicyFormContent />
  </Suspense>
);

export default PolicyForm;
