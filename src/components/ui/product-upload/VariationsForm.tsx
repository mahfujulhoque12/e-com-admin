"use client";

import { useForm, useFieldArray } from "react-hook-form";

import {
  AttributeEnum,
  ProductTypeEnum,
  ShippinEnum,
  VariationInputs,
  VariationNameEnum,
} from "@/types/VariationInput";
import ResuableDropdownMenu from "./atom/ResuableDropdownMenu";
import ResuableInput from "./atom/ResuableInput";
import { FaPlus, FaTrash } from "react-icons/fa";

// Update the form data interface to include variations array and productType
interface FormData {
  productType: ProductTypeEnum | "";
  variations: VariationInputs[];
}

export default function VariationsForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      productType: "", // Add productType to default values
      variations: [
        {
          variationName: "",
          attribute: "",
          totalStock: "",
          regularPrice: "",
          salePrice: "",
          shipping: "",
          shippingUnit: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variations",
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data); // Log the entire form data
  };

  return (
    <div className="bg-white p-5 shadow-md rounded-md mt-5 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="text-[#333B4E] text-xl font-semibold ">Variations</h1>

        {/* Product Type Dropdown */}
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <div className="w-full">
            <ResuableDropdownMenu
              name="productType" // Fixed typo from "prodcutType"
              label="Product Type"
              options={Object.values(ProductTypeEnum)}
              errorMessage={errors.productType?.message}
              onSelect={(value) => {
                setValue("productType", value as ProductTypeEnum, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                });
              }}
              register={register("productType", {
                required: "Product Type is required",
              })}
            />
          </div>
        </div>

        {/* Variations Repeater */}
        {fields.map((field, index) => (
          <div key={field.id} className="bg-white p-4 rounded-md shadow-md">
            <h1 className="tetext-[#333B4E] text-xl font-semibold ">
              Set Variations
            </h1>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full">
                <ResuableDropdownMenu
                  name={`variations.${index}.variationName`}
                  label="Variation Name"
                  options={Object.values(VariationNameEnum)}
                  errorMessage={
                    errors.variations?.[index]?.variationName?.message
                  }
                  onSelect={(value) => {
                    setValue(
                      `variations.${index}.variationName`,
                      value as VariationNameEnum,
                      {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      }
                    );
                  }}
                  register={register(`variations.${index}.variationName`, {
                    required: "Variation Name is required",
                  })}
                />
              </div>
              <div className="w-full">
                <ResuableDropdownMenu
                  name={`variations.${index}.attribute`}
                  label="Attribute"
                  options={Object.values(AttributeEnum)}
                  errorMessage={errors.variations?.[index]?.attribute?.message}
                  onSelect={(value) => {
                    setValue(
                      `variations.${index}.attribute`,
                      value as AttributeEnum,
                      {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      }
                    );
                  }}
                  register={register(`variations.${index}.attribute`, {
                    required: "Attribute is required",
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full">
                <ResuableInput
                  label="Total Stock"
                  name={`variations.${index}.totalStock`}
                  type="text"
                  register={register}
                  validation={{
                    required: "Total Stock is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.variations?.[index]?.totalStock?.message}
                  placeholder="2410"
                />
              </div>
              <div className="w-full">
                <ResuableInput
                  label="Regular Price"
                  name={`variations.${index}.regularPrice`}
                  type="text"
                  register={register}
                  validation={{
                    required: "Regular Price is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.variations?.[index]?.regularPrice?.message}
                  placeholder="1410"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full">
                <ResuableInput
                  label="Sale Price"
                  name={`variations.${index}.salePrice`}
                  type="text"
                  register={register}
                  validation={{
                    required: "Sale Price is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.variations?.[index]?.salePrice?.message}
                  placeholder="410"
                />
              </div>
              <div className="w-full">
                <ResuableDropdownMenu
                  name={`variations.${index}.shipping`}
                  label="Shipping"
                  options={Object.values(ShippinEnum)}
                  errorMessage={errors.variations?.[index]?.shipping?.message}
                  onSelect={(value) => {
                    setValue(
                      `variations.${index}.shipping`,
                      value as ShippinEnum,
                      {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      }
                    );
                  }}
                  register={register(`variations.${index}.shipping`, {
                    required: "Shipping is required",
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full md:w-1/2">
                <ResuableInput
                  label="Shipping Unit"
                  name={`variations.${index}.shippingUnit`}
                  type="text"
                  register={register}
                  validation={{
                    required: "Shipping Unit is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.variations?.[index]?.shippingUnit?.message}
                  placeholder="410"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-800 transition-all duration-300 rounded-md shadow-md flex items-center gap-2"
                >
                  Remove <FaTrash size={18} />
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={() =>
              append({
                variationName: "",
                attribute: "",
                totalStock: "",
                regularPrice: "",
                salePrice: "",
                shipping: "",
                shippingUnit: "",
              })
            }
            className=" px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm bg-[#12B76A] text-white rounded-md hover:bg-[#3c6b56] items-center gap-2 transition-all duration-200"
          >
            <FaPlus />
            Add Variation
          </button>
          <button
            type="submit"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
