import { Button } from "@chakra-ui/button";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { InputField } from "../components/InputField";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { createUrqlClient } from "../utils/urqlClient";

interface registerProps {}

const register: React.FC<registerProps> = () => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <>
      <NavBar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ username: "", password: "", email: "" }}
          onSubmit={async (values, actions) => {
            const response = await register(values);
            if (response.data?.register.errors) {
              actions.setErrors(toErrorMap(response.data.register.errors));
            } else if (response.data?.register.user) {
              router.push("/");
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
              <InputField name="email" placeholder="Email" label="Email" />
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
    </>
  );
};

export default withUrqlClient(createUrqlClient)(register);
