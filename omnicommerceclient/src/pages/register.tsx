import { Button } from "@chakra-ui/button";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface registerProps {}

const register: React.FC<registerProps> = () => {
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, actions) => {
          const response = await register(values);
          if (response.data?.register.errors) {
            actions.setErrors(toErrorMap(response.data.register.errors));
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="Username"
              label="Username"
            />
            <InputField
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
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
              REGISTER
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default register;
