import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { DocumentNode } from "graphql";
import router from "next/dist/client/router";
import React from "react";
import { OperationContext, OperationResult } from "urql";
import {
  Maybe,
  useCreateVendorMutation,
  User,
  useUpdateVendorMutation,
  Vendor,
} from "../../generated/graphql";
import login from "../../pages/login";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";
import Wrapper from "../Wrapper";

interface VendorFormProps {
  operation: "CREATE" | "UPDATE";
  onClose: () => void;
  vendor?: { __typename?: "Vendor" } & Pick<Vendor, "name" | "id"> & {
      createdBy: { __typename?: "User" } & Pick<User, "username">;
      modifiedBy?: Maybe<{ __typename?: "User" } & Pick<User, "username">>;
    };
}

export const VendorForm: React.FC<VendorFormProps> = ({
  operation,
  onClose,
  vendor,
}) => {
  const [, createVendor] = useCreateVendorMutation();
  const [, updateVendor] = useUpdateVendorMutation();
  console.log(vendor);
  return (
    <Formik
      initialValues={vendor ? { name: vendor.name } : { name: "" }}
      onSubmit={async (values, actions) => {
        if (operation === "CREATE") {
          const response = await createVendor(values);
          if (response.data?.createVendor.errors) {
            actions.setErrors(toErrorMap(response.data.createVendor.errors));
          } else {
            onClose();
          }
        } else if (operation === "UPDATE" && vendor) {
          const response = await updateVendor({
            id: vendor?.id,
            name: values.name,
          });
          if (response.data?.updateVendor?.errors) {
            actions.setErrors(toErrorMap(response.data.updateVendor.errors));
          } else {
            onClose();
          }
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField
            name="name"
            placeholder="Vendor name"
            label="Vendor Name"
          />
          <Button
            my={4}
            type="submit"
            variant="outline"
            color="white"
            background="teal.400"
            _hover={{ bg: "teal.600" }}
            verticalAlign="middle"
            isLoading={isSubmitting}
          >
            SAVE
          </Button>
        </Form>
      )}
    </Formik>
  );
};
