import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { FieldHookConfig, useField } from "formik";
import React from "react";

type InputFieldProps = FieldHookConfig<any> & {
  label: string;
  placeholder: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, meta, helper] = useField(props);
  return (
    <FormControl isInvalid={!!meta.error} my={8}>
      <Input
        {...field}
        type={props.type}
        id={field.name}
        placeholder={props.placeholder}
      />
      {meta.error ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
};
