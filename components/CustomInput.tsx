import React from "react";
import {
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldPath, Control } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

type CustomInputProps = {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
};

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
  const uniqueId = `${name}-form-item`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel htmlFor={uniqueId} className="form-label">
            {label}
          </FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                id={uniqueId}
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage id={`${uniqueId}-message`} className="mt-2 form-message" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
