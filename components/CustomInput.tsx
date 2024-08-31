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
  id:string
  autocomplete: string;
};

const CustomInput = ({ control, name, label, placeholder, id, autocomplete }: CustomInputProps) => {

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item" >
          <FormLabel  className="form-label" id={id}>
            {label}
          </FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-2 form-message" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
