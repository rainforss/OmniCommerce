import { Button } from "@chakra-ui/button";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { InputField } from "../components/InputField";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { createUrqlClient } from "../utils/urqlClient";

interface loginProps {}

const login: React.FC<loginProps> = () => {
  const [, login] = useLoginMutation();
  const router = useRouter();
  return (
    <>
      <NavBar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ usernameOrEmail: "", password: "" }}
          onSubmit={async (values, actions) => {
            const response = await login(values);
            if (response.data?.login.errors) {
              actions.setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="usernameOrEmail"
                placeholder="Username or email address"
                label="Username/Email"
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
                LOGIN
              </Button>
              <Button
                float="right"
                my={4}
                onClick={() => router.push("/reset-password")}
              >
                Forgot Password
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(login);
